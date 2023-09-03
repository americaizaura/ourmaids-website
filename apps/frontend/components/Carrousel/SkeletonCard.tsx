import { ActionIcon, Skeleton } from "@mantine/core";
import Image from "next/image";
import {
  Activity,
  ArrowNarrowLeft,
  ArrowNarrowRight,
} from "tabler-icons-react";
interface serviceInfomation {
  isExpanded?: boolean;
}
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
const ServiceCard = ({ isExpanded }: serviceInfomation) => {
  return (
    <div className="flex flex-col h-[440px] pb-4 justify-center items-center">
      <div>
        <div
          className={`flex flex-col rounded-xl transition-all duration-500   ${
            isExpanded ? "shadow-md" : ""
          }`}
          style={{
            backgroundColor: isExpanded ? "white" : "transparent",
            padding: "2rem",
            height: isExpanded ? "424px" : "250px",
            width: "250px",
            marginBottom: isExpanded ? "0" : "8rem",
          }}
        >
          <div
            className=" mx-auto w-full"
            style={{
              height: isExpanded ? "100%" : "180px",
            }}
          >
            <div
              className="mx-auto transition-all duration-500 relative"
              style={{
                height: isExpanded ? "100%" : "180px",
                aspectRatio: isExpanded ? undefined : "1/1",
              }}
            >
              <Skeleton className="rounded-md w-full h-full" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Skeleton height={10} className="w-full" />
            <Skeleton height={10} className="w-36" />
            <Skeleton height={10} className="w-full" />
          </div>
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
