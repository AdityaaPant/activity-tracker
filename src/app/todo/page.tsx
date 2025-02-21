import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
	return (
		<div className="flex items-center justify-center">
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-fit mt-11 flex justify-center "
			>
				<CarouselContent>
					{Array.from({ length: 8 }).map((_, index) => (
						<CarouselItem key={index} className="basis-1/4">
							<div className="p-1 ">
								{/* text */}
								<Card>
									<CardContent className="flex aspect-square min-w-32  items-center justify-center p-6">
										<span className="text-3xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
