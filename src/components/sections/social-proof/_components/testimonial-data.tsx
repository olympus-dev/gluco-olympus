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
        I am extremely happy with the results! My blood sugar levels are stable,
        and my energy has increased. This product is exceptional and combines
        all the benefits I was looking for in plants, vitamins, and minerals.
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
        I am impressed with this product! It works just as well as a blood sugar
        support supplement I used for years, but at a much lower cost. Thank you
        for offering a high-quality solution at a more affordable price.
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
        In just three months, Gluco Guardian has delivered amazing results! My
        blood sugar is significantly lower, and the value is outstanding. It
        outperforms even pricier, less effective products. I highly recommend
        it!
      </p>
    ),
    author: "Sarah Smith",
    location: "Wyoming, USA",
    image: "/proof2.jpg",
    rating: 5,
  },
];
