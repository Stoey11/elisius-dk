const models = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Fast projekt",
    description:
      "Vi definerer scope og pris på forhånd. Du ved præcis, hvad du får og hvad det koster.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Løbende samarbejde",
    description:
      "Vi starter småt og udvikler løbende. Fleksibelt og tilpasset din vækst.",
  },
];

export default function PricingModel() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Fleksibel{" "}
          <span className="text-indigo-600">samarbejdsmodel</span>
        </h2>
        <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
          Alle projekter er unikke. Vi finder den model, der passer bedst til dig.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {models.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                {m.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
