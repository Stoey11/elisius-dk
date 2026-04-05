import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const models = [
  {
    title: "Fast projekt",
    description: "Vi definerer scope og pris på forhånd.",
    bullets: [
      "Klart defineret scope fra start",
      "Fast pris – ingen overraskelser",
      "Dele af beløbet betales upfront",
      "Levering inden aftalt deadline",
    ],
  },
  {
    title: "Løbende samarbejde",
    description: "Vi starter småt og udvikler løbende.",
    bullets: [
      "Start med få simple features",
      "Timebaseret afregning",
      "Fleksibelt – tilpas efter behov",
      "Udvid platformen over tid",
    ],
  },
];

export default function PrisPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gray-50 pt-20 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Pris
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Fleksibel{" "}
              <span className="text-indigo-600">samarbejdsmodel</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
              Alle projekter er unikke. Derfor tilpasser vi altid modellen til jeres behov.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="bg-gray-50 pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {models.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900">{m.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{m.description}</p>
                  <div className="mt-6 space-y-3">
                    {m.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-gray-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Lad os finde den rigtige model for dig
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Book en gratis AI sparring, og vi finder ud af hvad der giver mest mening for din forretning.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors"
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
