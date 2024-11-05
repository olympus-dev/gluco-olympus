"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import React from "react";

interface Testimonial {
  quote: React.ReactNode;
  author: string;
  location: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: (
      <p className="text-[15px] leading-relaxed">
        <b>
          Before discovering Endoterec, I believed that my peak performance days
          were behind me
        </b>
        .
        <br /> As a retired officer, maintaining fitness was paramount.
        <b>
          <br />
          However, age picked up, and sexual performance became a challenge.
          Luckily, I came across Endoterec just in time.
        </b>
        <br /> Currently,
        <b>
          I feel a rejuvenation, feeling like I’ve regained my prime! My wife
          and I now enjoy a fulfilling love life, reminiscent of our younger
          years.
        </b>
      </p>
    ),
    author: "Tom Stevenson",
    location: "New York, USA",
    image: "proof1.jpg",
    rating: 5,
  },
  {
    quote: (
      <p className="text-[15px] leading-relaxed">
        I used to feel uneasy about my performance in the bedroom. Anxiety was a
        barrier for me. However, everything changed when I discovered Endoterec.
        <br />
        <b>
          It completely revolutionized my experience—enhanced endurance,
          consistent erections, and an unprecedented boost in confidence.
        </b>
        <br />
        Endoterec has had a lasting impact on my romantic life!
      </p>
    ),
    author: "Charlie Williams",
    location: "Chicago, USA",
    image: "proof3.jpg",
    rating: 5,
  },
  {
    quote: (
      <p className="text-[15px] leading-relaxed">
        <b>I hold a challenging position in the financial sector, and unwinding
        after work used to be a lengthy process before I could excel in the
        bedroom. Thanks to Endoterec, that time has been virtually eliminated.</b>
        Ever since <b>incorporating a daily capsule</b> into my morning coffee routine,
        <b>achieving fully firm erections within seconds</b> has never been an issue.
        Now, <b>I can match the energy of my youthful wife in the bedroom</b>. Needless
        to say, <b>this transformation has brought immense joy to both of us</b>.
      </p>
    ),
    author: "James Richards",
    location: "Wyoming, USA",
    image: "proof2.jpg",
    rating: 5,
  },
  // Add more testimonials as needed
];

export default function Component() {
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
    <div className="flex flex-col items-center justify-center">
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
              <div className="p-1">
                <Card className="bg-white rounded-3xl">
                  <CardContent className="p-6">
                    <blockquote className="space-y-4 min-h-[475px] flex flex-col justify-between
                    lg:min-h-[300px]">
                      {testimonial.quote}
                      <footer className="flex items-center gap-3 pt-2">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-12 h-12 rounded-full object-center"
                          width={48}
                          height={48}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </div>
                          <div className="ml-auto flex gap-0.5 md:hidden pt-1">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                        <div className="ml-auto gap-0.5 hidden md:flex">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
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
