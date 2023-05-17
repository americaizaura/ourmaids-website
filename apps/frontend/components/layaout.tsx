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
import HeroSection from "./Home/Hero";
import FooterSection from "../components/footer";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import CardReview from "../components/Home/Reviews/CardReview";
import OurServices from "../components/Home/OurServices";
import AboutUs from "../components/Home/AboutUs";
import Booking from "../components/Home/Booking";
import Reviews from "../components/Home/Reviews";

export default function Layout({ children }) {
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
    <div className="flex flex-col h-screen">
      <Appbar />
      <main className="grow">{children}</main>
      <FooterSection />
    </div>
  );
}