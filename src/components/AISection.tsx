"use client";

import FadeIn from "./FadeIn";

export default function AISection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Dine konkurrenter bruger{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              allerede AI
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            LLM-modeller udvikler sig hver måned. Det betyder at vi kan automatisere
            ting i dag, som var umulige for et år siden — fra dataanalyse til
            kundeservice til rapportering. Spørgsmålet er ikke om, men hvornår.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
