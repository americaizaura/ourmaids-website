import React, { useState } from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Input,
	Group,
	Select,
} from "@mantine/core";
import Image from "next/image";
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
import { CalendarEvent } from "tabler-icons-react";
export default function RescheduleView() {
	const [value, setValue] = useState<Date | null>(null);

	return (
		<div className="relative h-full w-full">
			<div className="absolute h-full w-96 ">
				<Image
					alt="reschedule"
					src="/images/reschedule.png"
					layout="fill"
					objectFit="cover"
					objectPosition="0 300"
				/>
			</div>
			<Container size="xl" className="lg:pt-32 pt-24 pb-12 ">
				<div className="grid grid-cols-12 ">
					<h2 className="col-start-5 col-end-10">Reschedule</h2>
				</div>

				<div className="grid grid-cols-12">
					<div className="col-start-5 col-end-11 bg-primaryVariant px-12 py-8 rounded-xl shadow-md">
						<Input.Wrapper
							className="mb-6 w-52"
							label="Lorem ipsum dolor"
							styles={(theme) => ({
								label: {
									fontWeight: "bold",
									marginBottom: 15,
								},
							})}
						>
							<Input
								placeholder={"Lorem"}
								radius="lg"
								styles={(theme) => ({
									input: {
										backgroundColor: theme.colors.background[0],
										"&:focus-within": {
											borderColor: theme.colors.secondary[0],
										},
										borderColor: theme.colors.background[0],
									},
								})}
							/>
						</Input.Wrapper>
						<DatePickerInput
							label="Select date"
							placeholder="Select date"
							value={value}
							onChange={setValue}
							className="w-[80%]"
							radius="md"
							clearable
							styles={(theme) => ({
								label: {
									fontWeight: "bold",
									marginBottom: 15,
								},
								input: {
									backgroundColor: theme.colors.background[0],
									"&:focus-within": {
										borderColor: theme.colors.secondary[0],
									},
									borderColor: theme.colors.background[0],
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

						<Select
							label="Select time"
							placeholder="lorem"
							className="mt-8 w-[80%]"
							styles={(theme) => ({
								label: {
									fontWeight: "bold",
									marginBottom: 15,
								},
								input: {
									backgroundColor: theme.colors.background[0],
									"&:focus-within": {
										borderColor: theme.colors.secondary[0],
									},
									borderColor: theme.colors.background[0],
								},
								item: {
									"&[data-selected]": {
										"&, &:hover": {
											backgroundColor: theme.colors.gray[2],
											color: theme.colors.textPrimary[0],
										},
									},
								},
							})}
							data={[
								{ value: "react", label: "12:00" },
								{ value: "ng", label: "13:00" },
								{ value: "svelte", label: "15:00" },
								{ value: "vue", label: "08:00" },
							]}
						/>

						<div className="mb-16 mt-6">
							<p>
								Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
								elementum praesent. Fames tellus massa tempus lectus vestibulum
								elementum amet amet metus.
							</p>
						</div>
						<Button radius="xl" color="secondary.0" mr={10}>
							Lorem
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
