import { Carousel } from "@mantine/carousel";
import { Avatar, Container } from "@mantine/core";
import CardReview from "./Reviews/CardReview";

const Reviews = () => {
  const reviews = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Cursus pellentesque morbi sed nunc",
      img: "/images/hero.png",
      name: "John Doe",
      rating: 5,
      date: "12.12.21",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien. Semper ullamcorper egestas vitae laoreet sapien adipiscing fringilla pulvinar. Quis tortor ante quis in mattis. ",
      img: "/images/hero.png",
      name: "John Doe",
      rating: 5,
      date: "12.12.21",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Cursus pellentesque morbi sed nunc. Quam nulla id habitant volutpat eros magna donec sapien. Semper ullamcorper egestas vitae laoreet sapien adipiscing fringilla pulvinar. Quis tortor ante quis in mattis. ",
      img: "/images/hero.png",
      name: "John Doe",
      rating: 5,
      date: "12.12.21",
    },
  ];

  return (
    <section
      style={{
        marginTop: "200px",
      }}
    >
      <Container size="xl">
        <h4>Reviews</h4>
        <h2>Our clients</h2>
        {/*     <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Slide key={index}>
              <div className="flex flex-col gap-4 bg-white rounded-3xl  p-32">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <Avatar></Avatar>
                    <h5 className="mt-0">{review.name}</h5>
                  </div>
                  <p>{review.date}</p>
                </div>
                <div>
                  <p>{review.review}</p>
                </div>
                <div>
                  <h5>{review.rating}</h5>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel> */}
        <div className="grid grid-cols-4 gap-12 ">
          {reviews.map((review, index) => (
            <div
              key={index}
            >
              <CardReview
                author={review.name}
                date={review.date}
                description={review.review}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Reviews;
