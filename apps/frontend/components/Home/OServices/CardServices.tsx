import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface CardServicesProps {
    image: string;
    description: string;
}

function CardServices(props: CardServicesProps) {
    return (
        <div>
            <div className="rounded-full ">
                <div className="w-60 h-52 flex flex-col">
                    <img
                        className="w-full h-full rounded-2xl object-cover cursor-pointer"
                        src={props.image}
                        alt={props.description}
                    />
                    <p className=" text-black px-5 font-semibold">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardServices;