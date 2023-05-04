import { Carousel } from "@mantine/carousel";
import { Button, useMantineTheme } from "@mantine/core";
import ServiceCard from "../Carrousel/ServiceCard";
import { useState } from "react";

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
          className="h-[458px] rounded-xl"
          style={{
            backgroundColor: theme.colors.primary[0],
          }}
        />
      </div>

      <div className="w-full p-10 pl-80">
        <Carousel
          className="h-full"
          slideSize="300px"
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
      <div className="absolute top-0 left-0 w-96">
        <h3 className="mt-0">OUR SERVICES</h3>
        <h1>LOREM IPSUM DOLOR</h1>
        <p style={{ color: "grey" }} className="w-80">
          Lorem ipsum dolor sit amet consectetur. A aliquam vestibulum egestas
          ipsum tellus porttitor.
        </p>
        <Button color="secondary.0" radius="xl">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default OurServices;
