import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button/button";
import { cn } from "@qwik-ui/utils";

export const Header = component$(() => {
  const mobileMenuOpen = useSignal(false);
  const locationDropdownOpen = useSignal(false);

  const toggleMobileMenu = $(() => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  });

  const toggleLocationDropdown = $(() => {
    locationDropdownOpen.value = !locationDropdownOpen.value;
  });

  return (
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container mx-auto px-4">
        <div class="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" class="flex items-center space-x-2">
            <div class="flex items-center">
              <span class="text-2xl font-bold text-primary">Solamp</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              class="text-sm font-medium transition-colors hover:text-primary"
            >
              Shop
            </Link>
            <Link
              href="/mission"
              class="text-sm font-medium transition-colors hover:text-primary"
            >
              Our Mission
            </Link>
            <Link
              href="/learning-hub"
              class="text-sm font-medium transition-colors hover:text-primary"
            >
              Learning Hub
            </Link>
            <Link
              href="/developers"
              class="text-sm font-medium transition-colors hover:text-primary"
            >
              For Developers
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div class="hidden md:flex items-center space-x-4">
            {/* Location Selector */}
            <div class="relative">
              <button
                onClick$={toggleLocationDropdown}
                class="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>USA</span>
                <svg
                  class={cn(
                    "h-4 w-4 transition-transform",
                    locationDropdownOpen.value && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {locationDropdownOpen.value && (
                <div class="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="py-1">
                    <button class="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                      USA
                    </button>
                    <button class="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                      Ghana
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button class="text-foreground hover:text-primary transition-colors">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button class="text-foreground hover:text-primary transition-colors">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            {/* Account Button */}
            <Button look="outline" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            class="md:hidden text-foreground"
            onClick$={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen.value ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen.value && (
          <div class="md:hidden border-t py-4">
            <nav class="flex flex-col space-y-4">
              <Link
                href="/shop"
                class="text-sm font-medium transition-colors hover:text-primary"
              >
                Shop
              </Link>
              <Link
                href="/mission"
                class="text-sm font-medium transition-colors hover:text-primary"
              >
                Our Mission
              </Link>
              <Link
                href="/learning-hub"
                class="text-sm font-medium transition-colors hover:text-primary"
              >
                Learning Hub
              </Link>
              <Link
                href="/developers"
                class="text-sm font-medium transition-colors hover:text-primary"
              >
                For Developers
              </Link>
              <div class="pt-4 border-t">
                <Button look="outline" size="sm" class="w-full">
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});