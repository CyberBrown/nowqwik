import { component$ } from '@builder.io/qwik';
import { Footer } from 'flowbite-qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <Footer container>
      <div class="w-full text-center">
        <div class="w-full justify-between sm:flex sm:items-center sm:text-left">
          <Footer.Brand
            tag={Link}
            href="/"
            src="https://cdn11.bigcommerce.com/s-yhdp96gt9k/images/stencil/250x100/solamp_logo_tight_1716513374__10848.original.png"
            alt="Solamp Logo"
            name="Solamp"
            width="150"
            height="50"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about-us">About Us</Footer.Link>
            <Footer.Link href="/contact-us">Contact Us</Footer.Link>
            <Footer.Link href="/terms-and-conditions">Terms & Conditions</Footer.Link>
            <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Solamp™" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
});