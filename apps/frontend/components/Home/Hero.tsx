import { Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";

function HeroSection() {
	const theme = useMantineTheme();
	return (
		<section className="h-screen m-auto lg:mt-16 mt-[140px] bg-fixed bg-[center_top_6rem] bg-cover main_section lg:bg-[center_top_4rem] md:bg-[center_top_6rem] ">
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

			<div className="absolute lg:bottom-[30%] lg:right-[55%] bottom-1/3">
				<h1
					style={{
						color: "white",
					}}
				>
					OURMAIDS.COM
				</h1>
				<h4
					style={{
						color: "white",
						maxWidth: "600px",
					}}
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
