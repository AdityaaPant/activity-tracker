import { CarouselSize } from "./todo/page";
import { CalendarDemo } from "./calendar/page";
import { CardWithForm } from "./brief/page";
import { Component } from "./graph/page";
import { ScrollAreaDemo } from "./notes/page";
export default function Home() {
	return (
		<div>
			<CarouselSize />
			<div className="flex mx-32 my-20  ">
				<CalendarDemo />
				<CardWithForm />
			</div>
			<Component />
			<div className="flex mx-24 my-20 ">
				<CardWithForm />
				<div className="ml-10 mx-0 ">
					<CalendarDemo />
				</div>
			</div>
			<div className="flex mx-28 my-20">
				<div className="mr-7 ">
					<ScrollAreaDemo />
				</div>

				<CardWithForm />
			</div>
			<CarouselSize />
		</div>
	);
}
