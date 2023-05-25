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
export default function BookingView() {
  const [value, setValue] = useState<Date | null>(null);
  console.log(value);

  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full img-booking">
        <Image
          src="/images/booking/step 2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="0 600"
        />
      </div>
      <Container size="xl" className="lg:pt-32 pt-24 pb-12 ">
        <div className="grid grid-cols-12 ">
          <h2 className="col-start-4 col-end-13">Booking</h2>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-start-4 col-end-8">
            <DatePickerInput
              label="Pick date"
              placeholder="Pick date"
              value={value}
              onChange={setValue}
              mx="auto"
              clearable
            />
            <div className="rounded-md bg-onPrimary shadow-md ">
              <DatePicker
                mx="auto"
                className="w-full"
                styles={(theme) => ({
                  day: {
                    "&:focus": {
                      backgroundColor: theme.colors.secondary[0],
                      color: theme.colors.onPrimary[0],
                    },
                  },
                })}
              />
            </div>
            <div>
              <h6>Lorem ipsum dolor sit amet consectetur.</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
                elementum praesent. Fames tellus massa tempus lectus vestibulum
                elementum amet amet metus.
              </p>
            </div>
            <TimeInput maw={400} mx="auto" />;
          </div>
          <div className="col-start-9 col-end-13">
            <h5 className="mt-0">Service </h5>
            <div className="bg-primary rounded-md p-8">
              <h6 className="mt-0">
                Lorem ipsum dolor sit amet consectetur. Id faucibus massa eu
              </h6>
              <h6>50.00 USD</h6>
              <p>1 hour</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
