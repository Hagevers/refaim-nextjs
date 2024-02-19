import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { data_gallery } from "./data_gallery";

export function Gallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="w-full ltr"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {data_gallery.map((img, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full">
                <CardContent className="flex items-center flex-grow aspect-square justify-center p-6">
                  {img.image}
                </CardContent>
              </Card>
              {/* <div className="md:hidden h-full flex items-center flex-grow aspect-square justify-center p-6">
                {img.image}
              </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
