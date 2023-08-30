import React from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	TextInput,
} from "@mantine/core";

import { useEffect, useState } from "react";
import { useCreateContactUsMutation } from "../generated/graphql";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
export default function ContactUsView() {
	const [faq, setFaq] = useState([]);
	const [createContactUs, { loading }] = useCreateContactUsMutation();
	useEffect(() => {
		fetch("data.json")
			.then((response) => response.json())
			.then((data) => setFaq(data));
	}, []);

	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validateInputOnChange: true,
		validate: {
			email: (value) => {
				if (value.trim().length > 0) {
					if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
						return "Email is invalid";
					}
				} else {
					return "Email is required";
				}
			},
			name: (value) => (value.trim().length > 0 ? null : "Name is required"),
			phone: (value) => {
				if (value.trim().length > 0) {
					if (!value.match(/^[0-9]+$/)) {
						return "Phone is invalid";
					}
				} else {
					return "Phone is required";
				}
			},
			message: (value) =>
				value.trim().length > 0 ? null : "Message is required",
		},
	});

	const sendContactUs = () => {
		createContactUs({
			variables: {
				data: {
					name: form.values.name,
					email: form.values.email,
					phone: form.values.phone,
					message: form.values.message,
				},
			},
		})
			.then((res) => {
				toast.success("Message sent successfully");
				form.reset();
			})
			.catch((err) => {
				toast.error("Something went wrong");
			});
	};

	return (
		<div className="lg:mt-16 relative h-full flex-grow mt-16">
			<div className="bg-primary test"></div>
			<Container size="xl" className="pt-24 pb-28">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
					<h6 className="mt-0 mb-0">FAQ</h6>
					<div className="md:col-start-1 md:col-end-5  h-[400px]   overflow-hidden custom-scrollbar overflow-y-auto pr-2">
						<Accordion
							variant="separated"
							radius="md"
							styles={{
								item: {
									// styles added to all items
									backgroundColor: "#fff",
									"&[data-active]": {
										borderColor: "#fff",
									},
									// styles added to expanded item
								},
							}}
						>
							{faq.map((item) => (
								<Accordion.Item value={item.id.toString()} key={item.id}>
									<Accordion.Control>
										<h6 className="font-bold my-0">{item.question}</h6>
									</Accordion.Control>
									<Accordion.Panel>{item.answer}</Accordion.Panel>
								</Accordion.Item>
							))}
						</Accordion>
					</div>
					<div className="md:col-start-6 md:col-end-12 mt-6 md:mt-0">
						<div>
							<h2 className="mt-0">Contact Us</h2>
							<p>
								Use the form below to send us any message, set up an appointment
								to look at your facilities and send you a proposal for
								janitorial services, to reschedule or to cancel a reservation.
							</p>
							<form onSubmit={form.onSubmit(() => sendContactUs())}>
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
											placeholder={"email"}
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
									</div>

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
										{...form.getInputProps("message")}
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
									<Button
										radius="xl"
										color="secondary.0"
										type="submit"
										loading={loading}
									>
										Send
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
