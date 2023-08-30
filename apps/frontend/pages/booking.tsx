import React, { forwardRef, use, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {
	Button,
	Textarea,
	Container,
	ActionIcon,
	Loader,
	Select,
	Skeleton,
	TextInput,
} from "@mantine/core";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { Progress, Input as MantineInput } from "@mantine/core";
import { Group } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { CalendarEvent, X, ChevronDown, Clock } from "tabler-icons-react";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
import { useRouter } from "next/router";
import PaymentService from "../services/payment.service";
import { RetrieveCatalogObjectResponse } from "square";
import { format, formatISO, parse, parseISO, toDate } from "date-fns";
import {
	CreditCard,
	GooglePay,
	PaymentForm,
} from "react-square-web-payments-sdk";

import { useCreateBookingMutation } from "../generated/graphql";
const steps = {
	SERVICE: "SERVICE",
	BOOKING: "BOOKING",
	INFORMATION: "INFORMATION",
	PAYMENT: "PAYMENT",
	BOOKED: "BOOKED",
};

interface Catalog {
	value: string;
	group: string;
	label: string;
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
	durationminutes?: number;
	startat?: string;
}

enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
	({ durationminutes, startat, ...others }, ref) => {
		return (
			<div {...others} ref={ref}>
				<div className="flex flex-col justify-between">
					<p className="my-0">
						{format(new Date(startat), "EEEE, MMMM dd, yyyy h:mm a")}
					</p>
					<p className="my-0">
						Duration: {durationminutes ? durationminutes : 0} min
					</p>
				</div>
			</div>
		);
	}
);

SelectItem.displayName = "div";

