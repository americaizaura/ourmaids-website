import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface CardServicesProps {
    image: string;
    description: string;
}

function CardServices(props: CardServicesProps) {
    return (
        <div>
            <div className="rounded-full ">
                <div className="w-80 h-96 flex flex-col">
                    <img
                        className="w-full h-full rounded-2xl object-cover cursor-pointer"
                        src={props.image}
                        alt={props.description}
                    />
                    <p className=" text-black px-5 font-bold text-center text-sm">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardServices;