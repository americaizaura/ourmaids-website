import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface MenuProps {
	title: string;
	image: string;
}

function Menu1(props: MenuProps) {
	return (
		<div>
			<div className="rounded-2xl relative w-full h-20 flex flex-row overflow-hidden shadow-lg">
				<aside className="absolute w-full h-full">
					<img
						className="w-96 h-96 translate-y-[-50%] translate-x-[-10%] object-cover absolute z-10"
						src={props.image}
						alt={props.title}
					/>
					<p className="text-lg absolute z-20 text-[#fff] px-9 font-bold flex py-3">
						{props.title}
					</p>
				</aside>
			</div>
		</div>
	);
}

export default Menu1;