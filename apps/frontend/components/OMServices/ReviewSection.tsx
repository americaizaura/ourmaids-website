import React from "react";
import ReviewsService from "./Reviews/Reviews";
import Cleanliness from "./Reviews/Cleanliness";

const Reviews = () => {
  const reviews = [
    {
      name: "Lorem ipsum",
      profilePic: "images/Avatar.webp",
      review:
        "Lorern ipsum dolor Sit amet Consectetur. Cursus peuentesque morbi sed nuriC. Quam nulla id habitant volutpat eros magna donec sapien, Semper ultamcorper egestas vitae laoreet sapien adipiscing fringiUa pulvinar. Quis tortor ante quis in mattis. Loret ipsum dolor Sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien, Sernper utlamcorper egestas vitae taoreet sapien adipiscing fringilta pulvinar, Quis tortor ante quis in mattis",
      date: "1 day ago",
      qualification: "⭐4.5",
    },
    {
      name: "Lorem ipsum",
      profilePic: "/images/Avatar.webp",
      review:
        "Lorern ipsum dolor Sit amet Consectetur. Cursus peuentesque morbi sed nuriC. Quam nulla id habitant volutpat eros magna donec sapien, Semper ultamcorper egestas vitae laoreet sapien adipiscing fringiUa pulvinar. Quis tortor ante quis in mattis. Loret ipsum dolor Sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien, Sernper utlamcorper egestas vitae taoreet sapien adipiscing fringilta pulvinar, Quis tortor ante quis in mattis",
      date: "1 day ago",
      qualification: "⭐4.5",
    },
    {
      name: "Lorem ipsum",
      profilePic: "/images/Avatar.webp",
      review:
        "Lorern ipsum dolor Sit amet Consectetur. Cursus peuentesque morbi sed nuriC. Quam nulla id habitant volutpat eros magna donec sapien, Semper ultamcorper egestas vitae laoreet sapien adipiscing fringiUa pulvinar. Quis tortor ante quis in mattis. Loret ipsum dolor Sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien, Sernper utlamcorper egestas vitae taoreet sapien adipiscing fringilta pulvinar, Quis tortor ante quis in mattis",
      date: "1 day ago",
      qualification: "⭐4.5",
    },
    {
      name: "Lorem ipsum",
      profilePic: "/images/Avatar.webp",
      review:
        "Lorern ipsum dolor Sit amet Consectetur. Cursus peuentesque morbi sed nuriC. Quam nulla id habitant volutpat eros magna donec sapien, Semper ultamcorper egestas vitae laoreet sapien adipiscing fringiUa pulvinar. Quis tortor ante quis in mattis. Loret ipsum dolor Sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien, Sernper utlamcorper egestas vitae taoreet sapien adipiscing fringilta pulvinar, Quis tortor ante quis in mattis",
      date: "1 day ago",
      qualification: "⭐4.5",
    },
  ];
  const cleanliness = [
    {
      subtitle: "Cleanliness",
      qualification: "4.5",
    },
    {
      subtitle: "Cleanliness",
      qualification: "4.5",
    },
    {
      subtitle: "Cleanliness",
      qualification: "4.5",
    },
    {
      subtitle: "Cleanliness",
      qualification: "4.5",
    },
  ];

  return (
    <section className="">
      <div>
        <h6 className="my-2">Reviews</h6>
        <div className="my-2">
          <div className="flex items-center">
            <p className="text-xs font-bold mr-4 my-4">4.5⭐</p>
            <p className="text-[0.625rem] font-semibold">12 reviews</p>
          </div>
          <div className="grid grid-cols-2 gap-x-24 mb-4 gap-y-0">
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
      <div className="grid grid-cols-2 gap-x-24 gap-y-8 my-12">
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
