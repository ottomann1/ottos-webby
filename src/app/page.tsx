
import { CtaButton } from "./_components/cta-button";

export default function Home() {
  const buttonprops = { buttonText: "Click me" };
  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center bg-white shadow-lg">
      <div className="p-8 w-full">
        <h1 className="text-3xl font-bold mb-4">Here is the content of the page</h1>
        <p>
          This is the main content area. It is slightly wider than the hero
          section and provides ample space for your content.
        </p>
        <CtaButton />
      </div>
    </main>
  );
}
