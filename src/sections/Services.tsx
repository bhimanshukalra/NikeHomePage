import React from "react";
import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((serviceItem) => (
        <ServiceCard key={serviceItem.label} {...serviceItem} />
      ))}
    </section>
  );
};

export default Services;
