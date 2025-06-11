import React from "react";

export function Section({ text, href, children }) {
  return (
    <section id={href} className="py-24">
      <h2 className="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl">
        {text}
      </h2>
      {children}
    </section>
  );
}

export default Section;
