import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { CtaButton } from "./cta-button";

export function MyNavbar(){
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
      <Link href="/">
        <p className="font-bold text-inherit">Home</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/design-system">
            Design System
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
        <CtaButton/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
