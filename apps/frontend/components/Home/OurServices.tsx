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
          Choose your service package, then click on &quot;buy now&quot; to
          purchase it before your team starts cleaning. (if you just booked a
          service, you can pay now or when the team arrives at your place. We
          also accept checks, cash, zelle, cash app, apple pay.) Money back
          guarantee. If you or us cancel, your money will be immediately
          returned to your card. No cancellation fees apply if you cancel before
          your team arrives at your place. Please call or email us if you need
          janitorial services.
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
