import { Container, Grid } from "@mantine/core";
import StepsCard from "./Booking/StepsCard";
import Image from "next/image";
const Booking = () => {
  const steps = [
    {
      title: "Lorem ipsum dolor",
      image: "/images/step-one.png",
      step: 1,
    },
    {
      title: "Lorem ipsum",
      image: "/images/step-two.png",
      step: 2,
    },
    {
      title: "Lorem dolor",
      image: "/images/step-three.png",
      step: 3,
    },
  ];
  return (
    <section
      className="relative "
      style={{
        marginTop: "400px",
      }}
    >
      <div className="absolute right-0">
        <Image
          src="/images/circle-booking.png"
          alt="Hero"
          width={150}
          height={345}
          objectFit="cover"
        />
      </div>
      <div className="absolute -bottom-20">
        <Image
          src="/images/circles-booking.png"
          alt="Hero"
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
        <h3>BOOKING</h3>
        <h1>3 easy steps to get started</h1>
        <div className="grid grid-cols-3 mt-24">
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
