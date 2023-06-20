import React from "react";
import { NativeSelect } from '@mantine/core';
import { ChevronDown } from "tabler-icons-react";

interface InputSectionProps {
    description: string;
}

function InputSection(props: InputSectionProps) {
    return (
        <NativeSelect
            rightSection={<ChevronDown size="20" stroke-width={2} className="mr-5"/>}
            data={[props.description]}
            className="w-[308px] "
            size="md"
            radius="lg"
            styles={(theme) => ({
                input:{ 
                    backgroundColor: "#fff8f6",
                    color: "#909296",
                    fontWeight: 600,
                    fontSize: "14px",
                    border: "#fff8f6",
                    padding: "0 24px",
                },
                wrapper: {
                    color: "#909296",
                },
            })}
        />
    );
}

export default InputSection;