import React from "react";
import CleaningS from "./Cleaning/clean";
import { Carousel } from "@mantine/carousel";
import { CarouselSlide } from "@mantine/carousel/lib/CarouselSlide/CarouselSlide";

function CleaningTeam() {
	return (
		<section className="flex flex-col justify-center items-center md:items-stretch">
			<div>
				<h6 className="">Cleaning Team</h6>
				<Carousel
					withControls
					loop
					styles={{
						control: {
							backgroundColor: "transparent",
							color: "black",
							border: "none",
							boxShadow: "none",
						},
						controls: {},
					}}
				>
					<Carousel.Slide>
						<CleaningS
							profilePic="/images/cleangirl.webp"
							greeting="Hello, my name is Micaela"
							qualification="4.5⭐"
							reviews="12 reviews"
							description="I have been working as a cleaner for 5 years. I am very responsible and I like to do my job well."
							languages="English, spanish"
							lorem="Lorem ipsum dolor sit amet."
							lorem2="Lorem ipsum dolor sit amet."
						/>
					</Carousel.Slide>
				</Carousel>
			</div>
		</section>
	);
}

export default CleaningTeam;
