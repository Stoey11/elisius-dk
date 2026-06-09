"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 sm:pt-24 pb-12 sm:pb-20">
      {/* Soft gradient wash behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/4 -translate-y-1/4 rounded-full bg-gradient-to-b from-indigo-100/70 via-violet-50/50 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Data, dashboards & automatisering
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Dine data samlet.
              <br />
              Dine beslutninger{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                skarpere.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Vi bygger dashboards og automatiseringer, så du altid ved hvad der
              virker — og kan handle på det med det samme.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Book en gratis sparring
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#how"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/70 px-7 py-3.5 text-base font-semibold text-gray-700 backdrop-blur hover:bg-white hover:border-gray-300 active:scale-[0.98] transition-all duration-200"
              >
                Se hvordan det virker
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Omsætning og marketing i realtid
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automatisér det manuelle
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Beslutninger baseret på data
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right: 3D visualisation */}
        <FadeIn delay={0.15} direction="none" className="order-first lg:order-none">
          <Hero3D className="pointer-events-none mx-auto h-[320px] w-full max-w-[520px] sm:h-[420px] lg:h-[520px]" />
        </FadeIn>
      </div>
    </section>
  );
}
