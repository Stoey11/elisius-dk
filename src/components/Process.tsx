"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

const steps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    step: "UGE 1",
    title: "Vi graver ned i din forretning",
    description: "Vi sætter os ind i jeres data, systemer og daglige arbejdsgange. Hvad tager tid? Hvor mangler I overblik?",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    step: "UGE 2–4",
    title: "Vi bygger den første version",
    description: "Du får et fungerende dashboard med live data. Vi starter med det vigtigste og bygger videre derfra.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    step: "L\u00D8BENDE",
    title: "Vi justerer og udvider",
    description: "Nye features, nye datapunkter, nye automatiseringer. Systemet vokser med din forretning.",
  },
];

export default function Process() {
  return (
    <section id="how" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Fra idé til live system{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              på få uger
            </span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="flex flex-col items-center text-center group">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 group-hover:shadow-indigo-600/40 group-hover:scale-105 transition-all duration-200">
                  {s.icon}
                </div>
                <span className="mt-5 text-xs font-bold tracking-widest text-indigo-600">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg sm:text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xs">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
