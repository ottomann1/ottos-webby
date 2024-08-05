"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { CtaButton } from "./cta-button"; // Assuming this is your custom button component
import { Switch } from "@nextui-org/switch"; // Assuming you want a theme switch or similar
import { Divider } from "@nextui-org/divider";
import { usePathname } from "next/navigation";

export function MyNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-lg"
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
      <div className="max-w-5xl flex items-center space-x-4 mx-auto justify-start">
        <NavbarContent className="flex items-center space-x-4">
        <NavbarItem isActive={isActive("/")}>
          <Link className="text-white hover:text-yellow-300" href="/">
          Home
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-6 bg-gray-600" />
          <NavbarItem isActive={isActive("/design-system")}>
            <Link className="text-white hover:text-yellow-300" href="/design-system">
              Design System
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-6 bg-gray-600" />
        <NavbarContent justify="end" className="flex items-center gap-4">
          <NavbarItem>
            <CtaButton />
          </NavbarItem>

        </NavbarContent>
          </NavbarContent>
      </div>
    </Navbar>
  );
}
