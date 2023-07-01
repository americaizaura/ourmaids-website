import { Container } from "@mantine/core";
import React from "react";
import { Accordion } from "@mantine/core";
import { ChevronRight } from "tabler-icons-react";

const RulesSection = () => {
  const rules = [
    {
      title: "Safety",
      rule1: "Lorem ipsum dolor sit amet",
      rule2: "Lorem ipsum dolor sit amet",
      rule3: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Cancellation policy",
      rule1: "Lorem ipsum dolor sit amet",
      rule2: "Lorem ipsum dolor sit amet",
      rule3: "Lorem ipsum dolor sit amet",
    },
  ];
  const faq = [
    {
      id: "lorem1",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem.",
    },
    {
      id: "lorem2",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem.",
    },
    {
      id: "lorem3",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sagittis quis non nulla praesent. Aliquam nibh id nec et pulvinar dictumst nisi. Tellus tristique semper cursus convallis volutpat lorem.",
    },
  ];
  const items = faq.map((item, index) => (
    <Accordion.Item
      value={item.id}
      key={index}
      className="w-[760px] rounded-xl bg-[#fff8f6] border-0"
    
    >
      <Accordion.Control className="rounded-xl bg-[#fff8f6] px-8 py-2">
        <div className="text-xs font-semibold font-montserrat">{item.title}</div>
      </Accordion.Control>
      <Accordion.Panel className="rounded-xl bg-[#fff8f6] px-4 ">
        <div className="text-justify text-[10px] tracking-wide font-medium leading-4 font-montserrat">
          {item.description}
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <section className="w-full h-2/3 bg-primary">
      <Container size="xl" className="pt-2 pb-12">
        <h6 className="mb-6">Rules and FAQ</h6>
        <div className="flex gap-x-24">
          {rules.map((rule, index) => (
            <div key={index} className="flex flex-col gap-y-8">
              <div className="text-xs text-justify tracking-wide font-bold">
                {rule.title}
              </div>
              <div className="flex flex-col text-xs text-justify tracking-wide font-medium gap-y-2">
                <div>{rule.rule1}</div>
                <div>{rule.rule2}</div>
                <div>{rule.rule3}</div>
              </div>
            </div>
          ))}
          <div>
            <div className="text-xs text-justify tracking-wide font-bold mb-8">
              FAQ
            </div>
            <Accordion 
              variant="separated" 
              className="" 
              defaultValue="lorem1"
              chevron={<ChevronRight size="1rem" />}
              styles = {{
                chevron: {
                  '&[data-rotate]': {
                    transform: 'rotate(90deg)'
                  },
                },
              }}
            >
              {items}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RulesSection;
