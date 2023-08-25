import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

enum CatalogItemProductType {
	AppointmentsService = "APPOINTMENTS_SERVICE",
	Regular = "REGULAR",
}

interface MenuProps {
	title: string;
	image: string;
	onClick?: () => void;
	productType: CatalogItemProductType;
}

function menu2(props: MenuProps) {
	return (
		<div>
			<div
				className={`rounded-2xl relative w-full h-20 flex flex-row cursor-pointer overflow-hidden 
				${props.productType === CatalogItemProductType.Regular ? "shadow-2xl" : ""}
			`}
				onClick={props.onClick}
			>
				<aside className="absolute w-full h-full">
					<img
						className="w-96 h-96 translate-y-[-35%] translate-x-[0%] object-cover absolute z-10"
						src={props.image}
						alt={props.title}
					/>
					<p className="min-[500px]:px-6 text-base sm:text-lg absolute z-10 text-[#fff] px-3 sm:px-9 font-bold flex py-3">
						{props.title}
					</p>
				</aside>
			</div>
		</div>
	);
}

export default menu2;
