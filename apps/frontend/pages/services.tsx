import React from "react";
import Menu from "../components/Home/OServices/Menu";
import { Container } from "@mantine/core";

export default function ServicesView() {
  const menu = [
    {
      title: "SUSCRIPTIONS",
      image: "/images/image 19.png",
    },
    {
      title: "ONE TIME",
      image: "/images/image 20.png",
    },
  ];
  const services = [
    {
      image: "/images/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_1.png",
      description: "Lorem ipsum dolor.",
    },
    {
      image: "/images/image 17_2.png",
      description: "Lorem ipsum dolor.",
    },
  ];
  return (
    <section>
      <div className="lg:mt-16 mt-8">
        <div className="h-screen w-full bg-primary"></div>
        <div className="px-12 py-7">
          <h5>Our Services</h5>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              {menu.map((menu, index) => (
                <div key={index}>
                  <div className="mb-10">
                    <Menu title={menu.title} image={menu.image} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
