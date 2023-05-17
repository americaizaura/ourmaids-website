import React from "react";
import {
  Button,
  Textarea,
  Container,
  Accordion,
  useMantineTheme,
  rem,
  Input,
} from "@mantine/core";
import Image from "next/image";
export default function LocationsView() {
  const locations = [
    {
      id: 1,
      country: "United States",
      locations: [
        {
          id: 1,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. ",
        },
        {
          id: 2,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent.",
        },
        {
          id: 3,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. ",
        },
        {
          id: 4,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent.",
        },
      ],
    },
    {
      id: 2,
      country: "Mexico",
      locations: [
        {
          id: 1,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. ",
        },
      ],
    },
    {
      id: 3,
      country: "Canada",
      locations: [
        {
          id: 1,
          location:
            "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. ",
        },
      ],
    },
  ];
  return (
    <div className="lg:mt-16 grow h-full">
      <Container size="xl" className="pt-24 pb-28">
        <div className="grid grid-cols-12">
          <Accordion
            className="col-start-1 col-end-6"
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
            })}
          >
            {locations.map((item) => (
              <Accordion.Item value={item.id.toString()} key={item.id}>
                <Accordion.Control>
                  <h6 className="font-bold my-0">{item.country}</h6>
                </Accordion.Control>
                <Accordion.Panel>
                  {item.locations.map((location) => (
                    <p key={location.id}>{location.location}</p>
                  ))}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
          <div className="bg-primary col-start-7 col-end-13 w-full h-full"></div>
        </div>
      </Container>

      <Container className="w-full h-full relative px-0" fluid>
        <div className="bg-[#76AD77] w-3/6 top-0 left-0 -z-10 absolute h-full"></div>
        <div className="-z-10  absolute w-3/6 h-full left-[50%]">
          <Image src="/images/image 31.png" objectFit="fill" layout="fill" />
        </div>

        <Container size="xl" className="grid grid-cols-12 h-[760px] pt-40">
          <div className="col-span-5">
            <h2>Find your nearest location</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Input placeholder={"Enter your location"} radius="lg" />
          </div>
        </Container>
      </Container>
    </div>
  );
}
