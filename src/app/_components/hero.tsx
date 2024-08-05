import React from "react";
import { DarkModeSwitch } from "./dark-mode-switch/dark-mode-switch";

export function Hero() {
  return (
    <div className="flex justify-center items-center">
    <section className="max-w-3xl justify-center bg-white items-center flex text-black py-16">
      <div className="mx-auto text-center px-4">
        <DarkModeSwitch />
        <h1 className="text-4xl font-bold mb-4">Hello, Welcome to Otto's Website!</h1>
        <p className="text-lg">
          Here you can find everything about me, my projects, and my passion
          for technology. Feel free to explore and learn more about what I do.
        </p>
      </div>
    </section>
    </div>
  );
}
