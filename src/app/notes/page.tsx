import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
	return (
		<ScrollArea className="h-72  rounded-md border ">
			<div className="p-4 min-w-36 ">
				<h4 className="mb-4 mr-24 text-m font-medium leading-none">Tags</h4>
				{tags.map((tag) => (
					<>
						<div key={tag} className="text-sm">
							{tag}
						</div>
						<Separator className="my-2" />
					</>
				))}
			</div>
		</ScrollArea>
	);
}
