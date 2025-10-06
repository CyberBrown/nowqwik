import { component$ } from '@builder.io/qwik';
import { Navbar, TextInput } from 'flowbite-qwik';
import { Link } from '@builder.io/qwik-city';
import { LuSearch } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand tag={Link} href="/">
          <img
            src="https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/250x100/solamp_logo_tight_1716513374__10848.original.png"
            alt="Solamp Logo"
            width="150"
            height="50"
            class="h-auto w-auto"
          />
        </Navbar.Brand>
        <div class="flex md:order-2">
          <TextInput placeholder="Search..." icon={LuSearch} />
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/solar-panels">Solar Panels</Navbar.Link>
          <Navbar.Link href="/batteries">Batteries</Navbar.Link>
          <Navbar.Link href="/inverters">Inverters</Navbar.Link>
          <Navbar.Link href="/mounting-racking">Mounting & Racking</Navbar.Link>
          <Navbar.Link href="/balance-of-system">Balance of System</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
});