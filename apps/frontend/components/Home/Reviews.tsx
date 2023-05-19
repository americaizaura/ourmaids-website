import { Carousel } from "@mantine/carousel";
import { Avatar, Container, Button } from "@mantine/core";
import CardReview from "./Reviews/CardReview";
import CardPrincipal from "./Reviews/CardPrincipal";

const Reviews = () => {
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
            {reviews.map((review, index) => (
              <div key={index}>
                <CardReview
                  author={review.name}
                  date={review.date}
                  description={review.review}
                  rating={review.rating}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
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
        </div>
      </Container>
    </section>
  );
};
export default Reviews;
