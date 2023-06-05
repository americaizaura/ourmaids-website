import React, { useState } from "react";
import {
  Button,
  Textarea,
  Container,
  Accordion,
  useMantineTheme,
  rem,
  Input,
} from "@mantine/core";
import Image from "next/image";
import { DatePicker, DatePickerInput, TimeInput } from "@mantine/dates";
export default function RescheduleView() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className="lg:mt-16  h-full">
      <Container size="xl">
        <h2>Reschedule</h2>ss
        <div className="rounded-md bg-primary">
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
        </div>
      </Container>
    </div>
  );
}
