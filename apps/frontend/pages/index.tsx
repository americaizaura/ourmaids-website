import { useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Box,
	BackgroundImage,
	Center,
	Container,
	Grid,
	Button,
	Card,
} from "@mantine/core";
import Appbar from "../components/header";
import HeroSection from "../components/Home/Hero";
import FooterSection from "../components/footer";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import CardReview from "../components/Home/Reviews/CardReview";
import OurServices from "../components/Home/OurServices";
import AboutUs from "../components/Home/AboutUs";
import Booking from "../components/Home/Booking";
import Reviews from "../components/Home/Reviews";
import { ListCatalogResponse, SearchCatalogItemsResponse } from "square";
import { GetServerSideProps } from "next";
import { CatalogItemProductType } from "../gql/graphql";
const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
interface ServicesProps {
	services: any;
}
export default function AppShellDemo({ services }: ServicesProps) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const reviews = [
		{
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			image: "/images/hero.png",
			rating: 5,
		},
	];
	const data = services;
	console.log(data);

	return (
		<>
			{/*    <HeroSection />
      <Container
        style={{
          marginTop: "200px",
          marginBottom: "200px",
        }}
        size="xl"
      >
        <OurServices />
      </Container>
    
    */}
			<HeroSection />
			<Container className="my-16  lg:my-52" size="xl">
				<OurServices data={data} />
			</Container>
			<AboutUs />
			<Booking />
			<Reviews />
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
			CatalogService.fetchCatalogItems(CatalogItemProductType.Regular, 10),
			ImagesService.fetchImages(),
		]);

		const enhancedCatalogData = enhanceCatalogData(catalogData, imagesData);

		return {
			props: {
				services: enhancedCatalogData,
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
