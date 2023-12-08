/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Group } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

export default function DateSection() {
	const [selected, setSelected] = useState<Date[]>([]);
	const handleSelect = (date: Date) => {
		const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
		if (isSelected) {
			setSelected((current) =>
				current.filter((d) => !dayjs(d).isSame(date, "date"))
			);
		} else if (selected.length < 3) {
			setSelected((current) => [...current, date]);
		}
	};
	return (
		<div>
			<h6 className="mb-6 mt-0">Available dates</h6>
			<Group position="center">
				<Calendar
					style={{ width: 348, paddingRight: 40 }}
					level="month"
					defaultLevel="month"
					size="md"
					firstDayOfWeek={0}
					className="border-solid shadow-md border-[0.1px] border-[#eeeeee] px-5 py-5"
					weekendDays={[]}
					styles={(theme) => ({
						day: {
							color: "#495057",
						},
						weekday: {
							color: "#adb5bd",
						},
						calendarHeaderLevel: {
							fontWeight: 600,
						},
						weekdays: {
							backgroundColor: theme.colors.secondary[0],
						},
					})}
					getDayProps={(date) => ({
						selected: selected.some((s) => dayjs(date).isSame(s, "date")),
						onClick: () => handleSelect(date),
					})}
				/>
			</Group>
		</div>
	);
}
