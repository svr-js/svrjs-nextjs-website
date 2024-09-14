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
  },
  {
    name: "Julia",
    avatar: "julia",
    testimonial:
      "You can tell just by looking at the website how much work and passion was put into this project! I loved the detailed manual, it's very well-organized and easy to follow. The server is truly a playground with the amount of features it has and the possibilities it provides! I also appreciate just how easily you can get in touch with the creator, you can tell he is passionate and dedicated to helping users get the most out of his project. I can't wait to see how it develops further :)"
  }
];

const Testimonials = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col pt-12 md:pt-24">
      <div className="flex flex-row items-center justify-center space-x-1">
        <span className="text-white/50 text-xs lg:text-base">Testimonials</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Hear it from{" "}
        <span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
          our users
        </span>
      </h2>

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
