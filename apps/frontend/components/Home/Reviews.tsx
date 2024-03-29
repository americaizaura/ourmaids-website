import { Container, Button } from "@mantine/core";
import CardReview from "./Reviews/CardReview";
import CardPrincipal from "./Reviews/CardPrincipal";
interface ReviewsProps {
	reviewsGoogle: any;
}
const Reviews = ({ reviewsGoogle }: ReviewsProps) => {
	const services = [
		{
			title: "You already managed to use our services?",
			description: "Let´s us know!",
			botton: "Leave a review",
		},
	];
	const reviews = [
		{
			review:
				"Elvia, the cleaner, arrived on time. She changed her outdoor shoes for slippers and asked to be shown the areas that required cleaning. She asked where I had left the vacuum cleaner and cleaning supplies, and two hours later my apartment was nice and clean. I can recommend her more highly. Her agency, Our Maids Franchise, Inc., also provides her with excellent support.",
			img: "/images/hero.png",
			name: "Paul Peck",
			rating: 5,
			date: "12.12.21",
		},
		{
			review:
				"I am extremely satisfied with the service I received from this Micaela. The customer service team was exceptional, and they went above and beyond to ensure that my home would look its best for guests. If you need an efficient cleaning crew, look no further than Our Maids Franchise, Inc.",
			img: "/images/hero.png",
			name: "Edward Deny",
			rating: 5,
			date: "12.12.21",
		},
		{
			review:
				"This company is excellent! The booking process was cost effective, and the quoted price was reasonable. They sent Laura to my home who did an excellent job. I highly recommend her for any cleaning job, no matter how large or small. We were pleasantly surprised by how well this company handled our transaction; we will definitely do business with them again in the future.",
			img: "/images/hero.png",
			name: "James Hawkins",
			rating: 5,
			date: "12.12.21",
		},
	];

	return (
		<section
			style={{
				marginTop: "200px",
				marginBottom: "200px",
			}}
		>
			<Container size="xl">
				<h4>Reviews</h4>
				<h2>Our clients</h2>
				<div className="flex justify-center mt-14">
					<div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
						{services.map((service, index) => (
							<div key={index}>
								<CardPrincipal
									title={service.title}
									description={service.description}
									botton={service.botton}
								/>
							</div>
						))}
						{/* split array */}

						{reviewsGoogle ? (
							reviewsGoogle &&
							reviewsGoogle.reviews &&
							reviewsGoogle.reviews.slice(0, 3).map((review, index) => (
								<div key={index}>
									<CardReview
										author={review.author_name}
										date={review.time}
										description={review.text}
										rating={review.rating}
										avatar={review.profile_photo_url}
									/>
								</div>
							))
						) : (
							<h4>No reviews yet</h4>
						)}
					</div>
				</div>
				<div className="flex justify-center mt-16">
					<a
						href="https://www.google.com/maps/place/Our+Maids,+Inc/@34.2072574,-118.366808,15z/data=!4m8!3m7!1s0x80c295c64e3ee80b:0xbe3821a2bd2c7d79!8m2!3d34.2072574!4d-118.366808!9m1!1b1!16s%2Fg%2F11j7d_s13c?entry=ttu"
						target="_blank"
						rel="noreferrer"
					>
						<Button
							size="lg"
							variant="outline"
							color="secondary.0"
							radius={"xl"}
							w={125}
							h={30}
						>
							<p className="text-xs font-bold tracking-widest">See more</p>
						</Button>
					</a>
				</div>
			</Container>
		</section>
	);
};
export default Reviews;
