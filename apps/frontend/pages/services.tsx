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
import { SearchCatalogItemsResponse } from "square";
interface ServicesProps {
	services: SearchCatalogItemsResponse;
}
const appointmentsService = CatalogItemProductType.AppointmentsService;
const regular = CatalogItemProductType.Regular;
export default function ServicesView({ services }: ServicesProps) {
	const [selectedProductType, setSelectedProductType] =
		React.useState<CatalogItemProductType>(appointmentsService);
	/* 	const {
		data: dataServices,
		loading: loadingServices,
		error: errorServices,
	} = useCatalogQueryQuery({
		variables: {
			merchantId: "MLKWYQQXZSB3S",
			productType: CatalogItemProductType.AppointmentsService,
		},
	}); */

	const data = /* dataServices ?? */ services;
	console.log(data);

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
								{data?.items?.map((service, index) => (
									<CardServices
										key={service?.id}
										image={
											service &&
											service.imageData &&
											service.imageData[0] &&
											service.imageData[0].url
												? service.imageData[0].url
												: "/images/oservices/image 17.png"
										}
										description={service?.itemData.name}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	/* 	const catalog = await fetch("http://localhost:3000/api/catalog", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			productType: CatalogItemProductType.AppointmentsService,
		}),
	});
	const catalogJson = await catalog.json();

	return {
		props: {
			catalogJson,
		},
	}; */

	try {
		const catalog = await fetch(
			"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api/catalog",
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					productType: CatalogItemProductType.AppointmentsService,
				}),
			}
		);

		/* 	const images = await fetch("http://localhost:3000/api/catalog",

		) */

		const data: SearchCatalogItemsResponse = await catalog.json();

		return {
			props: {
				services: data,
			},
		};
	} catch (error) {
		console.log(error);
		console.log("error");

		return {
			props: {
				services: null,
			},
		};
	}
};
