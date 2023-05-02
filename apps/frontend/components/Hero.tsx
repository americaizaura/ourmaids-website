import { Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";

function HeroSection() {
  const theme = useMantineTheme();
  return (
    <div className="hero-section">
      <Image src="/images/hero.png" alt="Hero" layout="fill" objectFit="fill" />
      <div className="hero-content">
        <h1>LOREM IPSUM</h1>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>

        <Button radius="xl" color="secondary.0">
          Booking
        </Button>
        <Button radius="xl" color="secondary.0">
          Franchasing
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
