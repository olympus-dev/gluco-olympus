export interface ITestimonial {
  quote: React.ReactNode;
  author: string;
  location: string;
  image: string;
  rating: number;
}

export const testimonials: ITestimonial[] = [
  {
    quote: (
      <p className="text-base leading-relaxed">
        I felt anxious about my performance, but Endoterec changed everything.
        It improved my endurance, gave me consistent erections, and boosted my
        confidence. Now, my romantic life has completely transformed!
      </p>
    ),
    author: "Charlie Williams",
    location: "Chicago, USA",
    image: "/proof3.jpg",
    rating: 5,
  },
  {
    quote: (
      <p className="text-base leading-relaxed">
        Endoterec eliminated the struggle of unwinding after work. A daily
        capsule in my coffee gave me instant firm erections and helped me
        match my wife’s energy in the bedroom. This transformation has brought
        us immense joy.
      </p>
    ),
    author: "Tom Stevenson",
    location: "New York, USA",
    image: "/proof1.jpg",
    rating: 5,
  },
  {
    quote: (
      <p className="text-base leading-relaxed">
        Balancing work and intimacy was tough, but Endoterec changed that. A
        daily capsule helped me achieve firm erections instantly, and now I
        match my wife’s energy. Our relationship has never been better!
      </p>
    ),
    author: "James Richards",
    location: "Wyoming, USA",
    image: "/proof2.jpg",
    rating: 5,
  },
];