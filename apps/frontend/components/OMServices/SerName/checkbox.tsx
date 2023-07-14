import React from "react";
import { Checkbox } from "tabler-icons-react";

interface CheckBoxProps {
    list: string;
}

function CheckBox(props: CheckBoxProps) {
    return (
        <div className="flex items-start gap-2 md:gap-6 mb-7">
            <Checkbox className="stroke-secondary" size={20} stroke-width={1.8}></Checkbox>
            <label className="text-xs text-justify tracking-wide font-medium leading-5 md:w-96">{props.list}</label>
        </div>
    );
}

export default CheckBox;