import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function SocialDesktop() {
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
        <p className="text-base leading-relaxed">
          I used to feel uneasy about my performance in the bedroom. Anxiety was
          a barrier for me. However, everything changed when I discovered
          Endoterec.
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
        <p className="text-base leading-relaxed">
          <b>
            Before discovering Endoterec, I believed that my peak performance
            days were behind me
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
        <p className="text-base leading-relaxed">
          <b>
            I hold a challenging position in the financial sector, and unwinding
            after work used to be a lengthy process before I could excel in the
            bedroom. Thanks to Endoterec, that time has been virtually
            eliminated.
          </b>
          Ever since <b>incorporating a daily capsule</b> into my morning coffee
          routine,
          <b>achieving fully firm erections within seconds</b> has never been an
          issue. Now,{" "}
          <b>I can match the energy of my youthful wife in the bedroom</b>.
          Needless to say,{" "}
          <b>this transformation has brought immense joy to both of us</b>.
        </p>
      ),
      author: "James Richards",
      location: "Wyoming, USA",
      image: "proof2.jpg",
      rating: 5,
    },
  ];
  
  return (
    <div className="hidden lg:flex">
        {/* <SocialProofCarousel /> */}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
            <div className="p-1">
              <Card className="bg-white rounded-3xl">
                <CardContent className="p-6">
                  <blockquote
                    className="space-y-4 min-h-[435px] flex flex-col justify-between"
                  >
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
          </div>
        ))}
      </div>
  );
}