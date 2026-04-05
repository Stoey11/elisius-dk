"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

const models = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Fast projekt",
    description:
      "Vi aftaler scope og pris fra start. Du ved præcis hvad du får, hvad det koster, og hvornår det er klar.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Løbende samarbejde",
    description:
      "Vi starter med det vigtigste og bygger videre måned for måned. Fleksibelt, og du kan stoppe når som helst.",
  },
];

export default function PricingModel() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ingen lange kontrakter.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Bare resultater.
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Hvert projekt er unikt. Vi finder den model der giver mening for dig.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {models.map((m) => (
            <StaggerItem key={m.title}>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 text-left hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/5 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25">
                  {m.icon}
                </div>
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">{m.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
