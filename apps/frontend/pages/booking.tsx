import React, { useEffect } from "react";
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
import { RetrieveCatalogObjectResponse } from "square";

const steps = {
	SERVICE: "SERVICE",
	BOOKING: "BOOKING",
	INFORMATION: "INFORMATION",
	PAYMENT: "PAYMENT",
};

interface services {
	id: string;
}
interface Catalog {
	value: /* {
		idGeneral: string;
		nameService: string;
		productType: string;
		variation: {
			id: string;
			itemVariationData: {
				itemId: string;
				pricingType: string;
			};
		};
	}; */ string;
	group: string;
	label: string;
}
export default function BookingView() {
	/* const [value, setValue] = useState<Date | null>(null); */
	const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
	const [infoService, setInfoService] =
		useState<RetrieveCatalogObjectResponse | null>(null);
	const router = useRouter();

	const [step, setStep] = useState(steps.SERVICE);
	const handleNext = () => {
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
		if (step === steps.BOOKING) {
			setStep(steps.SERVICE);
		} else if (step === steps.INFORMATION) {
			setStep(steps.BOOKING);
		} else {
			setStep(steps.SERVICE);
		}
	};
	const [data, setData] = useState([] as Catalog[]);
	const [opened, setOpened] = useState(false);
	const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);
	const [isLoadingRetrieveService, setIsLoadingRetrieveService] =
		useState(false);
	const [errorService, setErrorService] = useState(false);
	useEffect(() => {
		if (opened) {
			const fetchData = async () => {
				setIsLoadingCatalog(true);
				const [catalogDataRegular, catalogDataAppointmentsService] =
					await Promise.all([
						CatalogService.fetchCatalogItems(CatalogItemProductType.Regular),
						CatalogService.fetchCatalogItems(
							CatalogItemProductType.AppointmentsService
						),
					]);

				const catalogData = catalogDataRegular.items.concat(
					catalogDataAppointmentsService.items
				);

				const allCatalogData: Catalog[] = catalogData.map((item) => {
					return {
						value: item.id,
						label: item.itemData.name,
						group:
							item.itemData.productType === "REGULAR" ? "Regular" : "Service",
					};
				});
				console.log(allCatalogData);

				setData(allCatalogData);
				setIsLoadingCatalog(false);
			};

			fetchData();
		}
	}, [opened]);

	const getInfoService = async (id: string) => {
		console.log(id);

		/* const catalogData = await CatalogService.retrieveCatalogObject(id); */
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
								{/* <DatePickerInput
									label="Select date"
									placeholder="Select date"
									value={value}
									onChange={setValue}
									mx="auto"
									radius="md"
									clearable
									allowDeselect
									styles={(theme) => ({
										label: {
											fontWeight: "bold",
											marginBottom: 15,
										},
									})}
								/> */}

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
									value={value as any}
									icon={<CalendarEvent />}
									rightSection={
										<div>
											<X
												onChange={() => setValue(null)}
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
											onChange={setValue}
											type="range"
											value={value}
											defaultValue={value}
											allowSingleDateInRange
											minDate={
												new Date(new Date().setDate(new Date().getDate()))
											}
										/>
									</Group>
								</div>
								<div>
									<h6 className="mb-4">
										Lorem ipsum dolor sit amet consectetur.
									</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
										elementum praesent. Fames tellus massa tempus lectus
										vestibulum elementum amet amet metus.
									</p>
								</div>
								<MultiSelect
									disabled={true}
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
									data={[
										{
											value: "rick",
											label: "Rick",
											group: "Used to be a pickle",
										},
										{
											value: "morty",
											label: "Morty",
											group: "Never was a pickle",
										},
										{
											value: "beth",
											label: "Beth",
											group: "Never was a pickle",
										},
										{
											value: "summer",
											label: "Summer",
											group: "Never was a pickle",
										},
									]}
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
									<h6 className="my-0 ml-4">12:00 PM Sat. 01 Mar 2023</h6>
								</div>
							</>
						) : null}
					</div>
				</div>
			</Container>
		</div>
	);
}
