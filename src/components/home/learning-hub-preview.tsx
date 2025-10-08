import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Card } from "~/components/ui/card/card";

export const LearningHubPreview = component$(() => {
  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      title: "Beginner's Guide: Sizing Your First Solar System",
      excerpt:
        "Learn how to calculate the perfect solar system size for your home's energy needs.",
      category: "Solar Energy",
      readTime: "8 min read",
      link: "/learning-hub/solar-sizing-guide",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
      title: "Free Course: Introduction to Rainwater Harvesting",
      excerpt:
        "Master the basics of collecting and storing rainwater for your home and garden.",
      category: "Water Conservation",
      readTime: "Course",
      link: "/learning-hub/rainwater-harvesting-course",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=600&q=80",
      title: "5 Easy Ways to Start Composting Today",
      excerpt:
        "Transform your kitchen waste into nutrient-rich soil with these simple composting methods.",
      category: "Sustainable Living",
      readTime: "5 min read",
      link: "/learning-hub/composting-guide",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      title: "Off-Grid Living: Essential Equipment Checklist",
      excerpt:
        "Everything you need to know about going off-grid, from solar to water systems.",
      category: "Off-Grid",
      readTime: "12 min read",
      link: "/learning-hub/off-grid-checklist",
    },
  ];

  return (
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        {/* Section Header */}
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Knowledge is Power
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and master the skills you need for
            sustainable living. Free courses, guides, and calculators to help
            you succeed.
          </p>
        </div>

        {/* Featured Expert Banner */}
        <div class="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 mb-12 text-white">
          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <div class="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  class="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl font-bold mb-2">
                Learn from Christopher LaForge
              </h3>
              <p class="text-white/90 mb-4">
                Master Trainer & Curriculum Director | IREC 'Trainer of the
                Year' Award Recipient | 30+ Years of Experience
              </p>
              <Link
                href="/learning-hub#expert"
                class="inline-flex items-center text-white font-semibold hover:underline"
              >
                Meet Our Expert
                <svg
                  class="w-4 h-4 ml-2"
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
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, index) => (
            <Link key={index} href={article.link} class="group">
              <Card.Root class="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <Card.Content class="p-6">
                  <h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p class="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div class="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span class="text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Card.Content>
              </Card.Root>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div class="text-center">
          <Link
            href="/learning-hub"
            class="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Explore the Learning Hub
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