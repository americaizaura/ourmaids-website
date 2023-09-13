import React from "react";
import { Button } from "@mantine/core";
import Link from "next/link";
interface BookingProps {
	url: string;
	id: string;
}
export default function LocationsSection({ url, id }: BookingProps) {
	return (
		<section>
			<h6 className="mb-6 mt-0">Booking</h6>
			<div className="flex gap-x-4">
				<img
					src={url || "/images/oservices/image 17.png"}
					alt=""
					className="w-3/4 h-40 lg:h-56 object-cover rounded-3xl"
				/>
				<div>
					<div className="text-xs text-justify tracking-wide font-medium w-4/5 lg:w-full">
						Book your appointment online. We will contact you to confirm your
						appointment details.
					</div>
					<Link href={"/booking?service=" + id}>
						<Button
							w={100}
							h={28}
							color="secondary.0"
							radius="xl"
							className="tracking-widest text-[10px] font-semibold font-montserrat my-5"
						>
							Book Now
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
