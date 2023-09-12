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
export default function AppShellDemo({
	services,
	reviewsGoogle,
}: ServicesProps) {
	const data = services;

	return (
		<>
			<NextSeo
				title="Residential Cleaning Company in Los Angeles | Our Maids, Inc"
				description="Our Maids offers professional house cleaning services and commercial cleaning services with easy online booking, transparent pricing, and a satisfaction guarantee."
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
				CatalogItemProductType.AppointmentsService,
				10
			),
			ImagesService.fetchImages(),
		]);

		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${"ChIJC-g-TsaVwoAReX0svaIhOL4"}&key=${"AIzaSyCFIeOK8R5tCOSIPBDeCceJx-ayHwwXfhw&"}`;

		const enhancedCatalogData = enhanceCatalogData(catalogData, imagesData);
		const reviews = await fetch(url);
		const data = await reviews.json();

		return {
			props: {
				services: enhancedCatalogData,
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
