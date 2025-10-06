import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        <Slot />
      </main>
    </div>
  );
});