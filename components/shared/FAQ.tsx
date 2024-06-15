import { questions } from "@/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  return (
    <section id="faq" className="wrapper container py-24 md:py-28">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Frequently Asked Question
      </h2>
      <p className="textlg text-muted-foreground text-start mt-4 mb-8">
        Find answers to common questions about SVRJS
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
