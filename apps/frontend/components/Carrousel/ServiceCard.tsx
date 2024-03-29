import { ActionIcon } from "@mantine/core";
import Image from "next/image";
import { ArrowNarrowRight } from "tabler-icons-react";
interface serviceInfomation {
	title: string;
	image: string;
	isExpanded?: boolean;
	id: string;
}
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
const ServiceCard = ({ title, image, isExpanded, id }: serviceInfomation) => {
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
							<Image
								className="rounded-md mx-auto"
								src={image}
								objectFit="cover"
								layout="fill"
								alt={title}
							/>
						</div>
					</div>

					<LinesEllipsis
						text={title}
						maxLine={isExpanded ? 10 : 2}
						ellipsis="..."
						className="text-center m-0 mt-4 text-xl font-semibold font-montserrat"
					/>
					{isExpanded && (
						<Link href={"/booking?service=" + id}>
							<ActionIcon
								className="mx-auto mt-4"
								color="secondary.0"
								radius="xl"
								size="lg"
								variant="filled"
							>
								<ArrowNarrowRight size={24} color="white" />
							</ActionIcon>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
