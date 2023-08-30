import next from "next";
import { Button } from "@mantine/core";
import { CalendarEvent, Home, HomeShield, Wand } from "tabler-icons-react";
import CheckBox from "./SerName/checkbox";
import TypeSection from "./SerName/typesection";
import InputSection from "./SerName/input";
interface ServiceNameProps {
	name: string;
	description: string;
}
const ServiceName = ({ name, description }: ServiceNameProps) => {
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
		<section className="flex flex-col xl:flex-row md:gap-x-8 2xl:gap-x-16">
			<div className="flex flex-col  md:justify-between w-full">
				<div>
					<h4 className="mb-6">{name}</h4>
					<p className="text-justify font-medium">{description}</p>
					{/* <div>
						<h6 className="mb-6">Includes</h6>
						<div className="flex flex-col md:flex-row w-72 justify-between md:w-[740px] min-[500px]:w-96">
							<div className=" gap-10 md:gap-3 md:flex md:flex-col">
								{CheckList.map((item, index) => (
									<CheckBox key={index} list={item.list} />
								))}
							</div>
							<div className="flex md:flex md:flex-col min-[500px]:grid min-[500px]:grid-cols-2 gap-8 my-2 md:my-0 md:gap-10 ">
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
					</div> */}
				</div>
			</div>
			{/*    <section className="flex justify-center">
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
      </section> */}
		</section>
	);
};

export default ServiceName;
