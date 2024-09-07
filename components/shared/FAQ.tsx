import { questions } from "@/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";

const Faq = () => {
  return (
    <section id="faq" className="wrapper container py-24 md:py-28">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-2 md:pb-2 text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Frequently Asked Question
      </h2>
      <p className="text-lg text-muted-foreground text-start mt-4 md:mt-2 mb-8">
        Find answers to common questions about SVR.JS
      </p>
      <Accordion
        type="single"
        collapsible={true}
        className="w-full AccordionRoot"
      >
        {questions.map(({ question, answer, key }) => (
          <AccordionItem key={key} value={key} className="border-b">
            <AccordionTrigger className="text-left text-lg">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-[1rem] text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
