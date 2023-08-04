import React from "react";
import {
	Button,
	Textarea,
	Container,
	Accordion,
	useMantineTheme,
	rem,
} from "@mantine/core";
import Image from "next/image";
import Input from "../components/Input";

export default function AboutUsView() {
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
							We are America's most affordable residential and commercial
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
					<div className="grow">
						<div className="grid md:grid-cols-12 h-full grid-cols-1  sm:grid-cols-2 sm:max-md:grid-rows-2 sm:max-md:grid-flow-col max-sm:grid-rows-3  sm:gap-8">
							<div className="md:col-start-2 md:col-end-5 h-full sm:col-start-1 sm:col-end-2 max-sm:row-start-1 max-sm:row-end-2">
								<div className="flex flex-col justify-around  h-full">
									<div>
										<h3>Affordable prices</h3>
										<p className="text-justify">
											Our fees start at $139 weekly subscription for a flat less
											than 500 s.f. Then go up according to the type of service
											(Standard, Deep, Move out, etc.)
										</p>
									</div>
									<div>
										<h3>Easy payment</h3>
										<p className="text-justify">
											We accept all types of credit and debit cards and you can
											pay on your mobile home or on theirs. We also take checks,
											cash, Zelle, cash app, paypal, apple pay and
											google pay payments.
										</p>
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
									{/* 	width={500}
										height={600} */}
								</div>
							</div>
							<div className="md:col-start-10 md:col-end-13 sm:col-start-2 sm:col-end-3 max-sm:row-start-2 max-sm:row-end-3">
								<div className="flex flex-col justify-around h-full">
									<div>
										<h3>Home services</h3>
										<p className="text-justify">
											At your home we do: Deep cleaning, Standard cleaning, Move
											out/Move in cleaning, Post construction cleaning, domestic
											services (every day cleaning) and subscriptions: weekly,
											biweekly, monthly.
										</p>
									</div>
									<div>
										<h3>Deep cleaning</h3>
										<p className="text-justify">
											We do office cleaning, janitorial services (building
											maintenance), church cleaning, cleaning to school, and
											cleanig & maintenance to any type of building.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className="w-full sm:mb-60 mb-32 relative h-full">
				<div className="lg:absolute top-0 right-0 h-[85%] w-[50%] hidden lg:block">
					<Image
						src="/images/aboutUs/image-25.webp"
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
								OURMAIDS.COM IS A COMPANY FOR THE PEOPLE, NOT JUST AN ONLINE
								PLATFORM. LOOK AT MORE REVIEWS HERE We don't "match you with a
								Pro". We are the Professional cleaners! We review your booking
								immediately and schedule it within one hour, you get a calendar
								invite when it is up on the teams app. You can reach one of our
								friendly Customer Care specialist by phone or e-mail and get
								live responses almost immediately from 7am to 7pm Monday to
								Sunday (Numbers on top of each page.) Get online bookings and
								automated responses 24/7 365 days. Our services are the best in
								the industry because we have done for so many years now that we
								have improved all aspects of the service.
							</p>
							{/* 	<p className="text-justify">
								His VISION was a simple one back then. To create a cleaning
								service company that is not tied up to any brick and mortar
								store, but one that can be run from anywhere in the world. Then
								OurMaids.com was born as the only cleaning service company based
								entirely on an online platform. Our StoreFront is online at any
								minute and at your fingertips to Book your service, then pay for
								it. Check our services and prices before you order, get instant
								answers to your most commonly asked questions and speak with a
								friendly Customer Care specialist 7am to 7pm every day. As of
								now, 03/24/2023, we are offering Franchises so everybody has the
								chance to share on this idea or bringing cleaning services to
								your home Uber like. Explore franchise opportunities here.
							</p> */}
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
