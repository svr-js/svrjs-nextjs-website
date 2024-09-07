import React from "react";
import TestimonialCard from "../cards/testimonialCard";

const testimonials = [
  {
    name: "iCodeForBeer",
    role: "Builds Millionaire Startup",
    avatar: "icodeforbeer",
    testimonial:
      "As a product enthusiast, I must say SVR.JS is impressive! The versatility across platforms like Android, FreeBSD, and Windows is remarkable. The various installation options, including the streamlined installer and Docker support, make it incredibly accessible. The detailed documentation and built-in tools for log management and user management are great touches. Overall, it's a robust and flexible solution for web server needs!"
  },
  {
    name: "Antoine C.",
    role: "Full-stack engineer",
    avatar: "acrosett",
    testimonial: "My pleasure, SVR.js is an awesome project! 🔥🚀"
  }
];

const Testimonials = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col pt-12 md:pt-24">
      <div className="flex flex-row items-center justify-center space-x-1">
        <span className="text-white/50 text-xs lg:text-base">Testimonials</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Hear it from{" "}
        <span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
          our users
        </span>
      </h1>

      <ul className="wrapper columns-1 gap-5 md:columns-2 lg:columns-3 py-6 mt-6">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            avatar={testimonial.avatar}
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
            rating={0} /*{testimonial.rating}*/
            key={idx}
          />
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
