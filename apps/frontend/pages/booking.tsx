import React, { forwardRef, useEffect } from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Stepper,
	StepperProps,
	MultiSelect,
	ActionIcon,
	Loader,
	Select,
	Skeleton,
	Indicator,
	Avatar,
} from "@mantine/core";
import { useState } from "react";
import { Progress, Input as MantineInput } from "@mantine/core";
import { Group } from "@mantine/core";
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { CalendarEvent, X, ChevronDown } from "tabler-icons-react";
import { useRouter } from "next/router";
import Input from "../components/Input";
import { CatalogItemProductType } from "../gql/graphql";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
import BookingService from "../services/booking.service";
import { Availability, RetrieveCatalogObjectResponse } from "square";
import { format, set } from "date-fns";
const steps = {
	SERVICE: "SERVICE",
	BOOKING: "BOOKING",
	INFORMATION: "INFORMATION",
	PAYMENT: "PAYMENT",
};

interface Catalog {
	value: string;
	group: string;
	label: string;
}

interface availableBookingDates {
	value: string;
	teammemberid?: string;
	durationminutes?: number;
	servicevariationid?: string;
	servicevariationversion?: number;
	startat?: string;
	label: string;
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
	durationminutes?: number;
	startat?: string;
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
	const [dateBooking, setDateBooking] = useState<[Date | null, Date | null]>([
		null,
		null,
	]);
	const [infoService, setInfoService] =
		useState<RetrieveCatalogObjectResponse | null>(null);
	const [step, setStep] = useState(steps.SERVICE);
	const [data, setData] = useState([] as Catalog[]);
	const [opened, setOpened] = useState(false);
	const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);
	const [isLoadingRetrieveService, setIsLoadingRetrieveService] =
		useState(false);
	const [errorService, setErrorService] = useState(false);
	const [errorBooking, setErrorBooking] = useState({
		date: false,
		dateSelected: false,
	});
	const [availableBooking, setAvailableBooking] = useState(
		[] as availableBookingDates[]
	);
	const [selectedDateBooking, setSelectedDateBooking] = useState("");

	const handleNext = () => {
		if (step === steps.SERVICE) {
			if (!infoService) {
				setErrorService(true);
				return;
			}
			setStep(steps.BOOKING);
		} else if (step === steps.BOOKING) {
			if (dateBooking[0] === null || dateBooking[1] === null) {
				setErrorBooking({
					date: true,
					dateSelected: false,
				});
				return;
			} else if (selectedDateBooking === "") {
				setErrorBooking({
					date: false,
					dateSelected: true,
				});
				return;
			}
			setStep(steps.INFORMATION);
		} else {
			setStep(steps.SERVICE);
		}
	};

	const handlePrev = () => {
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
				const [catalogData /* , catalogDataAppointmentsService */] =
					await Promise.all([
						CatalogService.fetchCatalogItems(
							CatalogItemProductType.AppointmentsService
						),
						/* 	CatalogService.fetchCatalogItems(
							CatalogItemProductType.AppointmentsService
						), */
					]);

				/* 	const catalogData = catalogDataRegular.items.concat(
					catalogDataAppointmentsService.items
				); */

				const allCatalogData: Catalog[] = catalogData.items.map((item) => {
					return {
						value: item.id,
						label: item.itemData.name,
						group:
							item.itemData.productType === "REGULAR" ? "Regular" : "Service",
					};
				});

				setData(allCatalogData);
				setIsLoadingCatalog(false);
			};

			fetchData();
		}
	}, [opened]);

	const inputDate = () => {
		if (dateBooking[0] === null && dateBooking[1] === null) {
			return "";
		} else if (dateBooking[0] !== null && dateBooking[1] === null) {
			//Genera horario de USA
			return `${dateBooking[0]?.toLocaleDateString(
				"en-US" /* , {
				weekday: "short",
				year: "numeric",
				month: "short",
				day: "numeric",
			} */
			)} - `;
		} else if (dateBooking[1] !== null && dateBooking[0] !== null) {
			return `${dateBooking[0]?.toLocaleDateString(
				"en-US"
			)} - ${dateBooking[1]?.toLocaleDateString("en-US")}`;
		}
	};

	const getInfoService = async (id: string) => {
		setIsLoadingRetrieveService(true);
		const [catalogData, imagesData] = await Promise.all([
			CatalogService.retrieveCatalogObject(id),
			ImagesService.fetchImages(),
		]);
		const image = imagesData.objects?.find(
			(image) =>
				image.type === "IMAGE" &&
				image.id === (catalogData.object?.itemData.imageIds[0] || "")
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
	};

	const getAvailableBooking = async (
		dateBooking: [Date | null, Date | null]
	) => {
		if (infoService.object && dateBooking[0] && dateBooking[1]) {
			const availableBooking =
				await BookingService.fecthSearchAvailabilityBooking(
					format(dateBooking[0], "yyyy-MM-dd'T'HH:mm:ssxxx"),
					format(dateBooking[1], "yyyy-MM-dd'T'HH:mm:ssxxx"),
					infoService.object.itemData.variations[0].id
				);

			console.log(availableBooking);

			const availableBookingDates: availableBookingDates[] =
				availableBooking.availabilities.map((availability) => {
					return {
						value: availability.startAt,
						teammemberid: availability.appointmentSegments[0].teamMemberId,
						durationminutes:
							availability.appointmentSegments[0].durationMinutes,
						servicevariationid:
							availability.appointmentSegments[0].serviceVariationId,
						servicevariationversion: Number(
							availability.appointmentSegments[0].serviceVariationVersion
						),
						startat: availability.startAt,
						label:
							format(
								new Date(availability.startAt),
								"EEEE, MMMM dd, yyyy h:mm a"
							) +
							` - ${availability.appointmentSegments[0].durationMinutes} min`,
					};
				});
			console.log(availableBookingDates);

			setAvailableBooking(availableBookingDates);
		}
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
					/>
				)}
				{step === steps.BOOKING && (
					<Image
						src="/images/booking/step 2.webp"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
					/>
				)}
				{step === steps.INFORMATION && (
					<Image
						src="/images/booking/step 3.webp"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
					/>
				)}
			</div>
			<Container size="xl" className="lg:pt-32 pt-24 pb-12 ">
				<div className="grid grid-cols-12 ">
					<div className="col-start-4 col-end-13">
						<Progress
							color="secondary.0"
							value={
								step === steps.SERVICE
									? 0
									: step === steps.BOOKING
									? 33
									: step === steps.INFORMATION
									? 66
									: 100
							}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 ">
					<h2 className="col-start-4 col-end-13">Bookings</h2>
					<p>{isLoadingCatalog}</p>
				</div>
				<div className="grid grid-cols-12 ">
					<div className="col-start-4 col-end-8">
						{step === steps.INFORMATION && (
							<>
								<p>
									Lorem ipsum dolor sit amet consectetur. Congue sit tortor
									tellus lacinia.
								</p>

								<div className="space-y-5">
									<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
										<Input placeholder="Name" />
										<Input placeholder="Email" />
									</div>

									<Input placeholder="Phone" />
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
									/>
								</div>

								<p>
									Lorem ipsum dolor sit amet consectetur. Congue sit tortor
									tellus lacinia.
								</p>

								<div className="space-y-5">
									<Input placeholder="Lorem" />
									<Input placeholder="Lorem" />
									<Input placeholder="Lorem" />
									<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
										<Input placeholder="Lorem" />
										<Input placeholder="Lorem" />
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur. Libero proin
									pellentesque molestie dictum mauris vel malesuada amet mauris.
									Aenean donec sit viverra egestas porta. Sollicitudin eu magna
									vulputate commodo arcu diam. Sed justo aliquet est congue ut
									quisque ut nunc pretium. Nisl est quisque urna placerat
									adipiscing aliquet nulla. Erat etiam non mi massa suspendisse
									faucibus. Viverra quis purus nam eget hendrerit. Laoreet
									congue non donec blandit odio. Massa felis sed interdum diam
									habitasse. Sem elit ante ultrices risus id quam. Massa risus
									purus condimentum pellentesque aliquet id. Mauris et pulvinar
									nibh proin adipiscing sit ipsum. Pellentesque gravida tempus
									vestibulum egestas volutpat pretium eget. Sed mus aliquet urna
									dictum neque quis lacus cras phasellus.
								</p>
							</>
						)}
						{step === steps.BOOKING && (
							<>
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
									error={errorBooking["date"] && "Select a date"}
									value={inputDate()}
									icon={<CalendarEvent />}
									rightSection={
										<div>
											<X
												onClick={() => {
													setSelectedDateBooking("");
													setDateBooking([null, null] as [
														Date | null,
														Date | null
													]);
													setAvailableBooking([] as availableBookingDates[]);
												}}
												size="1rem"
												style={{ display: "block", opacity: 0.5 }}
												className="cursor-pointer"
											/>
										</div>
									}
								/>
								<div className="rounded-md bg-onPrimary shadow-md mt-2 p-4 w-[70%]  ">
									<Group position="center">
										<DatePicker
											onChange={(value) => {
												setSelectedDateBooking("");
												setAvailableBooking([] as availableBookingDates[]);
												setErrorBooking({ date: false, dateSelected: false });
												setDateBooking(value), getAvailableBooking(value);
											}}
											type="range"
											value={dateBooking}
											minDate={
												new Date(new Date().setDate(new Date().getDate()))
											}
										/>
									</Group>
								</div>
								<div>
									<h6 className="mb-4">Available days</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
										elementum praesent. Fames tellus massa tempus lectus
										vestibulum elementum amet amet metus.
									</p>
								</div>

								<Select
									styles={(theme) => ({
										input: {
											"&:focus-within": {
												borderColor: theme.colors.secondary[0],
											},
											borderColor: theme.colors.secondary[0],
										},
										rightSection: { pointerEvents: "none" },
									})}
									error={errorBooking["dateSelected"] && "Select a date"}
									radius="md"
									clearable
									placeholder="Select a date"
									disabled={availableBooking.length === 0}
									rightSection={
										<ChevronDown
											size="1rem"
											style={{ display: "block", opacity: 0.5 }}
										/>
									}
									nothingFound="No available dates"
									data={availableBooking}
									itemComponent={SelectItem}
									onChange={(value) => {
										setSelectedDateBooking(value);
										setErrorBooking({ date: false, dateSelected: false });
									}}
									value={selectedDateBooking}
								/>
							</>
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
						{/*
						 */}
						{step === steps.SERVICE && (
							<div className="flex mt-12 justify-end ">
								<Button radius="xl" color="secondary.0" onClick={handleNext}>
									Next
								</Button>
							</div>
						)}
						{step === steps.BOOKING && (
							<div className="flex mt-12 justify-between ">
								<Button
									radius="xl"
									color="secondary.0"
									mr={10}
									onClick={handlePrev}
								>
									Back
								</Button>
								<Button
									radius="xl"
									color="secondary.0"
									onClick={handleNext}
									disabled={errorService}
								>
									Next
								</Button>
							</div>
						)}
						{step === steps.INFORMATION && (
							<div className="flex mt-12 w-full ">
								<Button radius="xl" color="secondary.0" className="w-full">
									Nexts
								</Button>
							</div>
						)}
					</div>
					<div className="col-start-9 col-end-13">
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

								{/* {infoService && infoService.object.itemData.name
									? infoService.object.itemData.name
									: "No service selected"} */}
							</h6>
							<p></p>
							<h6 className="my-0">
								{/* 	$
								{infoService && infoService.object?.itemData?.variations[0]
									? (
											Number(
												infoService.object?.itemData?.variations[0]
													.itemVariationData.priceMoney.amount
											) / 100
									  ).toFixed(2)
									: 0}{" "}
								USD */}
								{isLoadingRetrieveService ? (
									<Skeleton height={8} radius="xl" width={"40%"} />
								) : (
									<>
										{infoService && infoService.object?.itemData?.variations[0]
											? (
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
							{/* 	<p className="mt-4 mb-0">
								{infoService && infoService.object.itemData.variations[0].itemVariationData.}
							</p> */}
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
										{/* 12:00 PM Sat. 01 Mar 2023 */}
										{selectedDateBooking
											? format(
													new Date(selectedDateBooking),
													"h:mm a EEE, MMM dd, yyyy"
											  )
											: "No date selected"}
									</h6>
								</div>
							</>
						) : null}
					</div>
				</div>
			</Container>
		</div>
	);
}
