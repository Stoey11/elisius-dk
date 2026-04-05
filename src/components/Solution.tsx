"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

const benefits = [
  "Ét dashboard med alt det vigtige — live",
  "Marketing-spend og ROI samlet ét sted",
  "Workflows der kører uden du tænker over det",
  "Hold øje med konkurrenterne i realtid",
  "Mindre brandslukning, mere strategi",
];

export default function Solution() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Hvad hvis du havde{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              det hele samlet?
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Vi bygger et system der passer til din forretning — ikke omvendt.
            Du får live data, automatiserede workflows og ét sted at gå hen.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <StaggerItem key={b}>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 sm:px-5 py-3 sm:py-4 text-left hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">{b}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
