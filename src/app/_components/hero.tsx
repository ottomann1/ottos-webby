import React from "react";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Hello, Welcome to Otto's Website!</h1>
        <p className="text-lg">
          Here you can find everything about me, my projects, and my passion
          for technology. Feel free to explore and learn more about what I do.
        </p>
      </div>
    </section>
  );
}
