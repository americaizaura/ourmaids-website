import React from "react";
import Menu1 from "../components/Home/OServices/Menu1";
import { Button, Container } from "@mantine/core";
import CardServices from "../components/Home/OServices/CardServices";
import Menu2 from "../components/Home/OServices/Menu2";
import {
	CatalogItemProductType,
	CatalogQueryQuery,
	useCatalogQueryQuery,
} from "../generated/graphql";
import { GetServerSideProps } from "next";
import { serverClient } from "../lib/apollo.server";
import {
	CatalogObject,
	ListCatalogResponse,
	SearchCatalogItemsResponse,
} from "square";
import CatalogService from "../services/catalog.service";
import ImagesService from "../services/images.service";
import useCatalogHook from "../Hooks/useCatalogHook";
import useImageHook from "../Hooks/useImageHook";
import CardServicesSkeleton from "../components/Home/OServices/cardServiceSkeleton";
interface ServicesProps {
	services: CatalogObject[];
	cursor: string;
}

export default function ServicesView({ services, cursor }: ServicesProps) {
	const [cursorState, setCursorState] = React.useState(cursor);
	const [data, setData] = React.useState(services);
	const [loading, setLoading] = React.useState(false);
	const [catalogProductType, setCatalogProductType] = React.useState(
		CatalogItemProductType.Regular
	);
	const [loadingChange, setLoadingChange] = React.useState(false);

	const handleLoadMore = async () => {
		setLoading(true);
		const [catalogData, imagesData] = await Promise.all([
			CatalogService.fetchCatalogItems(catalogProductType, 6, cursorState),
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
		setData(enhancedCatalogData);
		setCursorState(catalogData.cursor);
		setLoadingChange(false);
	};

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
				<Container size="xl" className="mt-40">
					<h4>Our Services</h4>
					<div className="grid grid-cols-4 md:grid-cols-12">
						<div className="grid grid-cols-2 md:flex md:flex-col col-span-6 md:col-span-3">
							{menu.map((menu, index) => (
								<div key={index}>
									<div className="mb-6 mr-3 ">
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

							{menu2.map((menu2, index) => (
								<div key={index}>
									<div className="mb-6 ml-3 md:mr-3 md:ml-0 ">
										<Menu2
											title={menu2.title}
											image={menu2.image}
											onClick={() =>
												changeProductType(CatalogItemProductType.Regular)
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
									: data?.map((service, index) => (
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
									Load More
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}

function enhanceCatalogData(
	catalogData: SearchCatalogItemsResponse,
	imagesData: ListCatalogResponse
): CatalogObject[] | null {
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
