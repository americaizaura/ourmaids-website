import React from "react";
import Menu1 from "../components/Home/OServices/Menu1";
import { Container } from "@mantine/core";
import CardServices from "../components/Home/OServices/CardServices";
import Menu2 from "../components/Home/OServices/Menu2";
import {
	CatalogItemProductType,
	CatalogQueryQuery,
	useCatalogQueryQuery,
} from "../generated/graphql";
import { GetServerSideProps } from "next";
import { serverClient } from "../lib/apollo.server";
import { ListCatalogResponse, SearchCatalogItemsResponse } from "square";
interface ServicesProps {
	services: any;
}
const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api";
const appointmentsService = CatalogItemProductType.AppointmentsService;
const regular = CatalogItemProductType.Regular;
export default function ServicesView({ services }: ServicesProps) {
	const [selectedProductType, setSelectedProductType] =
		React.useState<CatalogItemProductType>(appointmentsService);

	const data = /* dataServices ?? */ services;

	/* console.log(data);
	 */
	/* const loading = services && !dataServices ? false : loadingServices; */
	const menu = [
		{
			title: "SUBSCRIPTIONS",
			image: "/images/image 19.png",
		},
	];
	const menu2 = [
		{
			title: "ONE TIME",
			image: "/images/image 20.png",
		},
	];

	return (
		<section className="mb-44 ">
			<div className="lg:mt-16 mt-8 ">
				{/* 	<video
					controls
					muted
					autoPlay
					className="lg:h-screen lg:w-screen  w-full h-auto mt-4"
				>
					<source src="promo.mp4" type="video/mp4" />
				</video> */}
				<Container size="xl" className="mt-40">
					<h4>Our Services</h4>
					<div className="grid grid-cols-4 md:grid-cols-12">
						<div className="grid grid-cols-2 md:flex md:flex-col col-span-6 md:col-span-3">
							{menu.map((menu, index) => (
								<div key={index}>
									<div className="mb-6 mr-3 ">
										<Menu1 title={menu.title} image={menu.image} />
									</div>
								</div>
							))}
							{/* 	</div>
						<div className="col-span-6 md:col-span-3"> */}
							{menu2.map((menu2, index) => (
								<div key={index}>
									<div className="mb-6 ml-3 md:mr-3 md:ml-0 ">
										<Menu2 title={menu2.title} image={menu2.image} />
									</div>
								</div>
							))}
						</div>

						<div className="md:col-span-9 col-span-12">
							<div className="grid sm:grid-cols-3  lg:grid-cols-3 grid-cols-2 gap-4">
								{data?.map((service, index) => (
									<CardServices
										key={service?.id}
										image={
											service && service.imageData
												? service.imageData.url
												: "/images/oservices/image 17.png"
										}
										description={service?.itemData?.name}
									/>
								))}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}

/* export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const catalog = await fetch("http://localhost:3000/api/catalog", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				productType: CatalogItemProductType.Regular,
			}),
		});

		const images = await fetch("http://localhost:3000/api/image");

		const data: SearchCatalogItemsResponse = await catalog.json();
		const dataImages: ListCatalogResponse = await images.json();
		console.log();

		const dataCatalog = data.items?.map((item) => {
			const image = dataImages.objects?.find(
				(image) =>
					image.type === "IMAGE" &&
					image.id === (item.itemData?.imageIds?.[0] || "")
			);

			return {
				...item,
				imageData: image?.imageData || null,
			};
		});

		return {
			props: {
				services: dataCatalog,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				services: null,
			},
		};
	}
}; */

async function fetchCatalogItems(): Promise<SearchCatalogItemsResponse | null> {
	try {
		const response = await fetch(`${API_BASE_URL}/catalog`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				productType: CatalogItemProductType.Regular,
			}),
		});
		return await response.json();
	} catch (error) {
		console.error("Error fetching catalog items:", error);
		return null;
	}
}

async function fetchImages(): Promise<ListCatalogResponse | null> {
	try {
		const response = await fetch(`${API_BASE_URL}/image`);
		return await response.json();
	} catch (error) {
		console.error("Error fetching images:", error);
		return null;
	}
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
			fetchCatalogItems(),
			fetchImages(),
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
