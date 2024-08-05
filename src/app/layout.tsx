import type { Metadata } from "next";
import "./globals.css";
import { MyNavbar } from "./_components/navbar";
import { Hero } from "./_components/hero";

export const metadata: Metadata = {
  title: "Otto Kostmann",
  description: "Otto Kostmanns website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Hero/>
      <MyNavbar/>
      {children}
      </body>
    </html>
  );
}
