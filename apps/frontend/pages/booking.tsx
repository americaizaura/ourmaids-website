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
	const router = useRouter();

	const [step, setStep] = useState(steps.SERVICE);
	const handleNext = () => {
		if (step === steps.SERVICE) {
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
						value: item.itemData.variations[0].id,
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
											allowSingleDateInRange
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
								<p>Select one or more services.</p>
								<MultiSelect
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
								<Button radius="xl" color="secondary.0" onClick={handleNext}>
									Next
								</Button>
							</div>
						)}
						{step === steps.INFORMATION && (
							<div className="flex mt-12 w-full ">
								<Button radius="xl" color="secondary.0" className="w-full">
									Next
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
								<Image
									src="/images/booking/service.png"
									layout="fill"
									objectFit="cover"
									className="rounded-lg"
								/>
							</div>
							<h6 className="mb-4">
								Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
							</h6>

							<h6 className="my-0">50.00 USD</h6>
							<p className="mt-4 mb-0">1 hour</p>
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
