import { Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";

function HeroSection() {
	const theme = useMantineTheme();
	return (
		<section className="lg:h-screen h-[500px] sm:h-[550px] md:h-[650px] m-auto lg:mt-16 mt-[140px] bg-fixed bg-[center_top_6rem] bg-cover main_section lg:bg-[center_top_4rem] md:bg-[center_top_6rem] ">
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

			<div className="absolute xl:bottom-[30%] xl:right-[55%] m-10 2xl:p-0">
				<h1
					style={{
						color: "white",
					}}
				>
					OURMAIDS
				</h1>
				<h4
					style={{
						color: "white",
					}}
					className="max-w-[350px] sm:max-w-[700px]"
				>
					The most affordable Residential and commercial cleaning services since
					2,000... and the most reliable. Our prices start at $139.
				</h4>

				<Button radius="xl" color="secondary.0" mr={10}>
					Bookings
				</Button>
				<Button radius="xl" color="secondary.0">
					Franchise
				</Button>
			</div>
		</section>
	);
}

export default HeroSection;
