import next from "next";
import { Button } from "@mantine/core";
import { CalendarEvent, Home, HomeShield, Wand } from "tabler-icons-react";
import CheckBox from "./SerName/checkbox";
import TypeSection from "./SerName/typesection";
import InputSection from "./SerName/input";

const ServiceName = () => {
  const CheckList = [
    {
      list: "Lorem ipsum dolor sit amet consectetur. Ut maecenas consequat tellus pharetra quis pellentesque eu sed sapien.",
    },
    {
      list: "Lorem ipsum dolor sit amet consectetur. Ut maecenas consequat tellus pharetra quis pellentesque eu sed sapien.",
    },
    {
      list: "Lorem ipsum dolor sit amet consectetur. Ut maecenas consequat tellus pharetra quis pellentesque eu sed sapien.",
    },
    {
      list: "Lorem ipsum dolor sit amet consectetur. Ut maecenas consequat tellus pharetra quis pellentesque eu sed sapien.",
    },
  ];
  const TypeList = [
    {
      icon: <Home size={36} stroke-width={1.2}></Home>,
      type: "Type",
      suscription: "Suscription",
    },
    {
      icon: <CalendarEvent size={36} stroke-width={1.2}></CalendarEvent>,
      type: "Type",
      suscription: "Suscription",
    },
  ];
  const InputList = [
    {
      description: "Size",
    },
    {
      description: "Monthly",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row md:gap-x-8">
      <div className="flex flex-col items-start md:items-center md:justify-between ">
        <div>
          <h4 className="mb-6">Service Name</h4>
          <p className="text-xs text-justify w-72 md:w-[780px] tracking-wide font-medium leading-5 md:leading-4">
            Lorem ipsum dolor sit amet consectetur. Ut id suspendisse duis
            elementum tristique nulla elementurn. Habitant tempor nisl in congue
            dis. Diam nulla a habitant eget facilisi. Lobortis pellentesque turpis
            velit bibendum mattis sed lacus. Lectus dictumst tempus arcu
            vestibulum sed ut et Pulvinar ut mus purus quis. Quam leo facilisis
            augue nec id ut non. Molestie at ac ac ullamcorper amet fermentum
            habitant consectetur erat Et rhoncus ut turpis morbi nunc. Egestas
            magna mauris magnis etiam lectus tincidunt quis nisl integer. Ut amet
            velit consectetur dolor. Tortor dui eu sed ut at. Ornare in feugiat
            congue dui dui eu dignissim facilisis leo. Odio et varius hac eu sed
            pharetra posuere sed.
          </p>
          <div>
            <h6 className="mb-6">Includes</h6>
            <div className="flex flex-col w-72 md:flex-row justify-between md:w-[740px]">
              <div className="">
                {CheckList.map((item, index) => (
                  <CheckBox key={index} list={item.list} />
                ))}
              </div>
              <div className="flex md:flex-col gap-8 my-2 md:my-0 md:gap-10 ">
                <div className="flex items-center gap-2 md:gap-6">
                  <Wand size={32} stroke-width={1.2}></Wand>
                  <label className="text-xs text-justify tracking-wide font-medium">
                    Lorem ipsum dolor
                  </label>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                  <HomeShield size={32} stroke-width={1.2}></HomeShield>
                  <label className="text-xs text-justify tracking-wide font-medium">
                    Lorem ipsum dolor
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex items-center">
        <aside className="bg-[#efdfe0] h-full my-10 w-96 py-14 rounded-xl flex flex-col items-center md:w-[440px]">
          <div className="flex justify-center gap-4">
            {TypeList.map((item, index) => (
              <div key={index}>
                <TypeSection
                  icon={item.icon}
                  type={item.type}
                  suscription={item.suscription}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center mt-5 gap-4">
            {InputList.map((item, index) => (
              <div key={index}>
                <InputSection description={item.description} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button w={308} h={28} color="secondary.0" radius="xl">
              <p className="text-[10px] font-bold tracking-[0.2em]">Book Now</p>
            </Button>
          </div>
          <div className="bg-[#fff8f6] w-[308px] h-10 rounded-2xl mt-5 px-5 flex justify-between items-center">
            <div className="text-sm font-bold">Total</div>
            <div className="text-sm font-bold">$$$</div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default ServiceName;
