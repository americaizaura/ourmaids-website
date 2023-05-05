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
import CardReview from "../components/Home/Reviews/CardReview";
import OurServices from "../components/Home/OurServices";
import AboutUs from "../components/Home/AboutUs";
import Booking from "../components/Home/Booking";
import Reviews from "../components/Home/Reviews";

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
          height={460}
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
          marginBottom: "200px",
        }}
        size="xl"
      >
        <OurServices />
      </Container>
      <AboutUs />
      <Booking />
      <Reviews />
    </AppShell>
  );
}
