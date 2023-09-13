import { Carousel } from "@mantine/carousel";
import { Button, useMantineTheme } from "@mantine/core";
import ServiceCard from "../Carrousel/ServiceCard";
import { useState } from "react";
import Link from "next/link";
import SkeletonCard from "../Carrousel/SkeletonCard";
interface ServicesProps {
	data: any;
}
const OurServices = ({ data }: ServicesProps) => {
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
			<div className="sm:absolute top-0 left-0 sm:w-[600px] block w-full pb-10 sm:pb-0">
				<h4 className="mt-0">OUR SERVICES</h4>
				<h2>PACKAGES</h2>
				<p
					style={{ color: "grey" }}
					className=" sm:w-72 w-full normal-case  text-justify"
				>
					Choose your service package, then fill out the booking tool to reserve
					your cleaning service. You can PAY at the time of booking (Payment is
					processed on a secure server in San Francisco, CA, not on
					ourmaids.com,) or PAY LATER, but before your team starts cleaning. We
					also accept cash, checks, Zelle, cash app, ApplePay. Money back
					guarantee: If either party cancels, your money will be immediately
					returned to your card. The safeguard of your information is our Top
					Priority. See our privacy page.
				</p>
				<Link href="/services" passHref>
					<Button color="secondary.0" radius="xl">
						Read More
					</Button>
				</Link>
			</div>
			<div className="absolute sm:top-0 left-0 w-full sm:pl-80  block">
				<div
					className="h-[400px] rounded-xl"
					style={{
						backgroundColor: theme.colors.primary[0],
					}}
				/>
			</div>

			<div className="w-full sm:py-10 sm:pb-10 sm:pl-80 md:pl-80  md:p-10 p-10 sm:p-0">
				<Carousel
					className="h-full "
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
					{/*  {data?.map((service, index) => (
            <Carousel.Slide className="h-full" key={service?.id}>
              <ServiceCard
                title={service?.itemData?.name}
                image={
                  service && service.imageData
                    ? service.imageData.url
                    : "/images/oservices/image 17.png"
                }
                id={service?.id}
                isExpanded={index === currentSlide}
              />
            </Carousel.Slide>
          ))} */}
					{data
						? data.map((service, index) => (
								<Carousel.Slide className="h-full" key={service?.id}>
									<ServiceCard
										title={service?.itemData?.name}
										image={
											service && service.imageData
												? service.imageData.url
												: "/images/oservices/image 17.png"
										}
										id={service?.id}
										isExpanded={index === currentSlide}
									/>
								</Carousel.Slide>
						  ))
						: Array.from({ length: 10 }).map((_, index) => (
								<Carousel.Slide className="h-full" key={index}>
									<SkeletonCard isExpanded={index === currentSlide} />
								</Carousel.Slide>
						  ))}
				</Carousel>
			</div>
		</section>
	);
};

export default OurServices;
