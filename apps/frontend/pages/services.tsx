import React from "react";
import Menu1 from "../components/Home/OServices/Menu1";
import { Container } from "@mantine/core";
import CardServices from "../components/Home/OServices/CardServices";
import Menu2 from "../components/Home/OServices/Menu2";

export default function ServicesView() {
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
  const services = [
    {
      image: "/images/oservices/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/oservices/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
  ];
  return (
    <section>
      <div className="lg:mt-16 mt-8">
        <video
          controls
          muted
          autoPlay
          className="lg:h-screen lg:w-screen  w-full h-auto mt-4"
        >
          <source src="promo.mp4" type="video/mp4" />
        </video>
        <Container size="xl">
          <div>
            <h4>Our Services</h4>
            <div className="flex gap-12">
              <div className="grid grid-cols-3 ">
                <div className="col-span-3">
                  {menu.map((menu, index) => (
                    <div key={index}>
                      <div className="mb-6">
                        <Menu1 title={menu.title} image={menu.image} />
                      </div>
                    </div>
                  ))}
                  {menu2.map((menu2, index) => (
                    <div key={index}>
                      <div className="mb-6">
                        <Menu2 title={menu2.title} image={menu2.image} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-3">
                  <div className="grid grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <div key={index}>
                        <CardServices
                          image={service.image}
                          description={service.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
