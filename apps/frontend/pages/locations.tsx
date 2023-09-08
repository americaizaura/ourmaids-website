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
	Skeleton,
} from "@mantine/core";
import {
	GoogleMap,
	Marker,
	MarkerF,
	useLoadScript,
} from "@react-google-maps/api";
import Image from "next/image";
import Map from "../components/map";
import { BrandTwitter, MapPin } from "tabler-icons-react";
import { NextSeo } from "next-seo";

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
		googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
		language: "en",
	});
	const markers = [
		{ lat: 18.5204, lng: 73.8567 },
		{ lat: 18.5314, lng: 73.8446 },
		{ lat: 18.5642, lng: 73.7769 },
	];
	const [mapRef, setMapRef] = useState(null);
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
					lat: 39.158,
					lng: -75.524,
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
					lat: 38.33786,
					lng: -75.08214,
				},
				{
					id: 4,
					name: "Office in Oklahoma City, OK",
					phone: "",
					location:
						"413 NW Britton Rd, Oklahoma City, Oklahoma, Oklahoma, United States",
					lat: 35.56656,
					lng: -97.5213,
				},
				{
					id: 5,
					name: "Office in North Carolina",
					phone: "213-800-7644",
					location: "915 S Lindell Rd, Greensboro, NC, United States",
					lat: 36.0632,
					lng: -79.83629,
				},
				{
					id: 6,
					name: "OurMaids of Dallas",
					phone: "972 534 7730",
					location:
						"1180 N Masters Dr, Dallas, TX 75217, United States of America",
					lat: 32.73162,
					lng: -96.64509,
				},
				//add more locations
				{
					id: 7,
					name: "OurMaids of Sun Valley, CA.",
					phone: "213-800-7644",
					location: "7520 Satsuma Ave, Sun Valley, CA, United States",
					lat: 34.213,
					lng: -118.378,
				},
				{
					id: 8,
					name: "Office in Austin, TX.",
					phone: "213-800-7644",
					location: "1070 Mearns Meadow Blvd, Austin, TX, United States",
					lat: 30.358,
					lng: -97.688,
				},
				{
					id: 9,
					name: "Office in Fort Worth, TX.",
					phone: "231-800-7644",
					location: "2832 Crenshaw Ave, Fort Worth, TX, United States",
					lat: 32.725,
					lng: -97.342,
				},
				{
					id: 10,
					name: "OurMaids of Van Nuys, CA.",
					phone: "747 206 1999",
					location:
						"17407 Gilmore St, Van Nuys, CA 91406, United States of America",
					lat: 34.196,
					lng: -118.467,
				},
			],
		},
		{
			id: 2,
			country: "Mexico",
			locations: [
				{
					id: 1,
					name: "Office en Cancun, Mexico",
					phone: "624-106-4460",
					location: "Supmz 7, Avenida Bonampak, Cancún, México",
					lat: 21.16195,
					lng: -86.85191,
				},
				{
					id: 2,
					name: "OurMaids of Los Cabos, BCS",
					phone: "624-106-4460",
					location: "Cabo San Lucas Centro, 23450 Cabo San Lucas, BCS, México",
					lat: 22.89088,
					lng: -109.916,
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
					location: "Montréal, 6625 Rue Dumas, QC, Canada",
					lat: 45.45175,
					lng: -73.59831,
				},
			],
		},
	];
	const onLoad = (map) => {
		const bounds = new google.maps.LatLngBounds();
		/* markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng })); */
		locations.forEach((location) => {
			location.locations.forEach((location) => {
				bounds.extend({ lat: location.lat, lng: location.lng });
			});
		});
		map.fitBounds(bounds);
		setMapRef(map);
	};
	const handleMarkerClick = (lat: number, lng: number) => {
		mapRef?.setZoom(15);
		mapRef?.panTo({ lat, lng });
	};

	const [isHovered, setIsHovered] = useState(false);
	const [idLocation, setIdLocation] = useState(0);

	return (
		<>
			<NextSeo
				title="Cleaning Services Locations | Our Maids, Inc."
				description="Find Our Maids' professional house cleaning services in multiple locations across the US. Easy online booking and quality service with a satisfaction guarantee."
			/>
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
												className="flex gap-x-4 items-center py-2 cursor-pointer hover:bg-surface hover:bg-opacity-10 hover:text-secondary "
												onClick={() => {
													handleMarkerClick(location.lat, location.lng);
												}}
												onMouseEnter={() => {
													setIsHovered(true);
													setIdLocation(location.id);
												}}
												onMouseLeave={() => {
													setIsHovered(false);
													setIdLocation(0);
												}}
											>
												<div>
													<MapPin
														size={28}
														className={`${
															isHovered && idLocation === Number(location.id)
																? "text-secondary"
																: "text-textPrimary"
														}`}
													/>
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
									<Skeleton height={500} radius="lg" />
								) : (
									<GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad}>
										{locations
											.map((locationGroup) =>
												locationGroup.locations.map((location) => (
													<MarkerF
														onClick={() => {
															handleMarkerClick(location.lat, location.lng);
														}}
														position={{ lat: location.lat, lng: location.lng }}
														key={
															"locationGroup_" +
															locationGroup.id +
															"location_" +
															location.id
														}
													/>
												))
											)
											.flat()}
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
		</>
	);
}
