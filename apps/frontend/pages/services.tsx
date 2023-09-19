import React from "react";
import Menu1 from "../components/Home/OServices/Menu1";
import { Button, Container } from "@mantine/core";
import CardServices from "../components/Home/OServices/CardServices";
import { GetServerSideProps } from "next";
import {
	CatalogObject,
	ListCatalogResponse,
	SearchCatalogItemsResponse,
} from "square";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
import CardServicesSkeleton from "../components/Home/OServices/cardServiceSkeleton";
import { NextSeo } from "next-seo";
interface ServicesProps {
	services: CatalogObject[];
	cursor: string;
}
enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}

export default function ServicesView({ services, cursor }: ServicesProps) {
	const [cursorState, setCursorState] = React.useState(cursor);
	const [data, setData] = React.useState(services);
	const [loading, setLoading] = React.useState(false);
	const [catalogProductType, setCatalogProductType] = React.useState(
		CatalogItemProductType.AppointmentsService
	);
	const [loadingChange, setLoadingChange] = React.useState(false);

	const handleLoadMore = async () => {
		setLoading(true);
		const [catalogData, imagesData] = await Promise.all([
			CatalogService.fetchCatalogItems(catalogProductType, 10, cursorState),
			ImagesService.fetchImages(),
		]);
		const enhancedCatalogData = enhanceCatalogData(catalogData, imagesData);
		setData([...data, ...enhancedCatalogData]);
		setCursorState(catalogData.cursor);
		setLoading(false);
	};

	const changeProductType = async (productType: CatalogItemProductType) => {
		if (productType === catalogProductType) return;
		setCatalogProductType(productType);
		setLoadingChange(true);

		const [catalogData, imagesData] = await Promise.all([
			CatalogService.fetchCatalogItems(productType, 10),
			ImagesService.fetchImages(),
		]);
		const enhancedCatalogData = enhanceCatalogData(catalogData, imagesData);
		setLoadingChange(false);
		if (!enhancedCatalogData) return;
		setData(enhancedCatalogData);
		setCursorState(catalogData.cursor);
	};

	const menu = [
		{
			title: "SERVICES",
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
		<>
			<NextSeo
				title="House Cleaning Service Packages: Deep, subscriptions | Our Maids, Inc."
				description="Find the best cleaning packages and services for your home at Our Maids, Inc. Quality and affordable prices to keep your space clean and healthy."
				openGraph={{
					type: "eCommerceSite",
					title:
						"House Cleaning Service Packages: Deep, subscriptions | Our Maids, Inc.",
					description:
						"Find the best cleaning packages and services for your home at Our Maids, Inc. Quality and affordable prices to keep your space clean and healthy.",
					url: "https://ourmaids.com/services",
					locale: "en_US",
					siteName: "Our Maids, Inc.",
					images: [
						{
							url: "https://lirp.cdn-website.com/abe73f30/dms3rep/multi/opt/dd15cc77-febb-4a67-8307-e18ec72e3707-8117d990-378w.jpg",
							width: 400,
							height: 200,
							alt: "Our Maids, Inc.",
						},
					],
				}}
				canonical="https://ourmaids.com/services"
			/>
			<section className="sm:mb-44 mb-20">
				<div className="lg:mt-16 mt-8 ">
					<Container size="xl" className="mt-40">
						<h4>Our Services</h4>
						<div className="grid grid-cols-4 md:grid-cols-12">
							<div className="grid grid-cols-1 md:flex md:flex-col col-span-12 md:col-span-3">
								{menu.map((menu, index) => (
									<div key={index}>
										<div className="mb-6 sm:mr-3 ">
											<Menu1
												title={menu.title}
												image={menu.image}
												onClick={() =>
													changeProductType(
														CatalogItemProductType.AppointmentsService
													)
												}
												productType={catalogProductType}
											/>
										</div>
									</div>
								))}
							</div>

							<div className="md:col-span-9 col-span-12 ">
								<div className="grid sm:grid-cols-3  lg:grid-cols-3 grid-cols-2 gap-4">
									{loadingChange
										? data?.map((service, index) => (
												<CardServicesSkeleton key={index} />
										  ))
										: data && data.length > 0
										? data?.map((service, index) => (
												<CardServices
													key={service?.id}
													idCatalogProduct={service?.id || ""}
													image={
														service && service.imageData
															? service.imageData.url
															: "/images/oservices/image 17.png"
													}
													description={service?.itemData?.name}
												/>
										  ))
										: Array.from({ length: 10 }).map((_, index) => (
												<CardServicesSkeleton key={index} />
										  ))}
								</div>

								<div className="flex items-center w-full justify-center mt-4">
									<Button
										radius="xl"
										color="secondary.0"
										onClick={handleLoadMore}
										variant="outline"
										loading={loading}
										style={{
											display: cursorState ? "block" : "none",
										}}
										size="lg"
									>
										View More
									</Button>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</section>
		</>
	);
}

function enhanceCatalogData(
	catalogData: SearchCatalogItemsResponse,
	imagesData: ListCatalogResponse
): CatalogObject[] | null {
	if (!catalogData && !imagesData) return null;
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

		const enhancedCatalogData: ServicesProps = {
			cursor: catalogData.cursor,
			services: enhanceCatalogData(catalogData, imagesData),
		};

		return {
			props: {
				services: enhancedCatalogData.services,
				cursor: enhancedCatalogData.cursor,
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
