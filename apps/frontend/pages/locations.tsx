import React, { useState } from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Input,
	ThemeIcon,
	List,
} from "@mantine/core";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import Map from "../components/map";
import { BrandTwitter, MapPin } from "tabler-icons-react";

const center = {
	lat: -3.745,
	lng: -38.523,
};
const containerStyle = {
	width: "100%",
	height: "500px",
	borderRadius: "0.75rem",
	overflow: "hidden",
};
export default function LocationsView() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey:
			process.env.REACT_APP_GOOGLE_API_KEY ||
			"AIzaSyCFIeOK8R5tCOSIPBDeCceJx-ayHwwXfhw",
		language: "en",
	});
	const markers = [
		{ lat: 18.5204, lng: 73.8567 },
		{ lat: 18.5314, lng: 73.8446 },
		{ lat: 18.5642, lng: 73.7769 },
	];

	const locations = [
		{
			id: 1,
			country: "United States",
			locations: [
				{
					id: 1,
					name: "Our Office in Dover, DE. (Corporate)",
					phone: "213-800-7644",
					location: "8 The Green, Dover, DE, United States",
					lat: 39.1562077,
					lng: 39.1562077,
				},
				{
					id: 2,
					name: "OurMaids of Grand Prairie, TX.",
					phone: "213-800-7644",
					location: "3603 Forest Trail Dr, Grand Prairie, TX, United States",
					lat: 32.6840495,
					lng: -97.0477151,
				},
				{
					id: 3,
					name: "OurMaids of Delaware",
					phone: "213-800-7644",
					location: "7th St, Ocean City, MD 21842 USA",
				},
				{
					id: 4,
					name: "Office in North Carolina",
					phone: "213-800-7644",
					location:
						"OurMaids of Delaware 7th St, Ocean City, MD 21842 USA, 213-800-7644",
				},
				{
					id: 5,
					name: "Office in North Carolina",
					phone: "213-800-7644",
					location: "915 S Lindell Rd, Greensboro, NC, United States",
				},
				{
					id: 6,
					name: "OurMaids of Dallas",
					phone: "213-800-7644",
					location:
						"1180 N Masters Dr, Dallas, TX 75217, United States of America",
				},
				//add more locations
				{
					id: 7,
					name: "OurMaids of Sun Valley, CA.",
					phone: "213-800-7644",
					location: "7520 Satsuma Ave, Sun Valley, CA, United States",
				},
				{
					id: 8,
					name: "OurMaids of Austin, TX.",
					phone: "213-800-7644",
					location: "1070 Mearns Meadow Blvd, Austin, TX, United States",
				},
				{
					id: 9,
					name: "OurMaids of Fort Worth, TX.",
					phone: "213-800-7644",
					location: "2832 Crenshaw Ave, Fort Worth, TX, United States",
				},
				{
					id: 10,
					name: "OurMaids of Houston, TX.",
					phone: "213-800-7644",
					location:
						"17407 Gilmore St, Van Nuys, CA 91406, United States of America",
				},
			],
		},
		{
			id: 2,
			country: "Mexico",
			locations: [
				{
					id: 1,
					name: "OurMaids of Cancun, Mexico",
					phone: "98-32-44-19-75",
					location: "Supmz 7, Avenida Bonampak, Cancún, México",
				},
				{
					id: 2,
					name: "OurMaids of Los Cabos, BCS",
					phone: "624-106-4460",
					location:
						"BCS Cabo San Lucas Centro, 23450 Cabo San Lucas, BCS, México",
				},
			],
		},
		{
			id: 3,
			country: "Canada",
			locations: [
				{
					id: 1,
					name: "OurMaids of Montreal, QC",
					phone: "438-701-2058",
					location:
						"Office in Montreal, QC Montréal, 6625 Rue Dumas, QC, Canada, 438-701-2058",
				},
			],
		},
	];
	const onLoad = (map) => {
		const bounds = new google.maps.LatLngBounds();
		markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
		map.fitBounds(bounds);
	};
	return (
		<div className="lg:mt-16 flex flex-col h-full">
			<Container size="xl" className="pt-24 pd:mb-28 pb-14 w-full h-full">
				<h2 className="mt-0">Locations</h2>
				<div className="grid grid-cols-12 md:gap-10 space-y-10 md:space-y-0 h-auto">
					<Accordion
						className="col-span-12 md:col-start-1 md:col-end-6 w-full h-auto"
						variant="separated"
						radius="md"
						styles={(theme) => ({
							item: {
								backgroundColor: theme.colors.primaryVariant[0],
								"&[data-active]": {
									borderColor: theme.colors.primaryVariant[0],
									backgroundColor: theme.colors.primaryVariant[0],
								},
							},
							panel: {
								maxHeight: "280px",
								overflow: "hidden",
								overflowY: "auto",
							},
						})}
					>
						{locations.map((item) => (
							<Accordion.Item value={item.id.toString()} key={item.id}>
								<Accordion.Control>
									<h6 className="font-bold my-0">{item.country}</h6>
								</Accordion.Control>
								<Accordion.Panel>
									{item.locations.map((location) => (
										<div
											key={location.id}
											className="flex gap-x-4 items-center space-y-4 cursor-pointer"
										>
											<div>
												<MapPin size={28} />
											</div>
											<div className="flex flex-col">
												<p className="font-bold my-0">{location.name}</p>
												<p className="my-0">{location.phone}</p>
												<p className="my-0">{location.location}</p>
											</div>
										</div>
									))}
								</Accordion.Panel>
							</Accordion.Item>
						))}
					</Accordion>
					<div
						className="col-span-12 md:col-start-6 md:col-end-13 w-full h-[500px]
					"
					>
						{/* <Map
							ubicationUrl="https://www.google.com/maps?q=8%20The%20Green,%20Dover,%20DE,%20United%20States&hl=en&output=embed"
							width="100%"
							height="100%"
						/> */}
						<div className="App">
							{!isLoaded ? (
								<h1>Loading...</h1>
							) : (
								<GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad}>
									{markers.map(({ lat, lng }, index) => (
										<Marker position={{ lat, lng }} key={index} />
									))}
								</GoogleMap>
							)}
						</div>
					</div>
					{/* 	<div className="bg-primary col-span-12 md:col-start-7 md:col-end-13 w-full h-56"></div> */}
				</div>
			</Container>
			<div className="grow"></div>
			<div className="w-full hidden relative md:block px-0">
				<div className="bg-[#76AD77] w-3/6  top-0 left-0 -z-10 absolute h-full"></div>
				<div className="-z-10  absolute w-3/6 h-full left-[50%]">
					<Image
						src="/images/image 31.png"
						objectFit="cover"
						layout="fill"
						objectPosition="0 25%"
						alt="locations"
					/>
				</div>

				<Container size="xl" className="grid grid-cols-12 h-[480px] pt-16">
					<div className="md:col-span-5 col-span-12">
						<h2>Find your nearest location</h2>

						<Input placeholder={"Enter your location"} radius="lg" />
					</div>
				</Container>
			</div>
			<div className="w-full md:hidden  flex flex-col  px-0 h-full">
				<div className="bg-[#76AD77]  w-full h-full ">
					<Container size="xl" className="grid grid-cols-12 pt-16">
						<div className="md:col-span-5 col-span-12">
							<h2>Find your nearest location</h2>
							{/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
							<Input placeholder={"Enter your location"} radius="lg" />
						</div>
					</Container>
				</div>
				<div className="mt-auto relative w-full h-96">
					<Image
						src="/images/image 31.png"
						objectFit="cover"
						layout="fill"
						objectPosition="0 25%"
						alt="locations"
					/>
				</div>
			</div>
		</div>
	);
}
