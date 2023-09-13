import React from "react";
import ReviewsService from "./Reviews/Reviews";
import Cleanliness from "./Reviews/Cleanliness";

const Reviews = () => {
	const reviews = [
		{
			name: "Emma Wilson",
			profilePic: "/images/Avatar.webp",
			review:
				"Absolutely impressed with OurMaids! The booking process was a breeze, and the cleaning service exceeded my expectations. My home has never looked this immaculate. The team was punctual, professional, and thorough. I'll definitely be a returning customer!",
			date: "1 day ago",
			qualification: "⭐4.5",
		},
		{
			name: "Liam Smith",
			profilePic: "/images/Avatar2.jpg",
			review:
				"I've tried various cleaning services before, but none come close to the quality I experienced with OurMaids. From start to finish, everything was seamless. The attention to detail and commitment to cleanliness is evident in every corner of my home. Highly recommend!",
			date: "4 day ago",
			qualification: "⭐4.5",
		},
		{
			name: "Olivia Williams",
			profilePic: "/images/Avatar3.jpeg",
			review:
				"OurMaids transformed my living space into a spotless haven. The online booking platform was user-friendly, and the service itself was top-notch. The cleaners were friendly, efficient, and left my place looking brand new. I'm genuinely impressed and will be using their service regularly.",
			date: "1 month ago",
			qualification: "⭐4.5",
		},
		{
			name: "Noah Jones",
			profilePic: "/images/Avatar4.jpeg",
			review:
				"What a fantastic find! OurMaids delivered an exceptional cleaning service that made my day. The team's professionalism and dedication were evident from the moment they arrived. My home feels revitalized, and I can't thank them enough. If you're seeking quality and reliability, look no further.",
			date: "10 day ago",
			qualification: "⭐4.5",
		},
	];
	const cleanliness = [
		{
			subtitle: "Cleanliness",
			qualification: "4.5",
		},
		{
			subtitle: "Cleansing",
			qualification: "4",
		},
		{
			subtitle: "Pristine",
			qualification: "5",
		},
		{
			subtitle: "Tidiness",
			qualification: "4",
		},
	];

	return (
		<section className="flex flex-col items-center md:items-stretch">
			<div>
				<h6 className="my-2">Reviews</h6>
				<div className="my-2">
					<div className="flex items-center">
						<p className="text-xs font-bold mr-4 my-4">4.5⭐</p>
						<p className="text-[0.625rem] font-semibold">12 reviews</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-24 mb-4 gap-y-0">
						{cleanliness.map((cleanliness, index) => (
							<div key={index}>
								<Cleanliness
									subtitle={cleanliness.subtitle}
									qualification={cleanliness.qualification}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 my-12">
				{reviews.map((review, index) => (
					<div key={index}>
						<ReviewsService
							name={review.name}
							profilePic={review.profilePic}
							review={review.review}
							date={review.date}
							qualification={review.qualification}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Reviews;
