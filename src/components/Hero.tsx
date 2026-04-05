"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-white pt-16 sm:pt-20 pb-10 sm:pb-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Dine data samlet.
            <br />
            Dine beslutninger{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              skarpere.
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Vi bygger dashboards og automatiseringer, så du altid ved hvad der
            virker — og kan handle på det med det samme.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200"
            >
              Se hvordan det virker
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm text-gray-500">
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
    </section>
  );
}
