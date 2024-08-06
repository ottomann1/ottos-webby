import type { Metadata } from "next";
import "./globals.css";
import { MyNavbar } from "./_components";

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
      <MyNavbar/>
      {children}
      </body>
    </html>
  );
}
