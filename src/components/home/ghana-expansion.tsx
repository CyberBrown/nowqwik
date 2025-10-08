import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";

export const GhanaExpansionSection = component$(() => {
  return (
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-hover text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div class="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              New Initiative
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Powering Progress in Ghana
            </h2>
            <p class="text-xl mb-8 text-gray-200 leading-relaxed">
              Solamp is bringing reliable, sustainable power to West Africa.
              From portable power packs for families to pioneering microgrid
              projects for communities, we're building a brighter future,
              together.
            </p>

            {/* Stats */}
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div class="text-3xl font-bold text-primary mb-1">500+</div>
                <div class="text-sm text-gray-300">Families Powered</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary mb-1">10</div>
                <div class="text-sm text-gray-300">Communities Served</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary mb-1">24/7</div>
                <div class="text-sm text-gray-300">Reliable Energy</div>
              </div>
            </div>

            {/* CTAs */}
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                look="primary"
                size="lg"
                class="bg-primary hover:bg-primary-hover text-white font-semibold"
              >
                Shop Ghana Products
              </Button>
              <Button
                look="outline"
                size="lg"
                class="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold"
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&q=80"
                  alt="Solar installation in Ghana"
                  class="w-full h-64 object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80"
                  alt="Community gathering"
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80"
                  alt="Children studying with solar light"
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=500&q=80"
                  alt="Solar panels in village"
                  class="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div class="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg
                class="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Our Impact</h3>
              <p class="text-gray-200">
                Every product sold helps fund our community projects in Ghana.
                When you choose Solamp, you're not just investing in your own
                sustainable future—you're helping to power progress across West
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});