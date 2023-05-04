import { Button, Container, Grid } from "@mantine/core";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="relative">
      <Container size="xl">
        <Grid grow>
          <Grid.Col md={5}>
            <Container fluid>
              <Image
                src="/images/about.png"
                alt="Hero"
                width={700}
                height={750}
                objectFit="cover"
              />
            </Container>
          </Grid.Col>
          <Grid.Col md={7}>
            <Grid>
              <Grid.Col md={12} offset={1}>
                <h4 className="mt-0">ABOUT US</h4>
                <h2>LOREM IPSUM DOLOR</h2>
                <p style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur. Faucibus egestas neque
                  nunc ipsum. At non volutpat accumsan ac in malesuada morbi eu
                  sagittis. Ut volutpat condimentum volutpat bibendum vel lectus
                  scelerisque netus velit. Felis ut integer sed eget egestas
                  nibh. Sagittis tincidunt feugiat viverra scelerisque. Maecenas
                  pellentesque tristique condimentum pretium. Diam nullam
                  ultrices risus nisl porta aliquam magna.
                </p>
                <Button color="secondary.0" radius="xl">
                  Read More
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
      <div className="absolute bottom-0 right-0 translate-y-[50%]">
        <Image
          src="/images/about.png"
          alt="Hero"
          width={500}
          height={250}
          objectFit="cover"
          className="rounded-l-xl"
        />
      </div>
    </section>
  );
};

export default AboutUs;
