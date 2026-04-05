import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-16 text-center sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Er du klar til at få overblik over din forretning?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Book en gratis AI sparring, og lad os se hvordan vi kan hjælpe dig.
          <br />
          Vent ikke – tag beslutningen i dag.
        </p>
        <Link
          href="/book"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-indigo-700 hover:bg-gray-100 transition-colors"
        >
          Book Gratis AI Sparring
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
