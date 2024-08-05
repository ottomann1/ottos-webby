import Image from "next/image";
import { CtaButton } from "./_components/cta-button";

export default function Home() {
  const buttonprops = {buttonText: "Click me"}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CtaButton />
    </main>
  );
}
