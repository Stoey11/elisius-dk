export default function AISection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          AI er ikke fremtiden –{" "}
          <span className="text-indigo-600">det er nu</span>
        </h2>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
          De virksomheder, der implementerer AI i deres arbejdsgange i dag, får en klar
          konkurrencefordel. Med moderne LLM-modeller kan vi automatisere komplekse
          opgaver, analysere data i realtid og skabe et helt nyt niveau af effektivitet.
        </p>
      </div>
    </section>
  );
}