export default function BookingView() {
	const router = useRouter();
	const { service } = router.query;
	const ref = useRef<HTMLInputElement>();
	const [dateBooking, setDateBooking] = useState<Date | null>(null);
	const [isBook, setIsBookOrPay] = useState(false);
	const [infoService, setInfoService] =
		useState<RetrieveCatalogObjectResponse | null>(null);
	const [step, setStep] = useState(steps.SERVICE);
	const [data, setData] = useState([] as Catalog[]);
	const [opened, setOpened] = useState(false);
	const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);
	const [isLoadingRetrieveService, setIsLoadingRetrieveService] =
		useState(false);
	const [errorService, setErrorService] = useState(false);
	const [createBooking, { loading }] = useCreateBookingMutation();
	const [loadingPayment, setLoadingPayment] = useState(false);
	const form = useForm({
		initialValues: {
			name: "",
			lastName: "",
			email: "",
			phone: "",
			message: "",
			address: "",
			city: "",
			state: "California",
			zip: "",
		},
		validateInputOnChange: true,
		validate: {
			name: (value) => (value.trim().length > 0 ? null : "Name is required"),
			lastName: (value) =>
				value.trim().length > 0 ? null : "Last name is required",
			email: (value) => {
				if (value.trim().length > 0) {
					if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
						return "Email is invalid";
					}
				} else {
					return "Email is required";
				}
			},

			phone: (value) => {
				if (value.trim().length > 0) {
					if (!value.match(/^[0-9]+$/)) {
						return "Phone is invalid";
					}
				} else {
					return "Phone is required";
				}
			},
			address: (value) =>
				value.trim().length > 0 ? null : "Address is required",
			city: (value) => (value.trim().length > 0 ? null : "City is required"),
			state: (value) => (value.trim().length > 0 ? null : "State is required"),
			zip: (value) => {
				if (value.trim().length > 0) {
					if (!value.match(/^[0-9]+$/)) {
						return "Zip code is invalid";
					}
				} else {
					return "Zip code is required";
				}
			},
		},
	});
	const formDate = useForm({
		initialValues: {
			date: "",
			time: "",
		},
		validateInputOnChange: true,

		validate: {
			date: (value) => (value.trim().length > 0 ? null : "Date is required"),
			time: (value) => {
				console.log(value);
				const timeRegex: RegExp = /^(?:0[8-9]|1[0-9]|2[0]):[0-5][0-9]$/;

				if (value.trim().length > 0) {
					if (!value.match(timeRegex)) {
						return "Time is invalid";
					}
				} else {
					return "Time is required";
				}
			},
		},
	});
	const sendBooking = async () => {
		if (isBook === true) {
			const bookingData = {
				...form.values,
				...formDate.values,
				serviceId: infoService?.object?.id,
			};

			const dateTime = formatISO(
				parse(
					bookingData.date + " " + bookingData.time,
					"MM-dd-yyyy HH:mm",
					new Date()
				)
			);
			console.log(dateTime);

			createBooking({
				variables: {
					data: {
						address: bookingData.address,
						city: bookingData.city,
						/* bookingData.date + " " + bookingData.time, */
						dateTime: dateTime,

						email: bookingData.email,
						message: bookingData.message,
						name: bookingData.name,
						lastName: bookingData.lastName,
						phone: bookingData.phone,
						servicesName: infoService?.object?.itemData?.name,
						state: bookingData.state,
						zipCode: bookingData.zip,
					},
				},
			})
				.then(() => {
					setStep(steps.BOOKED);
				})
				.catch((error) => {
					console.log(error);

					toast.error(error.message);
				});
		} else {
			setStep(steps.PAYMENT);
		}
	};

	const sendBookingDate = () => {
		window.scrollTo(0, 0);
		setStep(steps.INFORMATION);
	};

	const handleNext = () => {
		window.scrollTo(0, 0);
		if (step === steps.SERVICE) {
			if (!infoService) {
				setErrorService(true);
				return;
			}
			setStep(steps.BOOKING);
		} else if (step === steps.BOOKING) {
			setStep(steps.INFORMATION);
		} else {
			setStep(steps.SERVICE);
		}
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		if (step === steps.BOOKING) {
			setStep(steps.SERVICE);
		} else if (step === steps.INFORMATION) {
			setStep(steps.BOOKING);
		} else {
			setStep(steps.SERVICE);
		}
	};

	useEffect(() => {
		if (opened) {
			const fetchData = async () => {
				setIsLoadingCatalog(true);
				const [catalogData] = await Promise.all([
					CatalogService.fetchCatalogItems(
						CatalogItemProductType.AppointmentsService
					),
				]);

				const allCatalogData: Catalog[] =
					catalogData && catalogData.items
						? catalogData.items.map((item) => {
								return {
									value: item.id,
									label: item.itemData.name,
									group:
										item.itemData.productType === "REGULAR"
											? "Regular"
											: "Service",
								};
						  })
						: [];

				setData(allCatalogData);
				setIsLoadingCatalog(false);
			};

			fetchData();
		}
	}, [opened]);

	useEffect(() => {
		console.log(service);
		if (service) {
			getInfoService(service as string);
			const fetchData = async () => {
				setIsLoadingCatalog(true);
				const [catalogData] = await Promise.all([
					CatalogService.fetchCatalogItems(
						CatalogItemProductType.AppointmentsService
					),
				]);

				const allCatalogData: Catalog[] =
					catalogData && catalogData.items
						? catalogData.items.map((item) => {
								return {
									value: item.id,
									label: item.itemData.name,
									group:
										item.itemData.productType === "REGULAR"
											? "Regular"
											: "Service",
								};
						  })
						: [];

				setData(allCatalogData);
				setIsLoadingCatalog(false);
			};
			fetchData();
			setStep(steps.BOOKING);
		}
	}, [service]);

	const getInfoService = async (id: string) => {
		setIsLoadingRetrieveService(true);
		const [catalogData, imagesData] = await Promise.all([
			CatalogService.retrieveCatalogObject(id),
			ImagesService.fetchImages(),
		]);
		if (!catalogData || !catalogData.object) {
			router.push("/");
			return;
		}

		const image = imagesData.objects?.find((image) =>
			image.type === "IMAGE" &&
			/* image.id === (catalogData.object?.itemData.imageIds[0] || "") */
			image.id === catalogData &&
			catalogData.object &&
			catalogData.object.itemData &&
			catalogData.object.itemData.imageIds[0]
				? catalogData.object.itemData.imageIds[0]
				: ""
		);

		const enhancedCatalogData: RetrieveCatalogObjectResponse = {
			errors: catalogData.errors,
			object: {
				...catalogData.object,
				imageData: image?.imageData || null,
			},
			relatedObjects: catalogData.relatedObjects,
		};

		setInfoService(enhancedCatalogData);
		setIsLoadingRetrieveService(false);
		console.log(infoService);
	};

	return (
		<div className="relative h-full w-full">
			<div className="absolute h-full img-booking">
				{step === steps.SERVICE && (
					<Image
						src="/images/booking/step 1.webp"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
						alt="step 1"
					/>
				)}
				{step === steps.BOOKING && (
					<Image
						src="/images/booking/step 2.webp"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
						alt="step 2"
					/>
				)}
				{step === steps.INFORMATION ||
				step === steps.BOOKED ||
				step === steps.PAYMENT ? (
					<Image
						src="/images/booking/step 3.webp"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
						alt="step 3"
					/>
				) : null}
			</div>
			<Container size="xl" className="lg:pt-32 md:pt-24 pb-12 pt-56">
				<div className="grid grid-cols-12 ">
					<div
						className="md:col-start-4 md:col-end-13 
					col-start-1 col-end-13 
					"
					>
						<Progress
							color="secondary.0"
							value={
								step === steps.SERVICE
									? 0
									: step === steps.BOOKING
									? 33
									: step === steps.INFORMATION
									? 66
									: step === steps.PAYMENT
									? 80
									: 100
							}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 ">
					<h2 className="md:col-start-4 md:col-end-13 col-start-1 col-end-13">
						Bookings
					</h2>
				</div>
				<div className="grid grid-cols-12 ">
					<div
						className={`
							${
								step !== steps.BOOKED && step !== steps.PAYMENT
									? "md:col-start-4 md:col-end-8 col-start-1 col-end-13 sm:col-start-1 sm:col-end-7"
									: "md:col-start-4 md:col-end-13 col-start-1 col-end-13 sm:col-start-1 sm:col-end-7"
							}
					`}
					>
						{step === steps.PAYMENT && (
							<PaymentForm
								applicationId={process.env.NEXT_PUBLIC_APPLICATION_ID || ""}
								locationId={process.env.NEXT_PUBLIC_LOCATION_ID || ""}
								cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
									setLoadingPayment(true);
									await PaymentService.createPayment(
										token.token,
										{
											amount: Number(
												infoService.object?.itemData?.variations[0]
													.itemVariationData.priceMoney.amount
											),
											currency: "USD",
										},
										"alexishs451@gmail.com"
									)
										.then((response) => {
											console.log(response);

											const dateTime = formatISO(
												parse(
													formDate.values.date + " " + formDate.values.time,
													"MM-dd-yyyy HH:mm",
													new Date()
												)
											);
											createBooking({
												variables: {
													data: {
														address: form.values.address,
														city: form.values.city,
														/* bookingData.date + " " + bookingData.time, */
														dateTime: dateTime,

														email: form.values.email,
														message: form.values.message,
														name: form.values.name,
														lastName: form.values.name,
														phone: form.values.phone,
														servicesName: infoService?.object?.itemData?.name,
														state: form.values.state,
														zipCode: form.values.zip,
														squareUpId: response.payment.id,
													},
												},
											})
												.then(() => {
													window.scrollTo(0, 0);
													setLoadingPayment(false);
													setStep(steps.BOOKED);
												})
												.catch((error) => {
													toast.error("Something went wrong");
													setLoadingPayment(false);
												});
										})
										.catch((error) => {
											toast.error("Something went wrong");
											setLoadingPayment(false);
										});
								}}
								createPaymentRequest={() => ({
									countryCode: "US",
									currencyCode: "USD",

									total: {
										amount: (
											Number(
												infoService.object?.itemData?.variations[0]
													.itemVariationData.priceMoney.amount
											) / 100
										).toString(),
										label: "Total",
									},
								})}
							>
								{loadingPayment ? (
									<div className="flex justify-center h-auto ">
										<Loader color="secondary.0" />
									</div>
								) : (
									<>
										<CreditCard
											render={(Button) => (
												<Button>
													{infoService &&
													infoService.object?.itemData?.variations[0]
														? (
																Number(
																	infoService.object?.itemData?.variations[0]
																		.itemVariationData.priceMoney.amount
																) / 100
														  ).toFixed(2)
														: 100}{" "}
													USD
												</Button>
											)}
										/>
										<br />

										<GooglePay className="mt-4" />
									</>
								)}
							</PaymentForm>
						)}
						{step === steps.BOOKED && (
							<div className="text-center">
								<h1>Thank you!</h1>
								<h4 className="mb-4">Booking confirmed</h4>
								<p>
									Thank you for your booking. We will contact you as soon as
									possible.
								</p>
								<p>
									We have sent you an email with the details of your booking.
								</p>
							</div>
						)}
						{step === steps.INFORMATION && (
							<>
								<form onSubmit={form.onSubmit(() => sendBooking())}>
									<p>General information</p>

									<div className="space-y-5">
										<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
											<TextInput
												placeholder={"Name"}
												radius="lg"
												styles={(theme) => ({
													input: {
														"&:focus-within": {
															borderColor: theme.colors.secondary[0],
														},
														borderColor: theme.colors.secondary[0],
													},
												})}
												{...form.getInputProps("name")}
											/>
											<TextInput
												placeholder={"Last Name"}
												radius="lg"
												styles={(theme) => ({
													input: {
														"&:focus-within": {
															borderColor: theme.colors.secondary[0],
														},
														borderColor: theme.colors.secondary[0],
													},
												})}
												{...form.getInputProps("lastName")}
											/>
										</div>
										<TextInput
											placeholder={"Email"}
											radius="lg"
											styles={(theme) => ({
												input: {
													"&:focus-within": {
														borderColor: theme.colors.secondary[0],
													},
													borderColor: theme.colors.secondary[0],
												},
											})}
											{...form.getInputProps("email")}
										/>
										<TextInput
											placeholder={"Phone"}
											radius="lg"
											styles={(theme) => ({
												input: {
													"&:focus-within": {
														borderColor: theme.colors.secondary[0],
													},
													borderColor: theme.colors.secondary[0],
												},
											})}
											{...form.getInputProps("phone")}
										/>
										<Textarea
											placeholder="Message"
											radius="lg"
											styles={(theme) => ({
												input: {
													"&:focus-within": {
														borderColor: theme.colors.secondary[0],
													},
													borderColor: theme.colors.secondary[0],
												},
											})}
											{...form.getInputProps("message")}
										/>
									</div>

									<p>Address information</p>

									<div className="space-y-5">
										<TextInput
											placeholder={"Address"}
											radius="lg"
											styles={(theme) => ({
												input: {
													"&:focus-within": {
														borderColor: theme.colors.secondary[0],
													},
													borderColor: theme.colors.secondary[0],
												},
											})}
											{...form.getInputProps("address")}
										/>
										<TextInput
											placeholder={"City"}
											radius="lg"
											styles={(theme) => ({
												input: {
													"&:focus-within": {
														borderColor: theme.colors.secondary[0],
													},
													borderColor: theme.colors.secondary[0],
												},
											})}
											{...form.getInputProps("city")}
										/>

										<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
											<Select
												radius="md"
												styles={(theme) => ({
													input: {
														"&:focus-within": {
															borderColor: theme.colors.secondary[0],
														},
														borderColor: theme.colors.secondary[0],
													},
													rightSection: { pointerEvents: "none" },
												})}
												/* defaultValue="CA" */
												disabled
												data={[
													{ value: "DE", label: "DE" },
													{
														value: "TX",
														label: "TX",
													},
													{
														value: "California",
														label: "California",
													},
													{
														value: "NC",
														label: "NC",
													},
													{
														value: "MD",
														label: "MD",
													},
												]}
												placeholder="State"
												rightSection={
													<ChevronDown
														size="1rem"
														style={{ display: "block", opacity: 0.5 }}
													/>
												}
												{...form.getInputProps("state")}
											/>

											<TextInput
												placeholder={"Zip code"}
												radius="lg"
												styles={(theme) => ({
													input: {
														"&:focus-within": {
															borderColor: theme.colors.secondary[0],
														},
														borderColor: theme.colors.secondary[0],
													},
												})}
												{...form.getInputProps("zip")}
											/>
										</div>
									</div>

									{/* 	{errorRecaptcha && (
										<p className="text-error text-center">
											Recaptcha is required
										</p>
									)} */}
									<div className="flex mt-12 flex-col gap-y-2 mb-20">
										<Button
											radius="xl"
											color="secondary.0"
											type="submit"
											onClick={() => setIsBookOrPay(true)}
											loading={loading}
										>
											Pay later
										</Button>
										<Button
											radius="xl"
											color="secondary.0"
											type="submit"
											onClick={() => setIsBookOrPay(false)}
										>
											Pay now
										</Button>
									</div>
								</form>
							</>
						)}
						{step === steps.BOOKING && (
							<form onSubmit={formDate.onSubmit(() => sendBookingDate())}>
								<MantineInput
									placeholder="Date"
									radius="lg"
									readOnly
									styles={(theme) => ({
										input: {
											"&:focus-within": {
												borderColor: theme.colors.secondary[0],
											},
											borderColor: theme.colors.secondary[0],
										},
									})}
									icon={<CalendarEvent />}
									rightSection={
										<div>
											<X
												onClick={() => {
													formDate.setFieldValue("date", "");
													setDateBooking(null);
												}}
												size="1rem"
												style={{ display: "block", opacity: 0.5 }}
												className="cursor-pointer"
											/>
										</div>
									}
									{...formDate.getInputProps("date")}
								/>
								<div className="flex justify-center sm:justify-start">
									<div className="rounded-md bg-onPrimary shadow-md mt-2 p-4 lg:w-[70%]  w-auto  ">
										<Group position="center">
											<DatePicker
												value={dateBooking}
												onChange={(value) => {
													formDate.setFieldValue(
														"date",
														format(new Date(value), "MM-dd-yyyy")
													);
													setDateBooking(value);
												}}
												minDate={
													new Date(new Date().setDate(new Date().getDate()))
												}
											/>
										</Group>
									</div>
								</div>
								<div>
									<h6 className="mb-4">Time</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
										elementum praesent. Fames tellus massa tempus lectus
										vestibulum elementum amet amet metus.
									</p>
								</div>
								<TimeInput
									ref={ref}
									rightSection={
										<ActionIcon onClick={() => ref.current.showPicker()}>
											<Clock size="1rem" />
										</ActionIcon>
									}
									styles={(theme) => ({
										input: {
											"&:focus-within": {
												borderColor: theme.colors.secondary[0],
											},
											borderColor: theme.colors.secondary[0],
										},
									})}
									{...formDate.getInputProps("time")}
								/>
								<div className="flex mt-12 justify-between mb-20">
									<Button
										radius="xl"
										color="secondary.0"
										mr={10}
										onClick={handlePrev}
									>
										Back
									</Button>
									<Button radius="xl" color="secondary.0" type="submit">
										Next
									</Button>
								</div>
							</form>
						)}
						{step === steps.SERVICE && (
							<>
								<p>Select service.</p>
								<Select
									onChange={(value) => {
										getInfoService(value);
										setErrorService(false);
									}}
									error={errorService && "Select a service"}
									clearable
									disabled={isLoadingCatalog}
									nothingFound={data && <Loader size="xs" />}
									onDropdownOpen={() => setOpened(true)}
									styles={(theme) => ({
										input: {
											"&:focus-within": {
												borderColor: theme.colors.secondary[0],
											},
											borderColor: theme.colors.secondary[0],
										},

										rightSection: { pointerEvents: "none" },
									})}
									radius="md"
									placeholder="Select a service"
									rightSection={
										<ChevronDown
											size="1rem"
											style={{ display: "block", opacity: 0.5 }}
										/>
									}
									data={data}
									value={infoService ? infoService.object?.id : undefined}
								/>
							</>
						)}

						{step === steps.SERVICE && (
							<div className="flex mt-12 justify-end mb-10">
								<Button
									radius="xl"
									color="secondary.0"
									onClick={handleNext}
									disabled={isLoadingRetrieveService}
								>
									Next
								</Button>
							</div>
						)}
					</div>
					{step !== steps.BOOKED && step !== steps.PAYMENT ? (
						<div className="md:col-start-9 md:col-end-13 col-start-1 col-end-13 sm:col-start-8 sm:col-end-13">
							<div className="flex flex-row">
								<h5 className="mt-0 mr-6">Service </h5>
								{step === steps.INFORMATION || step === steps.BOOKING ? (
									<h5 className="mt-0 mr-2 text-info">Edit </h5>
								) : null}
							</div>

							<div className="bg-primary rounded-xl p-8 shadow-md">
								<div className="relative w-full h-40">
									{isLoadingRetrieveService ? (
										<Skeleton className="w-full h-full" radius="lg" />
									) : (
										<Image
											src={
												infoService && infoService.object.imageData
													? infoService.object.imageData.url
													: "/images/booking/service.png"
											}
											alt="service"
											layout="fill"
											objectFit="cover"
											className="rounded-lg"
										/>
									)}
								</div>
								<h6 className="mb-4">
									{isLoadingRetrieveService ? (
										<>
											<Skeleton height={8} radius="xl" className="mb-4" />
											<Skeleton height={8} radius="xl" width={"70%"} />
										</>
									) : infoService && infoService.object.itemData.name ? (
										infoService.object.itemData.name
									) : (
										"No service selected"
									)}
								</h6>
								<p></p>
								<h6 className="my-0">
									{isLoadingRetrieveService ? (
										<Skeleton height={8} radius="xl" width={"40%"} />
									) : (
										<>
											{infoService &&
											infoService.object?.itemData?.variations[0]
												? "$" +
												  (
														Number(
															infoService.object?.itemData?.variations[0]
																.itemVariationData.priceMoney.amount
														) / 100
												  ).toFixed(2)
												: 0}{" "}
											USD
										</>
									)}
								</h6>
								<h6 className="my-4">
									{isLoadingRetrieveService ? (
										<Skeleton height={8} radius="xl" width={"40%"} />
									) : (
										<>
											{infoService &&
											infoService.object?.itemData?.variations[0]
												? //function miliseconds to minutes
												  Math.floor(
														Number(
															infoService.object?.itemData?.variations[0]
																.itemVariationData.serviceDuration
														) / 60000
												  ) + " min"
												: "0"}{" "}
										</>
									)}
								</h6>
							</div>
							{step === steps.INFORMATION || step === steps.BOOKING ? (
								<>
									<div className="flex flex-row">
										<h5 className="mr-6 mb-0">Date and Time </h5>
										{step === steps.INFORMATION && (
											<h5 className="mr-2 mb-0 text-info">Edit </h5>
										)}
									</div>
									<div className="bg-primary rounded-xl p-8 mt-8 shadow-md flex">
										<CalendarEvent size={26} strokeWidth={2} />
										<h6 className="my-0 ml-4">
											{dateBooking
												? format(
														new Date(dateBooking),
														"h:mm a EEE, MMM dd, yyyy"
												  ) +
												  " " +
												  formDate.values.time
												: "No date selected"}
										</h6>
									</div>
								</>
							) : null}
						</div>
					) : null}
				</div>
			</Container>
		</div>
	);
}
