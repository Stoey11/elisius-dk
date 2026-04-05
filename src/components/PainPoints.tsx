const pains = [
  "Ingen samlet overblik",
  "Marketing data ligger flere steder",
  "Manuelle og tidskrævende processer",
  "Afhængighed af nøglemedarbejdere",
  "Lange rapporter uden klar indsigt",
];

export default function PainPoints() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          De fleste virksomheder arbejder stadig i
          <br />
          <span className="text-indigo-600">gamle systemer</span>
        </h2>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
          Selv stærke virksomheder med god ledelse og mange års erfaring arbejder
          stadig med manuelle processer, spredt data og manglende overblik. Det gør
          det svært at træffe hurtige og rigtige beslutninger.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-800">{pain}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
