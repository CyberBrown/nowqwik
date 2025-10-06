import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});