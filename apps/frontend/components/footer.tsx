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
			id: 1,
			name: "Dover, DE.",
			lat: 39.158,
			lng: -75.524,
		},
		{
			id: 2,
			name: "Grand Prairie, TX.",
			lat: 32.6840495,
			lng: -97.0477151,
		},
		{
			id: 3,
			name: "Delaware",
			lat: 38.33786,
			lng: -75.08214,
		},
		{
			id: 4,
			name: "Oklahoma City, OK",
			lat: 35.56656,
			lng: -97.5213,
		},
		{
			id: 5,
			name: "North Carolina",
			lat: 36.0632,
			lng: -79.83629,
		},
		{
			id: 6,
			name: "Dallas",
			lat: 32.73162,
			lng: -96.64509,
		},
		//add more locations
		{
			id: 7,
			name: "Sun Valley, CA.",
			lat: 34.213,
			lng: -118.378,
		},
		{
			id: 8,
			name: "Austin, TX.",
			lat: 30.358,
			lng: -97.688,
		},
		{
			id: 9,
			name: "Fort Worth, TX.",
			lat: 32.725,
			lng: -97.342,
		},
		{
			id: 10,
			name: "Van Nuys, CA.",
			lat: 34.196,
			lng: -118.467,
		},

		{
			id: 11,
			name: "Cancun, Mexico",
			lat: 21.16195,
			lng: -86.85191,
		},
		{
			id: 12,
			name: "Los Cabos, BCS",
			lat: 22.89088,
			lng: -109.916,
		},

		{
			id: 13,
			name: "Montreal, QC",
			lat: 45.45175,
			lng: -73.59831,
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

		/* {
      name: "Store-Payments",
      href: "#",
    }, */
		/* {
			name: "Our fees",
			href: "#",
		}, */
		{
			name: "Our Services",
			href: "/services",
		},
		{
			name: "Franchise Opportunities",
			href: "https://www.ourmaidsfranchise.com/",
		},
		/*  {
      name: "Reschedule/Cancelling",
      href: "#",
    }, */
		{
			name: "FAQ",
			href: "/contact-us",
		},
		{
			name: "Privacy Policy",
			href: "/privacy-policy",
		},
		{
			name: "Terms/Return/Refund Policy",
			href: "/privacy-policy",
		},
		/*  {
      name: "Empleos/jobs",
      href: "#",
    }, */
		{
			name: "Contact us",
			href: "/contact-us",
		},
		{
			name: "Site Map",
			href: "/sitemap",
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
								{locations.slice(0, 7).map((item) => (
									<li key={item.name}>
										<Link
											href={`/locations?lat=${item.lat}&lng=${item.lng}`}
											className="no-underline text-onPrimary"
										>
											{item.name}
										</Link>
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
								{locations.slice(7, 13).map((item) => (
									<li key={item.name}>
										<Link
											href={`/locations?lat=${item.lat}&lng=${item.lng}`}
											className="no-underline text-onPrimary"
										>
											{item.name}
										</Link>
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
								{company.slice(0, 5).map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="no-underline text-onPrimary"
										>
											{item.name}
										</Link>
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
								{company.slice(5, 9).map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="no-underline text-onPrimary"
										>
											{item.name}
										</Link>
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
								<Link
									href={`/locations?lat=${item.lat}&lng=${item.lng}`}
									className="no-underline text-onPrimary"
								>
									{item.name}
								</Link>
							</Accordion.Panel>
						))}
					</Accordion.Item>
					<Accordion.Item value="company">
						<Accordion.Control>
							<p className="text-surface my-0">Company</p>
						</Accordion.Control>
						{company.map((item, index) => (
							<Accordion.Panel key={index}>
								<Link className="text-surface no-underline" href={item.href}>
									{item.name}
								</Link>
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
