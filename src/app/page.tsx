import { CarouselSize } from "./todo/page";
import { CalendarDemo } from "./calendar/page";
import { CardWithForm } from "./brief/page";
import { Component } from "./graph/page";
export default function Home() {
	return (
		<div>
			<CarouselSize />
			<div className="flex mx-32 my-20  ">
				<CalendarDemo />
				<CardWithForm />
			</div>
			<Component />
		</div>
	);
}
