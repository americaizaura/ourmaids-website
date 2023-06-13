import React from "react";
import {
  Button,
  Textarea,
  Container,
  Accordion,
  useMantineTheme,
  rem,
  Stepper,
  StepperProps,
} from "@mantine/core";
import { useState } from "react";

import { Group } from "@mantine/core";
import Image from "next/image";
import Reviews from "../components/OMServices/ReviewSection";
import CleaningTeam from "../components/OMServices/CleaningSection";


export default function SectionVictor() {
  return (
    <main className="my-24 mx-24">
      <Reviews/>
      <CleaningTeam/>
    </main>
  );
}