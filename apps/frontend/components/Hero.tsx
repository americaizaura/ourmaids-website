import { Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";

function HeroSection() {
  const theme = useMantineTheme();
  return (
    /*     <div
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
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
    </div> */
    <section className="main_section" id="main_section">
      <div className="max-width">
        <div className="main_section-content">
          <h1
            style={{
              color: "white",
            }}
          >
            LOREM IPSUM
          </h1>
          <h4
            style={{
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </h4>

          <Button radius="xl" color="secondary.0" mr={10}>
            Booking
          </Button>
          <Button radius="xl" color="secondary.0">
            Franchasing
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
