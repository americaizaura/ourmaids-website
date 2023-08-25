import { Button, Container, Grid } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
const AboutUs = () => {
	return (
		<section className="relative">
			<Container size="xl">
				<Grid grow>
					<Grid.Col md={3} sm={6} className="mb-8 md:mb-0">
						<Container fluid className="relative w-auto md:h-[531px] h-[200px]">
							<Image
								src="/images/about.png"
								alt="Hero"
								layout="fill"
								objectFit="cover"
								className="rounded-xl"
								objectPosition="40% 40%"
							/>
							{/*     <div className="xl:max-h-[530.7px] xl:max-w-[495px] xl:min-h-[512px] xl:min-w-[512px] relative">
                <Image
                  src="/images/about.png"
                  alt="Hero"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div> */}
						</Container>
					</Grid.Col>
					<Grid.Col md={7} sm={6}>
						<Grid>
							<Grid.Col md={11} offsetMd={1} sm={12} offsetSm={0}>
								<h4 className="mt-0">ABOUT US</h4>
								<h2 className="uppercase">history</h2>
								<p style={{ color: "grey" }} className="text-justify">
									OURMAIDS.COM IS A COMPANY FOR THE PEOPLE, NOT JUST AN ONLINE
									PLATFORM. LOOK AT MORE REVIEWS HERE We don&apos;t &quot;match
									you with a Pro&quot;. We are the Professional cleaners! We
									review your booking immediately and schedule it within one
									hour, you get a calendar invite when it is up on the teams
									app. You can reach one of our friendly Customer Care
									specialist by phone or e-mail and get live responses almost
									immediately from 7am to 7pm Monday to Sunday (Numbers on top
									of each page.) Get online bookings and automated responses
									24/7 365 days. Our services are the best in the industry
									because we have done for so many years now that we have
									improved all aspects of the service.
								</p>
								<Link href="/about-us" passHref>
									<Button color="secondary.0" radius="xl">
										Read More
									</Button>
								</Link>
							</Grid.Col>
						</Grid>
					</Grid.Col>
				</Grid>
			</Container>
			{/*  <div className="mt-8 xl:w-[500px] xl:h-64 lg:bottom-0 lg:right-0 lg:translate-y-[50%]  lg:w-[400px] lg:h-56 w-full h-56 lg:absolute lg:block hidden "> */}
			<div className="mt-8 w-[500px] h-64 bottom-0 right-0  translate-y-[50%]   lg:absolute lg:block hidden ">
				<Image
					src="/images/image 8.png"
					alt="Hero"
					layout="fill"
					objectFit="cover"
					className="md:rounded-l-xl rounded-xl "
				/>
			</div>
		</section>
	);
};

export default AboutUs;
