"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Testimonial } from "./testimonial-card";
import { testimonials } from "./testimonial-data";

export default function SocialProofCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center py-4 lg:hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          
        }}
        setApi={setApi}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4"
            >
              <Testimonial
                author={testimonial.author}
                image={testimonial.image}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
                key={index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
