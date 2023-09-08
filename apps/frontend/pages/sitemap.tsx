import { Container } from "@mantine/core";
import { NextSeo } from "next-seo";

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
		name: "Our Services",
		href: "/services",
	},
	{
		name: "Franchise Opportunities",
		href: "https://www.ourmaidsfranchise.com/",
	},
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

	{
		name: "Contact us",
		href: "/contact-us",
	},
];
const SiteMap = () => {
	return (
		<>
			<NextSeo
				title="Sitemap | Our Maids Franchise, Inc"
				description="You can read here Our Maids Franchise, Inc. Privacy policy to know about how we handle the information you submit."
			/>
			<Container size="xl" className="mt-40 mb-20">
				<h1 className="text-secondary">Sitemap</h1>
				<h6 className="mb-4">Home</h6>
				<ul className="marker:text-secondary list-outside list-disc space-y-2 mt-0">
					{company.map((company, index) => (
						<li key={index}>
							<a href={company.href} className="text-secondary no-underline">
								{company.name}
							</a>
						</li>
					))}
				</ul>
			</Container>
		</>
	);
};

export default SiteMap;
