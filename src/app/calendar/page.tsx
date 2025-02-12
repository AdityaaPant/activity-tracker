"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<div className="mr-10">
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border shadow w-fit min-w-32"
			/>
		</div>
	);
}
