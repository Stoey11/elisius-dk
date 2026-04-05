const benefits = [
  "Live omsætning og performance",
  "Samlet marketing dashboard",
  "Automatiserede workflows",
  "Konkurrent analyse i realtid",
  "Mindre stress – mere kontrol",
];

export default function Solution() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Ét system.{" "}
          <span className="text-indigo-600">Fuld kontrol.</span>
        </h2>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
          Vi bygger et skræddersyet system til din forretning, hvor du får samlet data,
          automatiseret arbejdsgange og skabt overblik i realtid.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-left"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-800">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
