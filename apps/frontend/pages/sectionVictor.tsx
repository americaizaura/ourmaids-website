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
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import Reviews from "../components/OMServices/ReviewSection";


export default function SectionVictor() {
  return (
    <Reviews/>
  );
}