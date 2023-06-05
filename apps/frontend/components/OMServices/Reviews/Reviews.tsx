import React from "react";
import Image from "next/image";

interface ReviewsServiceProps {
  name: string;
  profilePic: string;
  review: string;
  date: string;
  qualification: string;
}

function ReviewsService({
  name,
  profilePic,
  review,
  qualification,
  date,
}: ReviewsServiceProps) {
  return (
    <div className="">
      <div className="flex justify-between mb-7">
        <div className="flex flex-row">
          <div className="flex items-center">
            <img
              src={profilePic}
              alt=""
              className="w-10 h-12 object-cover rounded-2xl"
            />
          </div>
          <div className="mx-4">
            <div className="flex flex-col gap-y-4">
              <div className="font-bold h-2 text-sm">{name}</div>
              <div className="text-[0.625rem]">{date}</div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-[0.625rem] mr-2">{qualification}</p>
        </div>
      </div>
      <div>
        <p className="text-justify text-[0.625rem] tracking-wide font-semibold leading-4">{review}</p>
      </div>
    </div>
  );
}

export default ReviewsService;
