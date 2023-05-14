import { Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";

function HeroSection() {
  const theme = useMantineTheme();
  return (
    <section className="h-screen m-auto mt-16 bg-fixed bg-center bg-cover main_section">
      {/*    <div className="max-width">
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
      </div> */}

      <div className="absolute bottom-1/2 right-1/2 ">
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
    </section>
  );
}

export default HeroSection;
