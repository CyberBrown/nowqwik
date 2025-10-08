import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "~/components/home/hero-section";
import { WhatWeOfferSection } from "~/components/home/what-we-offer";
import { GhanaExpansionSection } from "~/components/home/ghana-expansion";
import { LearningHubPreview } from "~/components/home/learning-hub-preview";
import { TestimonialsSection } from "~/components/home/testimonials";

export default component$(() => {
  return (
    <>
      <HeroSection />
      <WhatWeOfferSection />
      <GhanaExpansionSection />
      <LearningHubPreview />
      <TestimonialsSection />
    </>
  );
});

export const head: DocumentHead = {
  title: "Solamp - Live Sustainably. Empower Your World.",
  meta: [
    {
      name: "description",
      content:
        "From solar energy for your home to sustainable living solutions for communities worldwide. Shop solar panels, batteries, water conservation systems, and more.",
    },
    {
      name: "keywords",
      content:
        "solar panels, sustainable living, solar energy, water conservation, Ghana, renewable energy, off-grid living",
    },
  ],
};