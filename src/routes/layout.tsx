import { component$ } from "@builder.io/qwik";
import { Navbar } from "flowbite-qwik";
import { Link } from "@builder.io/qwik-city";
import { DarkModeToggle } from "flowbite-qwik";

export default component$(() => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">
        <img
          src="https://via.placeholder.com/32"
          alt="Flowbite qwik logo"
          width="32"
          height="32"
          class="h-8 w-auto"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite Qwik
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link tag={Link} href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        <DarkModeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
});
