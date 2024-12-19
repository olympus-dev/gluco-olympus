import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ITestimonial } from "./testimonial-data";

export function Testimonial({ author, image, location, quote, rating }: ITestimonial) {
  return (
    <Card className="max-h-[400px] pt-2 mt-4 bg-background rounded-2xl w-full h-full relative 
    lg:max-w-[445px] lg:min-w-[415px] lg:mt-0 lg:pt-0">
      <CardContent className="h-full flex flex-col justify-between">
        <img
          src="/quotes.svg"
          alt="Quote Ornament"
          className="absolute top-[130px] left-[50px]"
        />
        {/* Author Image */}
        <img
          src={image}
          alt="Testimonial person profile photo"
          className="h-20 rounded-full absolute left-1/2 -translate-x-1/2 
          lg:-top-16 lg:h-32"
        />

        {/* Author info */}
        <div className="pt-24 flex flex-col items-center">
          <p className="font-bold">{author}</p>
          <p className="text-[#404a58]">{location}</p>
        </div>

        {/* Quote */}
        <p className="pt-8 px-4 text-center">{quote}</p>

        {/* Rating */}
        <div className="flex mx-auto justify-center pt-2
        lg:pt-0">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}