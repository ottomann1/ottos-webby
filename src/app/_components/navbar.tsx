"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { CtaButton } from "./";
import { Switch } from "@nextui-org/switch";
import { Divider } from "@nextui-org/divider";
import { usePathname } from "next/navigation";

export function MyNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-b from-content to-foreground shadow-lg"
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
            <Link className="text-text hover:text-primary" href="/">
              Home
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-6 bg-primary" />
          <NavbarItem isActive={isActive("/design-system")}>
            <Link
              className="text-white hover:text-primary"
              href="/design-system"
            >
              Design System
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
