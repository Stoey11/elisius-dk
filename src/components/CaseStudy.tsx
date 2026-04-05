const before = [
  "Manuelle processer",
  "Manglende overblik",
  "Lange rapporter uden værdi",
];

const after = [
  "Live data på hele forretningen",
  "Klar indsigt i marketing performance",
  "Automatiserede workflows",
  "Bedre beslutninger – hurtigere",
];

export default function CaseStudy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Fra kaos til overblik hos{" "}
            <span className="text-indigo-600">Damsgaard Caravan Center</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            I arbejdet med Damsgaard Caravan Center blev det tydeligt, hvor svært det var
            at skabe overblik på tværs af marketing, salg og drift. Derfor byggede vi et
            samlet dashboard med real-time indsigt.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Before / After */}
          <div>
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
                Før
              </span>
              <ul className="mt-3 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-500">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Efter
              </span>
              <ul className="mt-3 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 text-indigo-600">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile card */}
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Victor</h3>
            <p className="text-sm text-gray-500">AI Builder & Rådgiver</p>
            <a
              href="/cases"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Læs hele casen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
