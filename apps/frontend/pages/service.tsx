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
import ServiceName from "../components/OMServices/SerNameSection";

export default function SectionVictor() {
	return (
		<main>
			<Container size="xl" className="lg:pt-32 pt-24 pb-12 ">
				<ServiceName />
				<Reviews />
				<CleaningTeam />
			</Container>
		</main>
	);
}