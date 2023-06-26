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
} from "@mantine/core";
import { useState } from "react";
import { Progress } from "@mantine/core";
import { Group } from "@mantine/core";
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { CalendarEvent } from "tabler-icons-react";
export default function BookingView() {
	const [value, setValue] = useState<Date | null>(null);
	console.log(value);

	return (
		<div className="relative h-full w-full">
			<div className="absolute h-full img-booking">
				<Image
					src="/images/booking/step 2.png"
					layout="fill"
					objectFit="cover"
					objectPosition="0 600"
				/>
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
						<DatePickerInput
							label="Select date"
							placeholder="Select date"
							value={value}
							onChange={setValue}
							mx="auto"
							radius="md"
							clearable
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
							<h6 className="mb-4">Lorem ipsum dolor sit amet consectetur.</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
								elementum praesent. Fames tellus massa tempus lectus vestibulum
								elementum amet amet metus.
							</p>
						</div>
						<TimeInput mx="auto" className="mt-8" />
						<div className="flex mt-12 justify-between ">
							<Button radius="xl" color="secondary.0" mr={10}>
								Back
							</Button>
							<Button radius="xl" color="secondary.0">
								Next
							</Button>
						</div>
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
						<h5>Date and time</h5>
						<div className="bg-primary rounded-xl p-8 mt-8 shadow-md flex ">
							<CalendarEvent size={26} strokeWidth={2} />
							<h6 className="my-0 ml-4">12:00 PM Sat. 01 Mar 2023</h6>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
