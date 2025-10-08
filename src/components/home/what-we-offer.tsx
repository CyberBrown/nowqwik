import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  SunIcon,
  WaterDropIcon,
  HouseLeafIcon,
  GlobeIcon,
} from "~/components/icons/category-icons";

export const WhatWeOfferSection = component$(() => {
  const categories = [
    {
      icon: SunIcon,
      title: "Energy Independence",
      description:
        "Solar panels, batteries, inverters, and complete kits for your home.",
      link: "/shop/energy",
      color: "text-sunshine-yellow",
    },
    {
      icon: WaterDropIcon,
      title: "Water Conservation",
      description:
        "Rainwater harvesting, water filters, and efficient irrigation systems.",
      link: "/shop/water",
      color: "text-primary",
    },
    {
      icon: HouseLeafIcon,
      title: "Sustainable Home",
      description:
        "Composting, non-toxic home goods, and energy-efficient appliances.",
      link: "/shop/home",
      color: "text-secondary",
    },
    {
      icon: GlobeIcon,
      title: "Global & Community Projects",
      description:
        "Learn about our work in Ghana and how you can support it.",
      link: "/mission#ghana",
      color: "text-earth-brown",
    },
  ];

  return (
    <section class="py-20 bg-warm-sand">
      <div class="container mx-auto px-4">
        {/* Section Header */}
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions for a Better Planet
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of sustainable living solutions
            designed for homes and communities worldwide.
          </p>
        </div>

        {/* Categories Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              class="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  class={`w-20 h-20 mb-6 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon class="w-full h-full" />
                </div>

                {/* Title */}
                <h3 class="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p class="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Learn More Link */}
                <div class="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <svg
                    class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div class="text-center mt-12">
          <Link
            href="/shop"
            class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Browse All Products
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});