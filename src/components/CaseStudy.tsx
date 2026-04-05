"use client";

import Image from "next/image";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

const before = [
  "Manuelle processer i hverdagen",
  "Ingen samlet overblik over forretningen",
  "Rapporter der tog timer at lave",
];

const after = [
  "Live data på tværs af hele virksomheden",
  "Marketing performance synligt med ét klik",
  "Automatiserede workflows og rapporter",
  "Beslutninger truffet på minutter, ikke dage",
];

export default function CaseStudy() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Sådan hjalp vi{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Damsgaard Caravan Center
              </span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              De havde data i fem forskellige systemer og brugte halve dage på rapportering.
              Vi samlede det hele i ét dashboard med live data.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <FadeIn direction="left">
            <div>
              <div>
                <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
                  Før
                </span>
                <StaggerContainer className="mt-3 space-y-3">
                  {before.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-500">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="mt-8">
                <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                  Efter
                </span>
                <StaggerContainer className="mt-3 space-y-3">
                  {after.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-emerald-200 text-emerald-600">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/victor.png"
                alt="Victor Elisius Støy"
                width={128}
                height={128}
                className="rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Victor</h3>
              <p className="text-sm text-gray-500">Grundlægger, Elisius</p>
              <a
                href="/cases"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:gap-2 transition-all duration-200"
              >
                Læs hele casen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
