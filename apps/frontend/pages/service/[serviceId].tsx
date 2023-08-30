import React, { useEffect } from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Stepper,
	StepperProps,
	Skeleton,
} from "@mantine/core";
import { useState } from "react";
import CatalogService from "../../services/catalog.service";
import { Group } from "@mantine/core";
import Image from "next/image";
import Reviews from "../../components/OMServices/ReviewSection";
import CleaningTeam from "../../components/OMServices/CleaningSection";
import ServiceName from "../../components/OMServices/SerNameSection";
import DateSection from "../../components/OMServices/DateSection";
import RecomendSection from "../../components/OMServices/RecomendSection";
import LocationsSection from "../../components/OMServices/LocationsSection";
import RulesSection from "../../components/OMServices/RulesSection";
import { GetServerSideProps } from "next";
import { ListCatalogResponse, RetrieveCatalogObjectResponse } from "square";
import ImagesService from "../../services/images.service";

interface ServiceProps {
	service: any;
}
export default function SectionVictor({ service }: ServiceProps) {
	return (
		<main>
			<Container size="xl" className="pt-32 pb-12 md:w-auto">
				{service && service.object ? (
					<ServiceName
						name={service.object.itemData.name}
						description={service.object.itemData.description}
					/>
				) : (
					<div>
						<Skeleton height={10} mt={6} radius="xl" width="40%" />
						<Skeleton height={8} mt={6} width="70%" radius="xl" />
					</div>
				)}

				<div className="flex flex-col justify-center  gap-x-32 mb-10 2xl:gap-x-40 md:my-12 md:flex-row">
					<DateSection />
					<div>
						<RecomendSection />
						<LocationsSection
							url={
								service && service.object && service.object.imageData
									? service.object.imageData.url
									: "/images/oservices/image 17.png"
							}
							id={service && service.object ? service.object.id : ""}
						/>
					</div>
				</div>
				<Reviews />
				<CleaningTeam />
			</Container>
			<RulesSection />
		</main>
	);
}

function enhanceCatalogData(
	service: RetrieveCatalogObjectResponse,
	imagesData: ListCatalogResponse
) {
	if (!service || !imagesData) return null;

	const image = imagesData.objects?.find(
		(image) => image.id === (service.object.itemData?.imageIds?.[0] || "")
	);
	console.log(image);

	const enhancedService = {
		...service,
		object: {
			...service.object,
			imageData: image ? image.imageData : null,
		},
	};
	return enhancedService;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { serviceId } = context.params;
		/* 	const data = await CatalogService.retrieveCatalogObject(
			serviceId as string
		); */
		const [data, imagesData] = await Promise.all([
			CatalogService.retrieveCatalogObject(serviceId as string),
			ImagesService.fetchImages(),
		]);

		const enhancedCatalogData = enhanceCatalogData(data, imagesData);
		/* console.log(enhancedCatalogData); */

		return {
			props: {
				service: enhancedCatalogData,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				service: null,
			},
		};
	}
};
