import { Container } from "@mantine/core";
import React from "react";
import { Accordion } from "@mantine/core";
import { ChevronRight } from "tabler-icons-react";

const RulesSection = () => {
	const rules = [
		{
			title: "Safety",
			rule1: "Electrical Safety",
			rule2: "COVID-19 Protocols",
			rule3: "Equipment Safety",
		},
		{
			title: "Cancellation policy",
			rule1: "Cancellation Period",
			rule2: "Rescheduling",
			rule3: "Incidentals",
		},
	];
	const faq = [
		{
			id: 1,
			title: "How can I book a service?",
			description:
				"You can book your service 24/7 on this link https://www.ourmaids.com/Book-Online You can call or text us 213-800-7644 from 7:am to 7:pm your time zone 7 days a week to book your service. ",
		},
		{
			id: 2,
			title: "Do you work on weekends?",
			description: "Yes, we work Monday to Sunday from 7:am to 7:pm.",
		},
		{
			id: 3,
			title: "Are you Licensed?",
			description:
				"No. As of now, no one state requires a license to clean homes or offices.",
		},
	];
	const items = faq.map((item, index) => (
		<Accordion.Item
			value={item.id.toString()}
			key={index}
			className=" md:w-[760px] rounded-xl bg-[#fff8f6] border-0"
		>
			<Accordion.Control className="rounded-xl bg-[#fff8f6] px-8 py-2">
				<div className="text-xs font-semibold font-montserrat">
					{item.title}
				</div>
			</Accordion.Control>
			<Accordion.Panel className="rounded-xl bg-[#fff8f6] px-4 ">
				<div className="text-justify text-[10px] tracking-wide font-medium leading-4 font-montserrat">
					{item.description}
				</div>
			</Accordion.Panel>
		</Accordion.Item>
	));
	return (
		<section className="w-full h-2/3 bg-primary">
			<Container size="xl" className="pt-2 pb-12 w-80 md:w-full">
				<h6 className="mb-6">Rules and FAQ</h6>
				<div className="flex flex-col lg:flex-row gap-y-10 gap-x-24">
					<div className="flex flex-col md:flex-row gap-y-10 gap-x-24  ">
						{rules.map((rule, index) => (
							<div key={index} className="flex flex-col gap-y-8">
								<div className="text-xs text-justify tracking-wide font-bold">
									{rule.title}
								</div>
								<div className="flex flex-col text-xs text-justify tracking-wide font-medium gap-y-2">
									<div>{rule.rule1}</div>
									<div>{rule.rule2}</div>
									<div>{rule.rule3}</div>
								</div>
							</div>
						))}
					</div>
					<div>
						<div className="text-xs text-justify tracking-wide font-bold mb-8">
							FAQ
						</div>
						<Accordion
							variant="separated"
							className=""
							defaultValue="lorem1"
							chevron={<ChevronRight size="1rem" />}
							styles={{
								chevron: {
									"&[data-rotate]": {
										transform: "rotate(90deg)",
									},
								},
							}}
						>
							{items}
						</Accordion>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default RulesSection;
