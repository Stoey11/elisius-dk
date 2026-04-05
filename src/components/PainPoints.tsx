"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

const pains = [
  "Omsætning, marketing og drift lever i hver sit system",
  "Rapporter tager timer at lave — og er forældede samme dag",
  "Ingen ved præcis hvilke kanaler der faktisk performer",
  "Kritisk viden sidder hos enkeltpersoner, ikke i systemet",
  "Ledelsen træffer beslutninger på mavefornemmelse",
];

export default function PainPoints() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Kender du det her?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            De fleste virksomheder vi møder har de samme udfordringer.
            Ikke fordi de gør noget forkert — men fordi systemerne ikke
            taler sammen.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {pains.map((pain) => (
            <StaggerItem key={pain}>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 sm:px-5 py-3 sm:py-4 text-left hover:border-red-200 hover:shadow-sm transition-all duration-200">
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-500">
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">{pain}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
