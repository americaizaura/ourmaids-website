import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface review {
  author?: string;
  title?: string;
  description?: string;
  image?: string;
  rating?: number;
  date?: string;
}
function CardReview(props: review) {
  return (
    <div>
      <div className="flex flex-col gap-3 bg-white rounded-3xl px-10 shadow-md h-60 w-80 ">
        <div className="flex flex-row justify-between flex-wrap mt-6">
          <div className="flex flex-row space-x-2">
            <Avatar className="rounded-full"></Avatar>
            <div className="mt-2 text-base font-bold ">{props.author}</div>
          </div>
          <p className="text-[10px] font-semibold mt-3">{props.date}</p>
        </div>
        <div className="mt-0">
          <p className="block text-[10px] font-bold text-justify tracking-wider leading-4 mb-20 max-h-9">
            {props.description}
          </p>
          <div>
            <p className="text-center text-[10px] font-extrabold ">
              ⭐{props.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
