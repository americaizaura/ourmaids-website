import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  BackgroundImage,
  Center,
  Container,
  Grid,
  Button,
  Card,
} from "@mantine/core";
import Appbar from "../components/header";
import HeroSection from "../components/Hero";
import FooterSection from "../components/footer";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import CardReview from "../components/CardReview";
import OurServices from "../components/Home/OurServices";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const reviews = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/hero.png",
      rating: 5,
    },
  ];
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.background[0],
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      /*   navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      } */

      footer={
        <Footer
          fixed={false}
          height={400}
          p="xl"
          style={{
            backgroundColor: theme.colors.dark[8],
            color: theme.colors.background[0],
            paddingLeft: "240px",
            paddingRight: "240px",
            position: "relative",
          }}
        >
          <FooterSection />
        </Footer>
      }
      header={
        <Header
          height={{ base: 50, md: 70 }}
          p="md"
          px={150}
          style={{
            backgroundColor: theme.colors.primary[0],
          }}
        >
          <Appbar />
        </Header>
      }
    >
      <HeroSection />

      <Container
        style={{
          marginTop: "200px",
        }}
        size="xl"
      >
        <OurServices />
        <section
          style={{
            marginTop: "200px",
          }}
        >
          <Container fluid>
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
                  <Grid.Col md={6} offset={1}>
                    <h3>ABOUT US</h3>
                    <h1>LOREM IPSUM DOLOR</h1>
                    <p style={{ color: "grey" }}>
                      Lorem ipsum dolor sit amet consectetur. Faucibus egestas
                      neque nunc ipsum. At non volutpat accumsan ac in malesuada
                      morbi eu sagittis. Ut volutpat condimentum volutpat
                      bibendum vel lectus scelerisque netus velit. Felis ut
                      integer sed eget egestas nibh. Sagittis tincidunt feugiat
                      viverra scelerisque. Maecenas pellentesque tristique
                      condimentum pretium. Diam nullam ultrices risus nisl porta
                      aliquam magna.
                    </p>
                    <Button color="secondary.0" radius="xl">
                      Read More
                    </Button>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col md={6} offset={6}>
                    <Image
                      src="/images/about.png"
                      alt="Hero"
                      width={800}
                      height={460}
                      objectFit="cover"
                    />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section>
          <h3>BOOKING</h3>
          <h1>3 easy steps to get started</h1>
          <Container
            fluid
            style={{
              borderRadius: "20px",
            }}
            px={40}
            py={80}
          >
            <Grid gutter={20} justify="center">
              <Grid.Col md={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  1
                  <Card
                    shadow="sm"
                    padding="md"
                    radius="xl"
                    style={{
                      width: "100%",
                    }}
                  >
                    <h1>1</h1>
                    <h3>LOREM IPSUM DOLOR</h3>
                  </Card>
                </div>
              </Grid.Col>
              <Grid.Col
                md={4}
                style={{
                  marginTop: "100px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "65px",
                      height: "65px",
                      backgroundColor: theme.colors.primary[0],
                      textAlign: "center",
                      lineHeight: "100px",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "36px" }}>1</span>
                  </div>
                  <Card
                    shadow="sm"
                    padding="md"
                    radius="xl"
                    style={{
                      width: "100%",
                    }}
                  >
                    <h1>1</h1>
                    <h3>LOREM IPSUM DOLOR</h3>
                  </Card>
                </div>
              </Grid.Col>
              <Grid.Col
                md={4}
                style={{
                  marginTop: "200px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  1
                  <Card
                    shadow="sm"
                    padding="md"
                    radius="xl"
                    style={{
                      width: "100%",
                    }}
                  >
                    <h1>1</h1>
                    <h3>LOREM IPSUM DOLOR</h3>
                  </Card>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section>
          <h3>REVIEWS</h3>
          <h1>Our clients</h1>
          <Container
            fluid
            style={{
              height: "100%",
              borderRadius: "20px",
            }}
            px={40}
            py={80}
          >
            <Carousel
              height={200}
              slideSize="33.333333%"
              slideGap="md"
              loop
              align="start"
              breakpoints={[
                { maxWidth: "md", slideSize: "50%" },
                { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
              ]}
            >
              <Carousel.Slide>1</Carousel.Slide>
              <Carousel.Slide>2</Carousel.Slide>
              <Carousel.Slide>3</Carousel.Slide>
              <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
          </Container>
        </section>
        <CardReview />
      </Container>
    </AppShell>
  );
}
