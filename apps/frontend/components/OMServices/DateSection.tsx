import React from "react";
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';


export default function DateSection(){
    return(
        <aside>
            <h6 className="mb-6">Available dates</h6>
            <Calendar
                style={{ width: 348, paddingRight: 40  }}
                level="month"
                defaultLevel="month"
                size="md"
                firstDayOfWeek={0}
                className="border-solid shadow-md border-[0.1px] border-[#eeeeee] px-5 py-5"
                weekendDays={[]}
                styles={(theme)=> ({
                    day:{
                        color: "#495057",
                    },
                    weekday:{
                        color: "#adb5bd"
                    },
                    pickerControl:{
                        color: "#495057",
                        fontWeight: 700,
                    }
                })}
            />
        </aside>
    );
}