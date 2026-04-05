import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const baggrund = ["Spredt data", "Manuelle processer", "Manglende overblik"];

const tilgang = [
  "Skræddersyede systemer til hver virksomhed",
  "Fokus på reel forretningsværdi",
  "Simple løsninger på komplekse problemer",
  "Hurtig implementering og løbende forbedring",
];

const techCards = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Large Language Models",
    description:
      "Arbejder med de nyeste LLM'er (GPT-4, Claude, open-source modeller) til at automatisere komplekse opgaver og analysere store datamængder.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Full-stack udvikling",
    description:
      "Bygger komplette systemer fra bunden – frontend, backend, dataflows og API-integrationer. Alt browser-baseret og brugervenligt.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Real-time dataintegration",
    description:
      "Forbinder live datakilder og skaber automatiserede pipelines, der holder dashboards opdateret i realtid.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "AI i praksis",
    description:
      "Bruger AI hvor det skaber reel værdi – ikke for teknologiens skyld. Hver implementering er designet til at løse et konkret forretningsproblem.",
  },
];

export default function OmPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gray-50 pt-20 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Om Elisius
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Mød personen bag{" "}
              <span className="text-indigo-600">systemerne</span>
            </h1>
          </div>
        </section>

        {/* Bio */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Photo placeholder */}
              <div className="h-64 w-full max-w-[280px] mx-auto rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400">
                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Victor arbejder med at bygge skræddersyede AI-løsninger og dashboards,
                  der giver virksomheder bedre overblik og stærkere beslutningsgrundlag.
                </p>
                <p className="mt-4 text-lg text-gray-400 italic">
                  Hans tilgang er ikke teoretisk – den er bygget på praktisk erfaring fra
                  virkelige virksomheder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Baggrund */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Baggrund
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Med erfaring fra arbejdet hos Damsgaard Caravan Center fik Victor
              førstehåndsindsigt i de udfordringer, mange virksomheder står med:
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-7 space-y-3">
              {baggrund.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg text-gray-400 italic">
              Det blev udgangspunktet for at udvikle løsninger, der faktisk virker i praksis.
            </p>
          </div>
        </section>

        {/* Tilgang */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Tilgang
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              I stedet for standardløsninger arbejder Victor med:
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-7 space-y-4">
              {tilgang.map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teknologien bag */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Teknologien bag
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Victor kombinerer praktisk forretningserfaring med en dyb teknisk forståelse
              af de nyeste AI-modeller. Det er den kombination, der gør løsningerne konkrete
              og værdiskabende – ikke bare teknisk imponerende.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <div className="text-indigo-600">{c.icon}</div>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              I 2026 udvikler LLM-modeller sig ekstremt hurtigt. Det betyder, at vi i
              realtid kan håndtere store kodebaser og dataindstrømninger – og det giver din
              forretning en direkte konkurrencefordel.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
              <p className="text-xl font-bold text-gray-800 italic">
                &ldquo;Teknologi skal ikke gøre ting mere komplekse.&rdquo;
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Det skal gøre det nemmere at drive en forretning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Lad os tage en snak
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Book en gratis AI sparring og hør hvordan det kan bruges i din forretning.
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
