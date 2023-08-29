import React from "react";
import { Slider, RangeSlider } from "@mantine/core";

interface CleanlinessProps {
  subtitle: string;
  qualification: string;
}

function Cleanliness({ subtitle, qualification }: CleanlinessProps) {
  return (
    <div className="flex justify-start md:justify-between items-center gap-4 md:gap-0">
      <p className="text-xs">{subtitle}</p>
      <div className="flex items-center gap-4">
        <Slider
          defaultValue={45}
          color="secondary.0"
          disabled
          size={3}
          className="w-52"
          styles={(theme) => ({
            bar: {
              backgroundColor: theme.colors.secondary[0],
            },
          })}
        />
        <p className="text-xs font-bold">{qualification}</p>
      </div>
    </div>
  );
}

export default Cleanliness;
