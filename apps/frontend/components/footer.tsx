import {
	ActionIcon,
	Divider,
	Grid,
	Text,
	Container,
	Accordion,
} from "@mantine/core";
import { AccordionControl } from "@mantine/core/lib/Accordion/AccordionControl/AccordionControl";
import Link from "next/link";
import {
	BrandFacebook,
	BrandInstagram,
	BrandLinkedin,
	BrandTwitter,
} from "tabler-icons-react";
const Footer = () => {
	const locations = [
		{
			name: "Los Angeles, CA",
			href: "#",
		},
		{
			name: "Sun Valley, CA",
			href: "#",
		},
		{
			name: "Dover, DE",
			href: "#",
		},
		{
			name: "Dallas, TX",
			href: "#",
		},
		{
			name: "Ft. Worth, TX",
			href: "#",
		},
		{
			name: "Austin, TX",
			href: "#",
		},
		{
			name: "Oklahoma City, OK",
			href: "#",
		},
		{
			name: "Ocean City, MD",
			href: "#",
		},
		{
			name: "Cancun, MX",
			href: "#",
		},
		{
			name: "Montreal, QC",
			href: "#",
		},
		{
			name: "Merida, MX",
			href: "#",
		},
		{
			name: "Greensboro, NC",
			href: "#",
		},
	];

	const company = [
		{
			name: "Bookings",
			href: "/booking",
		},
		{
			name: "Locations",
			href: "/locations",
		},
		{
			name: "Store-Payments",
			href: "#",
		},
		{
			name: "Our fees",
			href: "#",
		},
		{
			name: "Our Services",
			href: "#",
		},
		{
			name: "Franchise Opportunities",
			href: "#",
		},
		{
			name: "Reschedule/Cancelling",
			href: "#",
		},
		{
			name: "FAQ",
			href: "#",
		},
		{
			name: "Privacy Policy",
			href: "#",
		},
		{
			name: "Terms/Return/Refund Policy",
			href: "/privacy-policy",
		},
		{
			name: "Empleos/jobs",
			href: "#",
		},
		{
			name: "Contact us",
			href: "/contact-us",
		},
	];
	return (
		/*   <footer className="bg-black px-[250px] py-12 mt-[250px]"> */
		<footer className="bg-black  lg:py-12 py-8">
			<Container size="xl" className="hidden lg:block">
				<div className="flex justify-between flex-row">
					<div>
						<h4 className="text-background">Our Maids, INC</h4>
					</div>
					<div>
						<h5 className="text-background">Locations</h5>
						<div className="flex flex-row text-background gap-10">
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								{locations.slice(0, 6).map((item) => (
									<li key={item.name}>
										<a>{item.name}</a>
									</li>
								))}
							</ul>
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								{locations.slice(6, 12).map((item) => (
									<li key={item.name}>
										<a>{item.name}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<h5 className="text-background">Company</h5>
						<div className="flex flex-row text-background gap-10">
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								{company.slice(0, 6).map((item) => (
									<li key={item.name}>
										<a href={item.href} className="no-underline text-onPrimary">
											{item.name}
										</a>
									</li>
								))}
							</ul>
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								{company.slice(6, 12).map((item) => (
									<li key={item.name}>
										<a href={item.href} className="no-underline text-onPrimary">
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<h5 className="text-background">Social</h5>
						<div className="flex flex-row justify-between">
							<Link
								href="https://www.facebook.com/maids4us/about"
								target="_blank"
							>
								<BrandFacebook
									size={28}
									style={{
										color: "black",
										fill: "#fff",
									}}
									className="cursor-pointer mr-2"
								/>
							</Link>
							<Link
								href="https://www.instagram.com/ourmaids/?utm_source=ig_profile_share&igshid=81m038vqevlc"
								target="_blank"
							>
								<BrandInstagram
									size={28}
									style={{
										color: "black",
										fill: "#fff",
									}}
									className="cursor-pointer mr-2"
								/>
							</Link>
							<Link href="https://twitter.com/ourmaids?lang=en" target="_blank">
								<BrandTwitter
									size={28}
									style={{
										color: "black",
										fill: "#fff",
									}}
									className="cursor-pointer"
								/>
							</Link>
							<Link
								href="https://www.linkedin.com/in/antoniovmoreno"
								target="_blank"
							>
								<BrandLinkedin
									size={28}
									style={{
										color: "black",
										fill: "#fff",
									}}
									className="cursor-pointer"
								/>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			<Container size="xl" className="block lg:hidden">
				<div>
					<h4 className="text-background mt-0">Our Maids, INC</h4>
				</div>
				<Accordion
					variant="separated"
					radius="md"
					styles={{
						item: {
							// styles added to all items

							backgroundColor: "transparent",
							borderColor: "white",
							"&[data-active]": {
								backgroundColor: "transparent",
								borderColor: "white",
							},
							// styles added to expanded item
						},
						chevron: {
							color: "white",
						},
					}}
				>
					<Accordion.Item value="locations">
						<Accordion.Control>
							<p className="text-surface my-0">Locations</p>
						</Accordion.Control>
						{locations.map((item, index) => (
							<Accordion.Panel key={index}>
								<a className="text-surface">{item.name}</a>
							</Accordion.Panel>
						))}
					</Accordion.Item>
					<Accordion.Item value="company">
						<Accordion.Control>
							<p className="text-surface my-0">Company</p>
						</Accordion.Control>
						{company.map((item, index) => (
							<Accordion.Panel key={index}>
								<a className="text-surface no-underline" href={item.href}>
									{item.name}
								</a>
							</Accordion.Panel>
						))}
					</Accordion.Item>
				</Accordion>

				<div className="flex flex-col justify-center items-center">
					<h5 className="text-background my-4">Social</h5>
					<div className="flex flex-row">
						<Link
							href="https://www.facebook.com/maids4us/about"
							target="_blank"
						>
							<BrandFacebook
								size={28}
								style={{
									color: "black",
									fill: "#fff",
								}}
								className="cursor-pointer mr-2"
							/>
						</Link>
						<Link
							href="https://www.instagram.com/ourmaids/?utm_source=ig_profile_share&igshid=81m038vqevlc"
							target="_blank"
						>
							<BrandInstagram
								size={28}
								style={{
									color: "black",
									fill: "#fff",
								}}
								className="cursor-pointer mr-2"
							/>
						</Link>
						<Link href="https://twitter.com/ourmaids?lang=en" target="_blank">
							<BrandTwitter
								size={28}
								style={{
									color: "black",
									fill: "#fff",
								}}
								className="cursor-pointer"
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/in/antoniovmoreno"
							target="_blank"
						>
							<BrandLinkedin
								size={28}
								style={{
									color: "black",
									fill: "#fff",
								}}
								className="cursor-pointer"
							/>
						</Link>
					</div>
				</div>
			</Container>
			<Container size="xl">
				<Divider
					size="sm"
					style={{
						backgroundColor: "rgba(0,0,0,0.1)",
					}}
					className="lg:my-10 my-4"
				/>
				<div>
					<p className="text-background" style={{ textAlign: "center" }}>
						{/*         © All Rights Reserved Worldwide | 2000-2023. <br /> The Our Maids
            logo, its colors, Our Maids and &quot;A helping Hand for Busy
            People&quot; are registered <br />
            trademarks of Our Maids, Inc., a Delaware Corporation. */}
						© All Rights Reserved Worldwide | 2000-2023. <br />
						The Our Maids logo, its colors, Our Maids and &quot;A helping Hand
						for Busy People&quot; are registered trademarks of Our Maids, Inc.,
						a Delaware Corporation. No part of this webapp shall be copied,
						distributed, or transmitted in any way without prior written
						permission from us. We claim full intellectual property rights on
						this web app, its contents, the coding inclusive”
					</p>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
