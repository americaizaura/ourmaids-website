import { Container } from "@mantine/core";
import StepsCard from "./Booking/StepsCard";
import Image from "next/image";

const Booking = () => {
	const steps = [
		{
			title: "Select a Service.",
			image: "/images/step-one.png",
			step: 1,
		},
		{
			title: "Select a Date and Time.",
			image: "/images/step-two.png",
			step: 2,
		},
		{
			title: "Enter your Details.",
			image: "/images/step-three.png",
			step: 3,
		},
	];

	return (
		<section className="relative mt-52 lg:mt-[400px]">
			<div className="absolute right-0">
				<Image
					src="/images/circle-booking.png"
					alt="Circle"
					width={150}
					height={345}
					objectFit="cover"
				/>
			</div>
			<div className="absolute -bottom-20">
				<Image
					src="/images/circles-booking.png"
					alt="Circle"
					width={151}
					height={212}
					objectFit="cover"
				/>
			</div>
			<Container
				style={{
					marginTop: "200px",
					marginBottom: "200px",
				}}
				size="xl"
			>
				<h4>BOOKINGS</h4>
				<h2 className="z-10 relative md:static">3 easy steps to get started</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 mt-24">
					{steps.map((step, index) => (
						<StepsCard
							key={index}
							title={step.title}
							image={step.image}
							step={step.step}
							index={index}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Booking;
