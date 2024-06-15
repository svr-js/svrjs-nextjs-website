"use client";

import { useState } from "react";

const Newsletter = () => {
  const [submission, setSubmission] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    console.log("Done");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 md:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Join The Newsletter!
        </h3>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
          Choosing the right website deployment option is important when
          creating a website, because it directly impacts the user experience
          and the resources required to run your website. Website deployment is
          a process of publishing a website into a production hosting
          environment
        </p>
        <form
          className="relative flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        ></form>
      </div>
    </section>
  );
};

export default Newsletter;
