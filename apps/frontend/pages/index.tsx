import { Container } from "@mantine/core";
import HeroSection from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices";
import AboutUs from "../components/Home/AboutUs";
import Booking from "../components/Home/Booking";
import Reviews from "../components/Home/Reviews";
import { ListCatalogResponse, SearchCatalogItemsResponse } from "square";
import { GetServerSideProps } from "next";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
interface ServicesProps {
	services: any;
	reviewsGoogle: any;
}
enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}
import { NextSeo } from "next-seo";

const keyWords = [
	"DEEP clean to 1,000 s.f., or less premisses. $209",
	"DEEP clean to 1,001 to 2,000 s.f. Premisses. $269.",
	"DEEP Clean to a 2,000 to 3,000 s.f., premisses. $319.",
	"Post Construction cleaning. $229.",
	"Move out/move in cleaning to a 1,000 s.f. or less premisses. $249.",
	"Move out/move in cleaning to a 1001 to 2,000 s.f. premises. $299.",
	"Move out/move in cleaning to a 2,001 to 3,000 s.f. $329",
	"First time Standard cleaning to a 1,001 to 2,000 s.f. premisses. $219.",
	"First time STANDARD cleaning to a 2,001 to 3,000 s.f., premisses. $279.",
	"First time Standard cleaning to a 1,000 or less s.f. premises (not a studio apartment)",
];

export default function AppShellDemo({
	services,
	reviewsGoogle,
}: ServicesProps) {
	const data = services;

	return (
		<>
			<NextSeo
				title="Residential & commercial cleaning company | OurMaids, Inc"
				description="The most affordable residencial and commercial cleaning services, & the most reliable."
				openGraph={{
					type: "eCommerceSite",
					title:
						"Residential & commercial cleaning company | OurMaids, Inc",
					description:
						"The most affordable residencial and commercial cleaning services, & the most reliable.",
					url: "https://ourmaids.com/",
					locale: "en_US",
					siteName: "OurMaids, Inc.",
					images: [
						{
							url: "https://lirp.cdn-website.com/abe73f30/dms3rep/multi/opt/dd15cc77-febb-4a67-8307-e18ec72e3707-8117d990-378w.jpg",
							width: 400,
							height: 200,
							alt: "OurMaids, Inc.",
						},
					],
				}}
				canonical="https://ourmaids.com/"
			/>
			<HeroSection />
			<Container className="my-16  lg:my-52" size="xl">
				<OurServices data={data} />
			</Container>
			<AboutUs />
			<Booking />
			<Reviews reviewsGoogle={reviewsGoogle} />,
		</>
	);
}

function enhanceCatalogData(
	catalogData: SearchCatalogItemsResponse,
	imagesData: ListCatalogResponse
) {
	return catalogData.items?.map((item) => {
		const image = imagesData.objects?.find(
			(image) =>
				image.type === "IMAGE" &&
				image.id === (item.itemData?.imageIds?.[0] || "")
		);

		return {
			...item,
			imageData: image?.imageData || null,
		};
	});
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const [catalogData, imagesData] = await Promise.all([
			CatalogService.fetchCatalogItems(
				CatalogItemProductType.AppointmentsService
			),
			ImagesService.fetchImages(),
		]);

		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${"ChIJC-g-TsaVwoAReX0svaIhOL4"}&key=${
			process.env.NEXT_PUBLIC_MAPS_API_KEY
		}`;

		const enhancedCatalogData = enhanceCatalogData(catalogData, imagesData);

		const filtered = enhancedCatalogData.filter((item) => {
			return keyWords.includes(item.itemData.name);
		});

		const reviews = await fetch(url);
		const data = await reviews.json();

		return {
			props: {
				services: filtered,
				reviewsGoogle: data && data.status === "OK" ? data.result : null,
			},
		};
	} catch (error) {
		console.error("Error:", error);

		return {
			props: {
				services: null,
				reviewsGoogle: null,
			},
		};
	}
};
