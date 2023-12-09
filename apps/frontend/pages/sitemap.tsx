import { Container } from "@mantine/core";
import { NextSeo } from "next-seo";
import CatalogService from "../services/catalog.service";
import { GetServerSideProps } from "next";
import Link from "next/link";
enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}
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

interface ServicesProps {
	services: any;
}
const SiteMap = ({ services }: ServicesProps) => {
	return (
		<>
			<NextSeo
				title="Sitemap | OurMaids, Inc"
				description="OurMaids, Inc. Site Map will guide you to easily find whatever you are looking for on this web app."
				openGraph={{
					type: "eCommerceSite",
					title: "Sitemap | OurMaids, Inc.",
					description:
						"OurMaids, Inc. Site Map will guide you to easily find whatever you are looking for on this web app.",
					url: "https://ourmaids.com/sitemap",
					locale: "en_US",
					siteName: "Our Maids, Inc.",
					images: [
						{
							url: "https://lirp.cdn-website.com/abe73f30/dms3rep/multi/opt/Contact-Us-1200w.jpg",
							width: 400,
							height: 200,
							alt: "Our Maids, Inc.",
						},
					],
				}}
				canonical="https://ourmaids.com/sitemap"
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
				<h6 className="mb-4 mt-8">Services</h6>
				<ul className="marker:text-secondary list-outside list-disc space-y-2 mt-0">
					{services.map((service, index) => (
						<li key={index}>
							<Link
								href={`/service/${service.id}`}
								className="text-secondary no-underline"
							>
								{service.itemData?.name}
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const [catalogData] = await Promise.all([
			CatalogService.fetchCatalogItems(
				CatalogItemProductType.AppointmentsService
			),
		]);

		console.log("catalogData", catalogData);

		return {
			props: {
				services: catalogData.items || null,
			},
		};
	} catch (error) {
		console.error("Error:", error);

		return {
			props: {
				services: null,
			},
		};
	}
};

export default SiteMap;
