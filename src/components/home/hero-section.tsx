import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";

export const HeroSection = component$(() => {
  return (
    <section class="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Solar panels and sustainable living"
          class="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div class="container mx-auto px-4 relative z-20">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Main Message */}
          <div class="text-white">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Live Sustainably.
              <br />
              <span class="text-primary">Empower Your World.</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-200">
              From solar energy for your home to sustainable living solutions
              for communities worldwide.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                look="primary"
                size="lg"
                class="bg-primary hover:bg-primary-hover text-white font-semibold"
              >
                Shop Sustainable Products
              </Button>
              <Button
                look="outline"
                size="lg"
                class="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold"
              >
                Explore Our Mission
              </Button>
            </div>
          </div>

          {/* Right Side - Split Screen Effect */}
          <div class="hidden md:grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80"
                  alt="Modern home with solar panels"
                  class="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 class="text-white font-semibold text-lg">USA Solutions</h3>
                <p class="text-gray-300 text-sm">
                  Solar panels, batteries, and sustainable home products
                </p>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                  alt="Community in Ghana"
                  class="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 class="text-white font-semibold text-lg">Ghana Impact</h3>
                <p class="text-gray-300 text-sm">
                  Empowering communities with reliable, sustainable power
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="animate-bounce">
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
});