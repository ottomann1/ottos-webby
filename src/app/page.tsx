import {Main, CtaButton} from './_components'


export default function Home() {
  const buttonprops = { buttonText: "Click me" };
  return (
    <Main>
      <div className="p-8 w-full bg-content-light dark:bg-content-dark text-text-light dark:text-text-dark rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Here is the content of the page</h1>
        <p>
          This is the main content area. It is slightly wider than the hero
          section and provides ample space for your content.
        </p>
        <CtaButton />
      </div>
      </Main>
  );
}
