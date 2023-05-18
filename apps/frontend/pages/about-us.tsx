import React from "react";
import {
  Button,
  Textarea,
  Container,
  Accordion,
  useMantineTheme,
  rem,
} from "@mantine/core";

import Input from "../components/Input";
export default function AboutUsView() {
  const faq = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem. ",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem. ",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem. ",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem. ",
    },
  ];
  return (
    <div className="lg:mt-16 relative h-full flex-grow">
      <div className="test bg-primary"></div>
      <Container size="xl" className="pt-24 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-start-1 md:col-end-5">
            <h6 className="mt-0">FAQ</h6>
            <Accordion
              variant="separated"
              radius="md"
              styles={{
                item: {
                  backgroundColor: "#fff",
                  "&[data-active]": {
                    borderColor: "#fff",
                  },
                  // styles added to expanded item
                },
              }}
            >
              {faq.map((item) => (
                <Accordion.Item value={item.id.toString()} key={item.id}>
                  <Accordion.Control>
                    <h6 className="font-bold my-0">{item.question}</h6>
                  </Accordion.Control>
                  <Accordion.Panel>{item.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="md:col-start-7 md:col-end-12">
            <div>
              <h2 className="mt-0">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Congue sit tortor tellus
                lacinia.
              </p>
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                </div>

                <Input placeholder="Phone" />
                <Textarea
                  placeholder="Message"
                  radius="lg"
                  styles={(theme) => ({
                    input: {
                      "&:focus-within": {
                        borderColor: theme.colors.secondary[0],
                      },
                      borderColor: theme.colors.secondary[0],
                    },
                  })}
                />
                <Button radius="xl" color="secondary.0">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
