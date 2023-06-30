import React from "react";
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
} from "@mantine/core";
import { useState } from "react";
import { Progress } from "@mantine/core";
import { Group } from "@mantine/core";
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { CalendarEvent } from "tabler-icons-react";
import { useRouter } from "next/router";
import Input from "../components/Input";

const steps = {
	SERVICE: "SERVICE",
	BOOKING: "BOOKING",
	INFORMATION: "INFORMATION",
	PAYMENT: "PAYMENT",
};
export default function BookingView() {
	const [value, setValue] = useState<Date | null>(null);
	console.log(value);
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
	return (
		<div className="relative h-full w-full">
			<div className="absolute h-full img-booking">
				{step === steps.SERVICE && (
					<Image
						src="/images/booking/step 1.png"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
					/>
				)}
				{step === steps.BOOKING && (
					<Image
						src="/images/booking/step 2.png"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
					/>
				)}
				{step === steps.INFORMATION && (
					<Image
						src="/images/booking/step 3.png"
						layout="fill"
						objectFit="cover"
						objectPosition="0 600"
					/>
				)}
			</div>
			<Container size="xl" className="lg:pt-32 pt-24 pb-12 ">
				<div className="grid grid-cols-12 ">
					<div className="col-start-4 col-end-13">
						<Progress color="secondary.0" value={33} />
					</div>
				</div>
				<div className="grid grid-cols-12 ">
					<h2 className="col-start-4 col-end-13">Booking</h2>
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
								<DatePickerInput
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
								/>
								<div className="rounded-md bg-onPrimary shadow-md mt-2 p-4 w-[70%]  ">
									<Group position="center">
										<DatePicker
											size="sm"
											value={value}
											styles={(theme) => ({
												day: {
													"&:focus": {
														backgroundColor: theme.colors.secondary[0],
														color: theme.colors.onPrimary[0],
													},
												},
											})}
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
								<TimeInput mx="auto" className="mt-8" />
							</>
						)}
						{step === steps.SERVICE && (
							<>
								<p>Select one or more services.</p>
								<MultiSelect
									styles={(theme) => ({
										input: {
											"&:focus-within": {
												borderColor: theme.colors.secondary[0],
											},
											borderColor: theme.colors.secondary[0],
										},
									})}
									radius="md"
									placeholder="Pick all that you like"
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

							<h5 className="mt-0 mr-2 text-info">Edit </h5>
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
								<h5>Date and time</h5>
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
