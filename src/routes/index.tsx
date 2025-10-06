import { component$ } from '@builder.io/qwik';
import { Jumbotron, Button, Card } from 'flowbite-qwik';

const products = [
  {
    name: 'Off-Grid Kits',
    imgSrc: 'https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/1920w/carousel/85/1__91104.png?c=1',
    href: '/off-grid-kits',
  },
  {
    name: 'Off-Grid Solar Panels',
    imgSrc: 'https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/1920w/carousel/89/5__30673.png?c=1',
    href: '/off-grid-solar-panels',
  },
  {
    name: 'Off-Grid Charge Controllers',
    imgSrc: 'https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/1920w/carousel/86/2__69637.png?c=1',
    href: '/off-grid-charge-controllers',
  },
  {
    name: 'Hybrid Inverters',
    imgSrc: 'https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/1920w/carousel/87/3__61946.png?c=1',
    href: '/hybrid-inverters',
  },
];

export default component$(() => {
  return (
    <div>
      <Jumbotron
        class="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
        style="background-image: url('https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/1920w/carousel/85/1__91104.png?c=1')"
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Powering a Sustainable Future
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Your one-stop shop for solar panels, batteries, inverters, and all your renewable energy needs.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button color="light" href="/solar-power-systems">
              Shop Solar Systems
            </Button>
            <Button color="alternative" href="/contact-us">
              Get a Quote
            </Button>
          </div>
        </div>
      </Jumbotron>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 class="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white lg:mb-12 md:text-4xl">
            Featured Products
          </h2>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.name}
                imgSrc={product.imgSrc}
                imgAlt={product.name}
                href={product.href}
              >
                <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});