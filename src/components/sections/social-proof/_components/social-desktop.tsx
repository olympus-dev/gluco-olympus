import { Container } from "@/components/container";
import { Testimonial } from "./testimonial-card";
import { testimonials } from "./testimonial-data";

export function SocialDesktop() {
  return (
    <Container className="hidden lg:flex text-gray-950 h-[22vw] min-h-[400px] relative mt-28">
      <div className="absolute h-full w-[80vw] -translate-x-1/2 left-1/2 flex justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            author={testimonial.author}
            image={testimonial.image}
            location={testimonial.location}
            quote={testimonial.quote}
            rating={testimonial.rating}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}
