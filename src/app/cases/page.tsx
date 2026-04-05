import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardMockup from "@/components/DashboardMockup";
import Link from "next/link";

const challenges = [
  "Marketing performance var svær at gennemskue",
  "Data lå i flere systemer uden sammenhæng",
  "Manuelle rapporteringer tog tid",
  "Ingen live indsigt i konkurrenter",
  "Beslutninger blev truffet på baggrund af fragmenteret data",
];

const results = [
  "Fuldt overblik over omsætning og performance",
  "Reduceret tid brugt på rapportering",
  "Hurtigere og bedre beslutninger",
  "Identifikation af ineffektive marketingkanaler",
  "Mindre afhængighed af manuelle processer",
];

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gray-50 pt-20 pb-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Case Study
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Sådan skabte vi fuldt overblik hos{" "}
              <span className="text-indigo-600">Damsgaard Caravan Center</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
              Fra manuelle processer og manglende indsigt &rarr; til real-time data og bedre
              beslutninger.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Damsgaard Caravan Center stod med en klassisk udfordring: Data var spredt,
              processer var manuelle, og beslutninger blev truffet uden et klart overblik.
            </p>
            <p className="mt-4 text-lg text-gray-400 italic">
              Det skabte ineffektivitet, frustration og tabt potentiale.
            </p>
          </div>
        </section>

        {/* Udfordringerne */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Udfordringerne
            </h2>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-7 space-y-4">
              {challenges.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Løsningen */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Løsningen
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Vi byggede et skræddersyet dashboard, der samlede alle kritiske datapunkter ét sted.
            </p>
            <p className="mt-3 text-lg text-gray-600">
              Systemet gav ledelsen et klart overblik over hele forretningen – i realtid.
            </p>
          </div>
        </section>

        {/* Interactive dashboard */}
        <section className="bg-gray-50 py-8">
          <DashboardMockup />
        </section>

        {/* Resultater */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Resultater
            </h2>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-7 space-y-4">
              {results.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800">{r}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                <svg className="mx-auto h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="mt-3 text-4xl font-extrabold text-gray-900">+18%</p>
                <p className="mt-1 text-sm text-gray-500">Forbedring i marketing ROI</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                <svg className="mx-auto h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-3 text-4xl font-extrabold text-gray-900">-40%</p>
                <p className="mt-1 text-sm text-gray-500">Tid brugt på rapportering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 italic leading-relaxed">
                &ldquo;Det har ændret måden vi driver forretningen på – vi har endelig overblik.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Vil du have samme overblik i din forretning?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Book en gratis AI sparring og lad os se, hvordan vi kan hjælpe dig.
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
