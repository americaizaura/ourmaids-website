import React from "react";

interface TypeSectionProps {
  icon: React.ReactNode;
  type: string;
  suscription: string;
}

function TypeSection(props: TypeSectionProps) {
  return (
    <div className="bg-[#fff8f6] w-36 px-6 pt-6 pb-10 rounded-xl ">
      {props.icon}
      <div className="text-sm text-justify tracking-wide font-bold pb-1">
        {props.type}
      </div>
      <div className="text-sm text-justify tracking-wide ">
        {props.suscription}
      </div>
    </div>
  );
}

export default TypeSection;
