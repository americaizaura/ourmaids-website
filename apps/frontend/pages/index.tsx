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
} from "@mantine/core";
import Appbar from "../components/header";
import HeroSection from "../components/Hero";
import FooterSection from "../components/footer";
import { Carousel } from "@mantine/carousel";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.background[0],
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
          style={{
            backgroundColor: theme.colors.primary[0],
          }}
        >
          <Appbar />
        </Header>
      }
    >
      <section
        style={{
          width: "100%",
          height: "1000px",
        }}
      >
        <HeroSection />
      </section>
      <section>
        <Container fluid>
          <h3> OUR SERVICES</h3>

          <Container fluid>
            <Grid grow>
              <Grid.Col md={2}>
                <h1>LOREM IPSUM DOLOR</h1>
                <p style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet consectetur. A aliquam vestibulum
                  egestas ipsum tellus porttitor.
                </p>
                <Button color="secondary.0" radius="xl">
                  Read More
                </Button>
              </Grid.Col>
              <Grid.Col md={8}>
                <Container
                  fluid
                  style={{
                    backgroundColor: theme.colors.primary[0],
                    height: "100%",
                    borderRadius: "20px",
                  }}
                >
                  <Carousel
                    withIndicators
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
                  </Carousel>
                </Container>
              </Grid.Col>
            </Grid>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Grid grow>
            <Grid.Col md={5}></Grid.Col>
            <Grid.Col md={7}>
              <h3>ABOUT US</h3>
              <h1>LOREM IPSUM DOLOR</h1>
              <p style={{ color: "grey" }}>
                Lorem ipsum dolor sit amet consectetur. Faucibus egestas neque
                nunc ipsum. At non volutpat accumsan ac in malesuada morbi eu
                sagittis. Ut volutpat condimentum volutpat bibendum vel lectus
                scelerisque netus velit. Felis ut integer sed eget egestas nibh.
                Sagittis tincidunt feugiat viverra scelerisque. Maecenas
                pellentesque tristique condimentum pretium. Diam nullam ultrices
                risus nisl porta aliquam magna.
              </p>
              <Button color="secondary.0" radius="xl">
                Read More
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </AppShell>
  );
}
