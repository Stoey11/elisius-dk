import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Elisius | Dashboards, Automatisering & AI-løsninger",
  description:
    "Vi bygger skræddersyede dashboards, automatiserer processer og skaber AI-løsninger der giver din virksomhed overblik og bedre beslutninger.",
};

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Dashboards",
    description: "Få et samlet overblik over hele din forretning i ét system.",
    bullets: [
      "Omsætning i realtid",
      "Marketing performance",
      "KPI'er samlet ét sted",
      "Klar visuel indsigt",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automatisering",
    description: "Fjern manuelle processer og spar tid i hverdagen.",
    bullets: [
      "Automatiser rapportering",
      "Eliminér gentagende opgaver",
      "Skab mere effektive workflows",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Marketing & performance overblik",
    description: "Se præcis hvad der virker – og hvad der ikke gør.",
    bullets: [
      "Overblik over spend og ROI",
      "Identificer bedste kanaler",
      "Tag beslutninger baseret på data",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Konkurrentanalyse",
    description: "Få indsigt i markedet i realtid.",
    bullets: [
      "Overvåg konkurrenter",
      "Track priser og kampagner",
      "Opdag muligheder før andre",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Skræddersyede AI-løsninger",
    description: "Vi bygger det, din forretning har brug for.",
    bullets: [
      "Integration med eksisterende systemer",
      "Browser-baserede løsninger",
      "Løbende udvikling og optimering",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gray-50 pt-20 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Services
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Hvad kan vi bygge for{" "}
              <span className="text-indigo-600">din forretning?</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
              Vi udvikler løsninger, der skaber overblik, sparer tid og forbedrer
              beslutningsgrundlaget i din virksomhed. Alt bliver skræddersyet til dine behov.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="bg-gray-50 pb-16">
          <div className="mx-auto max-w-3xl px-6 space-y-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{s.description}</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-200 text-indigo-600">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <section className="bg-gray-50 pb-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-lg text-gray-500">
              Mulighederne er næsten ubegrænsede – men fokus er altid det samme:
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900">
              At skabe værdi for din forretning.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 pb-20 px-6">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gray-100 px-8 py-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Lad os finde den rigtige løsning
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Book en gratis AI sparring og lad os finde den rigtige løsning for dig.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Book Gratis AI Sparring
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
