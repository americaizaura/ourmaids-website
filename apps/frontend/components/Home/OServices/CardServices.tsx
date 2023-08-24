import { Card, Text, Badge, Button, Group, Avatar } from "@mantine/core";
import Image from "next/image";
interface CardServicesProps {
	image: string;
	description: string;
	idCatalogProduct: string;
}
import { useRouter } from "next/router";
import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";

function CardServices(props: CardServicesProps) {
	return (
		<>
			<Link href={`/service/${props.idCatalogProduct}`} passHref>
				<div className="rounded-full w-full h-52 md:h-80 flex flex-col cursor-pointer">
					<div className="relative w-full h-36 md:h-64">
						<Image
							className="rounded-2xl object-cover cursor-pointer"
							src={props.image}
							alt={props.description}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					{/* <p className=" text-black px-5 font-bold text-center text-sm"> */}
					<LinesEllipsis
						text={props.description}
						maxLine={2}
						ellipsis="..."
						className="text-black px-5 font-bold text-center text-sm font-montserrat"
					/>
					{/* </p> */}
				</div>
			</Link>
		</>
	);
}

export default CardServices;
