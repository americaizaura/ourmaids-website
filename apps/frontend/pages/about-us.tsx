import React, { useState } from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
	Modal,
} from "@mantine/core";
import Image from "next/image";
import Input from "../components/Input";
import { useDisclosure } from "@mantine/hooks";

export default function AboutUsView() {
	//function to open modalas only one state
	const [openedModal, setOpenedModal] = useState({
		deepClean: false,
		postConstruction: false,
		moveInMoveOut: false,
		cleaningBySuscription: false,
	});

	const handleOpenModal = (modalName: string) => {
		setOpenedModal({
			...openedModal,
			[modalName]: true,
		});
	};

	const handleCloseModal = (modalName: string) => {
		setOpenedModal({
			...openedModal,
			[modalName]: false,
		});
	};

	return (
		<div className="lg:mt-16 mt-40">
			{/* 	<video
				controls
				muted
				autoPlay
				className="lg:h-screen lg:w-screen lg:mb-44 w-full h-auto mt-4 mb-20 "
			>
				<source src="promo.mp4" type="video/mp4" />
			</video> */}

			<div className="relative ">
				<div className="px-4 lg:px-0">
					<div className="relative lg:absolute lg:block lg:h-full lg:w-[50%] h-[200px] w-full ">
						<Image
							src="/images/aboutUs/image-21.webp"
							alt="Hero"
							objectFit="cover"
							layout="fill"
							className="lg:rounded-r-xl 2xl:rounded-xl rounded-xl"
							objectPosition="0 25%"
						/>
					</div>
				</div>
				<div className="absolute lg:block lg:top-[80%] h-full lg:left-[8%] md:top-[10%] md:left-[60%] left-[20%] top-[8%]">
					<div className="w-64 h-64 rounded-full flex justify-center items-center  bg-[#76AD77]">
						<h6 className="my-0 text-surface text-center">
							“Daily, two o three times a week housekeeping to homes of all
							sizes.”
						</h6>
					</div>
				</div>

				<Container
					size="xl"
					className="grid grid-cols-12 lg:mb-60 mb-12 mt-44 lg:mt-44 md:mt-12"
				>
					<div className="lg:col-start-8 md:col-end-13 col-span-12">
						<h2 className="mt-4 md:mt-16 lg:mt-0">ABOUT OUR MAIDS</h2>
						<h1>Why Choose OurMaids? </h1>
						<p className="text-justify">
							We are America&lsquo;s most affordable residential and commercial
							cleaning service, and the most reliable, and we have been for 23
							uninterrupted years now! We have opened 12 franchises as of now
							and planning to open many more,
							<strong>
								.... But, all of you will always get the same quality, personal
								service as our very first dear customer, Lee Ann, who called us
								23 years ago out of a flyer Antonio hang up at her door in
								McKinney, TX.
							</strong>
						</p>
						<p className="text-justify">
							We offer Deep House Cleaning, Standard House Cleaning one time or
							by subscription, Post Construction Home or Office Cleaning,
							Commercial cleaning services to all kinds of buildings, Building
							cleaning and maintenance to all types of institutions, and more.
						</p>
						<div className="flex flex-row ">
							<Image
								priority
								src="/icons/cleaning-equipment.svg"
								height={40}
								width={40}
								alt="Follow us on Twitter"
							/>
							<h5 className="ml-4">DEEP CLEAN </h5>
						</div>
						<div className="flex flex-row">
							<Image
								priority
								src="/icons/bubbles.svg"
								height={40}
								width={40}
								alt="Follow us on Twitter"
							/>
							<h5 className="ml-4">MOVE-IN, MOVE-OUT </h5>
						</div>
						<div className="flex flex-row">
							<Image
								priority
								src="/icons/protection.svg"
								height={40}
								width={40}
								alt="Follow us on Twitter"
							/>
							<h5 className="ml-4"> FIRST TIME STANDARD CLEANING</h5>
						</div>
					</div>
				</Container>
			</div>
			<div className="bg-primary h-auto w-full  mb-28  pb-6 md:pb-28">
				<Container size="xl" className="flex flex-col h-full w-full">
					<div className="grow-0 grid grid-cols-12 mb-12">
						<h1 className="col-start-1 md:col-end-8 col-end-13">
							We provide the best cleaning services for you
						</h1>
					</div>
					{/* <div className="grow">
						<div className="grid md:grid-cols-12 h-full grid-cols-1  sm:grid-cols-2 sm:max-md:grid-rows-2 sm:max-md:grid-flow-col max-sm:grid-rows-3  sm:gap-8">
							<div className="md:col-start-2 md:col-end-5 h-full sm:col-start-1 sm:col-end-2 max-sm:row-start-1 max-sm:row-end-2">
								<div className="flex flex-col justify-around  h-full">
									<div>
										<h3>
											Affordable pricescleaning by suscription (standar
											cleaning)
										</h3>
										<p className="text-justify">All rooms:</p>
										<p>
											Wipe out picture frames, knickknacks; dust off ceiling
											fans, lamps; wipe out furniture, woodwork, shelves and
											baseboards. Remove cobwebs. Vacuum carpets. Mop all floors
											and dry wood floors. Vacuum furniture, including under any
											cushions. Empty and clean wastebaskets (trash cans).
										</p>
										<p>Bedrooms:</p>
										<p>
											In addition to all of the above paragraph, we make the
											beds, change the linens if left on the bed, straighten
											your vanity, organize and vacuum your closet if left open.
										</p>
										<p>Bathrooms:</p>
										<p>
											Clean, scrub and sanitize showers, bathtubs and sinks.
											Clean and sanitize toilets, vanities, backsplashes. Clean
											mirrors. Polish chrome. Wash floors and tile walls.
											Deodorize.
										</p>
										<p>Kitchen:</p>
										<p>
											Clean appliances, counters, cabinets, tables and chairs.
											Clean, scrub and sanitize sinks. Clean and sanitize
											countertops and backsplashes. Clean the range top and
											refrigerator top and exterior. Fill up the dishwasher.
											Clean microwave oven inside and out. Wash floors.
										</p>
									</div>
									<div>
										<h3>Post construction cleaning</h3>
										<p className="text-justify">
											Post construction cleaning tasks include:
										</p>
										<ul>
											<li>Vacuum all carpets</li>
											<li>Cleaning all floors</li>
											<li>Washing all bathrooms and its accessories</li>
											<li>Washing all kitchens</li>
											<li>Wiping all appliances inside and out</li>
											<li>Wiping off all baseboards</li>
											<li>Washing all windows inside</li>
											<li>Wiping off all ceiling fans</li>
											<li>Cleaning all cabinets inside and out</li>
											<li>Cleaning all doors</li>
											<li>Cleaning all door knobs</li>
											<li>Swiping all entrance alleys</li>
											<li>Dispose of all trash (not construction materials)</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="md:col-start-5  md:col-end-10 h-full w-full sm:max-md:row-start-2 sm:max-md:row-end-3 sm:max-md:col-span-2 max-sm:row-start-3 max-sm:row-end-4 ">
								<div className=" flex items-center md:w-full md:h-full relative sm:max-md:h-full sm:max-md:w-full h-full ">
									<Image
										src="/images/aboutUs/image-22.webp"
										alt="Hero"
										layout="fill"
										className="rounded-r-xl lg:object-cover sm:max-lg:object-contain max-sm:object-contain"
									/>
								</div>
							</div>
							<div className="md:col-start-10 md:col-end-13 sm:col-start-2 sm:col-end-3 max-sm:row-start-2 max-sm:row-end-3">
								<div className="flex flex-col justify-around h-full">
									<div>
										<h3>Move-in, move-out</h3>
										<p className="text-justify">
											Move-in, move-out cleaning tasks include:
										</p>
										<ul className="text-justify space-y-1">
											<li>Vacuum all carpets</li>
											<li>Cleaning all floors</li>
											<li>Washing all bathrooms and its accessories</li>
											<li>Washing all kitchens</li>
											<li>
												Wiping all appliances inside and out (oven and fridge
												are custom services)
											</li>
											<li>Wiping off all baseboards</li>
											<li>Wiping off all ceiling fans</li>
											<li>Cleaning all cabinets inside and out</li>
											<li>Cleaning all doors</li>
											<li>Cleaning all door knobs</li>
											<li>Swiping all entrance alleys</li>
											<li>Dispose of all trash (not construction materials)</li>
											<li>Cleaning all windows inside</li>
										</ul>
									</div>
									<div>
										<h3>Deep cleaning</h3>
										<p className="text-justify">
											In addition to the standard cleaning, deep cleaning
											includes cleaning:
										</p>
										<ul className="text-justify space-y-1">
											<li>Baseboards</li>
											<li>Stove and micro ovens</li>
											<li>Refrigerator inside</li>
											<li>Cabinets inside</li>
											<li>Ceiling fans</li>
											<li>Windows inside</li>
											<li>Window sills</li>
											<li>Miniblinds</li>
											<li>Cobweb removal</li>
											<li>Cleaning all</li>
											<li>Door knobs</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<div className="h-full block md:hidden">
						<Accordion
							variant="separated"
							radius="md"
							styles={{
								item: {
									// styles added to all items
									backgroundColor: "#fff",
									"&[data-active]": {
										borderColor: "#fff",
									},
									// styles added to expanded item
								},
							}}
						>
							<Accordion.Item value="customization">
								<Accordion.Control>
									Cleaning by suscription (standar cleaning)
								</Accordion.Control>
								<Accordion.Panel>
									<p className="text-justify">All rooms:</p>
									<p>
										Wipe out picture frames, knickknacks; dust off ceiling fans,
										lamps; wipe out furniture, woodwork, shelves and baseboards.
										Remove cobwebs. Vacuum carpets. Mop all floors and dry wood
										floors. Vacuum furniture, including under any cushions.
										Empty and clean wastebaskets (trash cans).
									</p>
									<p>Bedrooms:</p>
									<p>
										In addition to all of the above paragraph, we make the beds,
										change the linens if left on the bed, straighten your
										vanity, organize and vacuum your closet if left open.
									</p>
									<p>Bathrooms:</p>
									<p>
										Clean, scrub and sanitize showers, bathtubs and sinks. Clean
										and sanitize toilets, vanities, backsplashes. Clean mirrors.
										Polish chrome. Wash floors and tile walls. Deodorize.
									</p>
									<p>Kitchen:</p>
									<p>
										Clean appliances, counters, cabinets, tables and chairs.
										Clean, scrub and sanitize sinks. Clean and sanitize
										countertops and backsplashes. Clean the range top and
										refrigerator top and exterior. Fill up the dishwasher. Clean
										microwave oven inside and out. Wash floors.
									</p>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="customizationa">
								<Accordion.Control>
									Post construction cleaning
								</Accordion.Control>
								<Accordion.Panel>
									<p className="text-justify">
										Post construction cleaning tasks include:
									</p>
									<ul>
										<li>Vacuum all carpets</li>
										<li>Cleaning all floors</li>
										<li>Washing all bathrooms and its accessories</li>
										<li>Washing all kitchens</li>
										<li>Wiping all appliances inside and out</li>
										<li>Wiping off all baseboards</li>
										<li>Washing all windows inside</li>
										<li>Wiping off all ceiling fans</li>
										<li>Cleaning all cabinets inside and out</li>
										<li>Cleaning all doors</li>
										<li>Cleaning all door knobs</li>
										<li>Swiping all entrance alleys</li>
										<li>Dispose of all trash (not construction materials)</li>
									</ul>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="customizationas">
								<Accordion.Control>Move-in, move-out</Accordion.Control>
								<Accordion.Panel>
									<p className="text-justify">
										Move-in, move-out cleaning tasks include:
									</p>
									<ul className="text-justify space-y-1 ">
										<li>Vacuum all carpets</li>
										<li>Cleaning all floors</li>
										<li>Washing all bathrooms and its accessories</li>
										<li>Washing all kitchens</li>
										<li>
											Wiping all appliances inside and out (oven and fridge are
											custom services)
										</li>
										<li>Wiping off all baseboards</li>
										<li>Wiping off all ceiling fans</li>
										<li>Cleaning all cabinets inside and out</li>
										<li>Cleaning all doors</li>
										<li>Cleaning all door knobs</li>
										<li>Swiping all entrance alleys</li>
										<li>Dispose of all trash (not construction materials)</li>
										<li>Cleaning all windows inside</li>
									</ul>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value="customizationaaaa">
								<Accordion.Control>Deep cleaning</Accordion.Control>
								<Accordion.Panel>
									<p className="text-justify">
										In addition to the standard cleaning, deep cleaning includes
										cleaning:
									</p>
									<ul className="text-justify space-y-1">
										<li>Baseboards</li>
										<li>Stove and micro ovens</li>
										<li>Refrigerator inside</li>
										<li>Cabinets inside</li>
										<li>Ceiling fans</li>
										<li>Windows inside</li>
										<li>Window sills</li>
										<li>Miniblinds</li>
										<li>Cobweb removal</li>
										<li>Cleaning all</li>
										<li>Door knobs</li>
									</ul>
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>
						<div className="h-full w-full justify-center flex">
							<div className="relative h-[500px] w-[500px]">
								<Image
									src="/images/aboutUs/image-22.webp"
									alt="Hero"
									layout="fill"
									className="rounded-r-xl lg:object-cover sm:max-lg:object-contain max-sm:object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="h-full hidden md:block">
						<div className="grid lg:grid-cols-12 md:grid-cols-2 h-full grid-flow-col gap-4">
							<div className="lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-2 row-start-1 row-end-2 mb-4">
								<h3 className="my-0">
									Cleaning by suscription (standar cleaning)
								</h3>
							</div>
							{/* repeat(4, minmax(0, 1fr)) */}
							<div className="lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-2  row-start-2 row-end-3 ">
								<div className="max-h-[250px] overflow-hidden overflow-y-auto custom-scrollbar pr-2">
									<p className="text-justify">All rooms:</p>
									<p>
										Wipe out picture frames, knickknacks; dust off ceiling fans,
										lamps; wipe out furniture, woodwork, shelves and baseboards.
										Remove cobwebs. Vacuum carpets. Mop all floors and dry wood
										floors. Vacuum furniture, including under any cushions.
										{/* Empty and clean wastebaskets (trash cans). */}
									</p>
									{/* <p>Bedrooms:</p>
									<p>
										In addition to all of the above paragraph, we make the beds,
										change the linens if left on the bed, straighten your
										vanity, organize and vacuum your closet if left open.
									</p>
									<p>Bathrooms:</p>
									<p>
										Clean, scrub and sanitize showers, bathtubs and sinks. Clean
										and sanitize toilets, vanities, backsplashes. Clean mirrors.
										Polish chrome. Wash floors and tile walls. Deodorize.
									</p>
									<p>Kitchen:</p>
									<p>
										Clean appliances, counters, cabinets, tables and chairs.
										Clean, scrub and sanitize sinks. Clean and sanitize
										countertops and backsplashes. Clean the range top and
										refrigerator top and exterior. Fill up the dishwasher. Clean
										microwave oven inside and out. Wash floors.
									</p> */}
								</div>
							</div>
							<div className="flex justify-center lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-2  row-start-3 row-end-4 mb-8">
								<Button
									size="lg"
									variant="outline"
									color="secondary.0"
									radius={"xl"}
									w={125}
									h={30}
								>
									<p className="text-xs font-bold tracking-widest">Read more</p>
								</Button>
							</div>
							<div className="lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-2 row-start-4 row-end-5 mb-4">
								<h3 className="my-0">Post construction cleaning</h3>
							</div>
							<div className="lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-3 row-start-5 row-end-6">
								<div>
									<div className="max-h-[250px] overflow-hidden overflow-y-auto custom-scrollbar pr-2">
										<p className="text-justify">
											Post construction cleaning tasks include:
										</p>
										<ul>
											<li>Vacuum all carpets</li>
											<li>Cleaning all floors</li>
											<li>Washing all bathrooms and its accessories</li>
											<li>Washing all kitchens</li>
											<li>Wiping all appliances inside and out</li>
											{/* <li>Wiping off all baseboards</li>
											<li>Washing all windows inside</li> */}
											{/* <li>Wiping off all ceiling fans</li>
											<li>Cleaning all cabinets inside and out</li>
											<li>Cleaning all doors</li>
											<li>Cleaning all door knobs</li>
											<li>Swiping all entrance alleys</li>
											<li>Dispose of all trash (not construction materials)</li> */}
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-2  row-start-6 row-end-7 mb-8">
								<Button
									size="lg"
									variant="outline"
									color="secondary.0"
									radius={"xl"}
									w={125}
									h={30}
								>
									<p className="text-xs font-bold tracking-widest">Read more</p>
								</Button>
							</div>
							<div className="lg:col-start-5 lg:col-end-10 h-full w-full lg:row-start-1 lg:row-end-7 md:row-start-6 md:row-end-7 md:col-start-1 md:col-end-3 flex lg:items-center md:justify-center">
								<div className="relative h-[500px] w-[500px]">
									<Image
										src="/images/aboutUs/image-22.webp"
										alt="Hero"
										layout="fill"
										className="rounded-r-xl lg:object-cover sm:max-lg:object-contain max-sm:object-contain"
									/>
								</div>
							</div>
							<div className="lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-1 row-end-2 mb-4">
								<h3 className="my-0">Move-in, move-out</h3>
							</div>
							<div className="lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-2 row-end-3">
								<div>
									<div className="max-h-[250px] overflow-hidden overflow-y-auto custom-scrollbar pr-2">
										<p className="text-justify">
											Move-in, move-out cleaning tasks include:
										</p>
										<ul className="text-justify space-y-1 ">
											<li>Vacuum all carpets</li>
											<li>Cleaning all floors</li>
											<li>Washing all bathrooms and its accessories</li>
											<li>Washing all kitchens</li>
											<li>Wiping off all baseboards</li>
											{/* <li>
												Wiping all appliances inside and out (oven and fridge
												are custom services)
											</li> */}
											{/* 
											<li>Wiping off all ceiling fans</li>
											<li>Cleaning all cabinets inside and out</li>
											<li>Cleaning all doors</li>
											<li>Cleaning all door knobs</li>
											<li>Swiping all entrance alleys</li>
											<li>Dispose of all trash (not construction materials)</li>
											<li>Cleaning all windows inside</li> */}
										</ul>
									</div>
								</div>
							</div>

							<div className="flex justify-center lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-3 row-end-4">
								<Button
									size="lg"
									variant="outline"
									color="secondary.0"
									radius={"xl"}
									w={125}
									h={30}
								>
									<p className="text-xs font-bold tracking-widest">Read more</p>
								</Button>
							</div>
							<div className="lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-4 row-end-5 mb-4">
								<h3 className="my-0">Deep cleaning</h3>
							</div>
							<div className="lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-5 row-end-6">
								<div>
									<div className="max-h-[250px] overflow-hidden overflow-y-auto custom-scrollbar pr-2">
										<p className="text-justify">
											In addition to the standard cleaning, deep cleaning
											includes cleaning:
										</p>
										<ul className="text-justify space-y-1">
											<li>Baseboards</li>
											<li>Stove and micro ovens</li>
											<li>Refrigerator inside</li>
											<li>Cabinets inside</li>
											<li>Ceiling fans</li>
											{/* 
											<li>Windows inside</li>
											<li>Window sills</li> */}
											{/* <li>Miniblinds</li>
											<li>Cobweb removal</li>
											<li>Cleaning all</li>
											<li>Door knobs</li> */}
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center lg:col-start-10 lg:col-end-13 md:col-start-2 md:col-end-3 row-start-6 row-end-7">
								<Button
									size="lg"
									variant="outline"
									color="secondary.0"
									radius={"xl"}
									w={125}
									h={30}
								>
									<p className="text-xs font-bold tracking-widest">Read more</p>
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className="w-full sm:mb-60 mb-32 relative h-full">
				<div className="lg:absolute top-0 right-0 h-[85%] w-[50%] hidden lg:block">
					<Image
						src="/images/aboutUs/how.jpg"
						alt="Hero"
						layout="fill"
						objectFit="cover"
						className="rounded-l-xl"
						objectPosition="0 25%"
					/>
				</div>

				<Container size="xl" className="h-full w-full flex flex-col">
					<div className="grid grid-cols-12 mb-14">
						<div className="lg:col-span-4 col-span-12">
							<h3 className="mt-0">How it all started</h3>
							<p className="text-justify">
								IT ALL STARTED HERE, IN THIS SMALL OFFICE IN RICHARDSON, TX,
								WITH THIS GROUP OF BEAUTIFUL LADIES, AND A VISIONARY, ANTONIO V.
								MORENO (he was taking the picture:) Back in 2000, in a small
								shop at Arapaho Rd., Richardson, Texas, United States of
								America, Antonio V. Moreno, then a CNC programmer at Halliburton
								Company, decided to quit a well paid, secure employment to enter
								the unknown, uncertain field of the entrepreneurial world
								founding Our Maids, Inc., a subsidiary of Antonio Moreno
								Enterprises, Inc., and OurMaids brand. He was then a Business
								student at Amberton University. Everything on this site is his
								idea. Before and after getting his Bachelor of Business
								Administration Degree form Amberton University in Dallas County
								(Garland), Texas, he has been working full time on this
								enterprise uninterrupted for 22 years now. His VISION was a
								simple one back then. To create a cleaning service company that
								is not tied up to any brick and mortar store, but one that can
								be run from anywhere in the world. Then OurMaids.com was born as
								the only cleaning service company based entirely on an online
								platform. Our StoreFront is online at any minute and at your
								fingertips to Book your service, then pay for it. Check our
								services and prices before you order, get instant answers to
								your most commonly asked questions and speak with a friendly
								Customer Care specialist 7am to 7pm every day. As of now,
								03/24/2023, we are offering Franchises so everybody has the
								chance to share on this idea or bringing cleaning services to
								your home Uber like. Explore franchise opportunities here.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12 w-full h-full gap-4">
						<div className="lg:col-span-4 w-full h-full col-span-6">
							<Image
								src="/images/aboutUs/image-26.webp"
								alt="Hero"
								width={500}
								height={300}
								className="rounded-xl"
								objectPosition="0 25%"
							/>
						</div>
						<div className="lg:hidden col-span-6  block relative">
							<Image
								src="/images/aboutUs/image-25.webp"
								alt="Hero"
								width={500}
								height={300}
								className="rounded-xl"
								objectPosition="0 25%"
							/>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
