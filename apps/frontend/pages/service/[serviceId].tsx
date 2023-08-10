import React from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Stepper,
	StepperProps,
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
import { RetrieveCatalogObjectResponse } from "square";
interface ServiceProps {
	service: RetrieveCatalogObjectResponse;
}
export default function SectionVictor({ service }: ServiceProps) {
	return (
		<main>
			<Container size="xl" className="pt-32 pb-12 md:w-auto">
				<ServiceName
					name={service.object?.itemData?.name}
					description={service.object?.itemData?.description}
				/>
				<div className="flex flex-col justify-center items-center gap-x-32 mb-10 2xl:gap-x-40 md:my-28 md:flex-row">
					<DateSection />
					<div>
						<RecomendSection />
						<LocationsSection />
					</div>
				</div>
				<Reviews />
				<CleaningTeam />
			</Container>
			<RulesSection />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { serviceId } = context.params;
		const data = await CatalogService.retrieveCatalogObject(
			serviceId as string
		);

		console.log(data);

		return {
			props: {
				service: data,
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
