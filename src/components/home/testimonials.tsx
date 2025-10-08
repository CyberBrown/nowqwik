import { component$, useSignal, $ } from "@builder.io/qwik";

export const TestimonialsSection = component$(() => {
  const currentSlide = useSignal(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "Solamp made going solar so easy! Their team guided me through every step, and the educational resources helped me understand exactly what I needed. My energy bills have dropped by 70%!",
      product: "Complete Solar Kit",
    },
    {
      name: "Michael Chen",
      location: "Texas, USA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      text: "The rainwater harvesting system from Solamp has been a game-changer for our garden. The free course taught me everything I needed to know, and the installation was straightforward.",
      product: "Rainwater Harvesting System",
    },
    {
      name: "Kwame Mensah",
      location: "Accra, Ghana",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
      rating: 5,
      text: "Solamp's portable power pack has transformed my family's life. We now have reliable electricity for lights, phone charging, and even a small refrigerator. Thank you, Solamp!",
      product: "Portable Power Pack",
    },
    {
      name: "Emily Rodriguez",
      location: "Florida, USA",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      rating: 5,
      text: "I love that Solamp is more than just a store. The learning hub has taught me so much about sustainable living, and knowing my purchase helps communities in Ghana makes it even better.",
      product: "Solar Battery System",
    },
    {
      name: "David Osei",
      location: "Kumasi, Ghana",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      text: "As a small business owner, reliable power was always a challenge. Solamp's microgrid solution has given us consistent electricity, allowing us to grow our business and serve our community better.",
      product: "Business Solar Solution",
    },
  ];

  const nextSlide = $(() => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length;
  });

  const prevSlide = $(() => {
    currentSlide.value =
      (currentSlide.value - 1 + testimonials.length) % testimonials.length;
  });

  const goToSlide = $((index: number) => {
    currentSlide.value = index;
  });

  return (
    <section class="py-20 bg-gradient-to-br from-warm-sand to-white">
      <div class="container mx-auto px-4">
        {/* Section Header */}
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join Our Community of Changemakers
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from customers around the world who are making a difference
            with sustainable living solutions.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div class="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div class="flex flex-col md:flex-row items-center gap-8">
              {/* Customer Image */}
              <div class="flex-shrink-0">
                <img
                  src={testimonials[currentSlide.value].image}
                  alt={testimonials[currentSlide.value].name}
                  class="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              </div>

              {/* Testimonial Content */}
              <div class="flex-1 text-center md:text-left">
                {/* Stars */}
                <div class="flex justify-center md:justify-start mb-4">
                  {Array.from({
                    length: testimonials[currentSlide.value].rating,
                  }).map((_, i) => (
                    <svg
                      key={i}
                      class="w-6 h-6 text-sunshine-yellow fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote class="text-lg md:text-xl text-foreground mb-6 italic">
                  "{testimonials[currentSlide.value].text}"
                </blockquote>

                {/* Customer Info */}
                <div class="mb-2">
                  <div class="font-semibold text-lg">
                    {testimonials[currentSlide.value].name}
                  </div>
                  <div class="text-muted-foreground text-sm">
                    {testimonials[currentSlide.value].location}
                  </div>
                </div>

                {/* Product Badge */}
                <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentSlide.value].product}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick$={prevSlide}
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick$={nextSlide}
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              class="w-6 h-6"
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
          </button>

          {/* Dots Navigation */}
          <div class="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick$={() => goToSlide(index)}
                class={`w-3 h-3 rounded-full transition-all ${
                  currentSlide.value === index
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos Section */}
        <div class="mt-16 text-center">
          <p class="text-sm text-muted-foreground mb-8 uppercase tracking-wide font-semibold">
            Trusted by Leading Organizations
          </p>
          <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder for partner logos */}
            <div class="text-2xl font-bold text-gray-400">Partner Logo</div>
            <div class="text-2xl font-bold text-gray-400">Partner Logo</div>
            <div class="text-2xl font-bold text-gray-400">Partner Logo</div>
            <div class="text-2xl font-bold text-gray-400">Partner Logo</div>
          </div>
        </div>
      </div>
    </section>
  );
});