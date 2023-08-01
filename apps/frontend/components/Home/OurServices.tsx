import { Carousel } from "@mantine/carousel";
import { Button, useMantineTheme } from "@mantine/core";
import ServiceCard from "../Carrousel/ServiceCard";
import { useState } from "react";
import Link from "next/link";

const OurServices = () => {
	const services = [
		{
			title: "Lorem ipsum",
			img: "/images/Milan.jpg",
		},
		{
			title: "Lorem ipsum dolor ",
			img: "/images/Napli.jpg",
		},
		{
			title: "Lorem",
			img: "/images/Rome.jpg",
		},
		{
			title: "Lorem ipsum",
			img: "/images/Rome 2.jpg",
		},
	];
	const theme = useMantineTheme();
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<section className="relative">
			<div className="absolute top-0 left-0 w-full pl-80 ">
				<div
					className="h-[400px] rounded-xl"
					style={{
						backgroundColor: theme.colors.primary[0],
					}}
				/>
			</div>

			<div className="w-full p-10 pl-80">
				<Carousel
					className="h-full"
					slideSize="250px"
					slideGap="md"
					loop
					align="center"
					onSlideChange={setCurrentSlide}
					styles={{
						controls: {
							top: "calc(50% - 8.625rem / 2)",
						},
					}}
				>
					{services.map((service, index) => (
						<Carousel.Slide className="h-full" key={index}>
							<ServiceCard
								title={service.title}
								image={service.img}
								isExpanded={index === currentSlide}
							/>
						</Carousel.Slide>
					))}
				</Carousel>
			</div>
			<div className="absolute top-0 left-0 w-[600px]">
				<h4 className="mt-0">OUR SERVICES</h4>
				<h2>PACKAGES</h2>
				<p style={{ color: "grey" }} className=" w-72">
					WE ARE HERE WHENEVER YOU NEED US! WE HAVE BEEN CLEANING HOMES AND
					OFFICES IN CALIFORNIA, Texas, Delaware, Maryland, North Carolina,
					Cancun, Montreal and more FOR OVER 22 YEARS NOW.
				</p>
				<Link href="/services" passHref>
					<Button color="secondary.0" radius="xl">
						Read More
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default OurServices;
