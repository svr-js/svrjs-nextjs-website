import React from "react";
import { TERMS_AND_CONDITIONS } from "@/constants";

const TermsOfService = () => {
  const renderContent = () => {
    return TERMS_AND_CONDITIONS.split("\n").map((line, index) => {
      if (line.startsWith("**")) {
        return (
          <h3 key={index} className="text-lg lowercase italic mb-4">
            {line.replace(/\*\*/g, "")}
          </h3>
        );
      } else if (line.startsWith("*")) {
        return (
          <li key={index} className="list-disc list-inside mb-2">
            {line.replace(/\*/g, "")}
          </li>
        );
      } else if (/^\d+\./.test(line)) {
        return (
          <h4 key={index} className="text-lg font-semibold mb-2">
            {line}
          </h4>
        );
      } else {
        return (
          <p key={index} className="mb-4">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <section
      id="tos"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h2 className="text-3xl font-bold italic underline mb-6">
        Terms of Service
      </h2>
      <div className="prose prose-lg">{renderContent()}</div>
    </section>
  );
};

export default TermsOfService;
