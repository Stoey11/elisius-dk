"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 px-6">
      <FadeIn>
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-500 px-6 sm:px-16 py-12 sm:py-16 text-center shadow-2xl shadow-indigo-600/20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Klar til at se hvad der er muligt?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-indigo-100/90">
            30 minutters uforpligtende snak. Vi kigger på din forretning
            og viser dig hvad vi kan gøre.
          </p>
          <Link
            href="/book"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-bold text-indigo-700 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] shadow-lg transition-all duration-200"
          >
            Book en gratis sparring
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
