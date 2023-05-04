import { ActionIcon } from "@mantine/core";
import Image from "next/image";
import {
  Activity,
  ArrowNarrowLeft,
  ArrowNarrowRight,
} from "tabler-icons-react";
interface serviceInfomation {
  title: string;
  image: string;
  isExpanded?: boolean;
}
const ServiceCard = ({ title, image, isExpanded }: serviceInfomation) => {
  return (
    <div className="flex flex-col h-[500px] pb-4 justify-center items-center">
      <div>
        <div
          className={`flex flex-col rounded-xl transition-all duration-500   ${
            isExpanded ? "shadow-md" : ""
          }`}
          style={{
            backgroundColor: isExpanded ? "white" : "transparent",
            padding: "2.5rem",
            height: isExpanded ? "484px" : "300px",
            width: "315px",
            marginBottom: isExpanded ? "0" : "8rem",
          }}
        >
          <div
            className=" mx-auto w-full"
            style={{
              height: isExpanded ? "100%" : "208px",
            }}
          >
            <div
              className="mx-auto transition-all duration-500 relative"
              style={{
                height: isExpanded ? "100%" : "208px",
                aspectRatio: isExpanded ? undefined : "1/1",
              }}
            >
              <Image
                className="rounded-md mx-auto"
                src={image}
                objectFit="cover"
                layout="fill"
                alt={title}
              />
            </div>
          </div>
          <h5 className="text-center m-0 mt-4">{title}</h5>
          {isExpanded && (
            <ActionIcon
              className="mx-auto mt-4"
              color="secondary.0"
              radius="xl"
              size="lg"
              variant="filled"
            >
              <ArrowNarrowRight size={24} color="white" />
            </ActionIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
