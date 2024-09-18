import { Features } from "@/constants";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const FeaturesSection = () => {
  return (
    <section className="container text-center py-12 sm:py-24">
      <h2 className="text-3xl md:text-5xl font-bold">
        Accelerate your{" "}
        <span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
          development
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg md:text-xl text-muted-foreground">
        Build secure and scalable web applications with SVR.JS. Open-source,
        configurable, and designed to handle high request loads.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
