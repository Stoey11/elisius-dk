"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Noget gik galt.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noget gik galt. Prøv igen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-50 pt-20 pb-20">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Book en sparring
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Lad os tage en{" "}
                <span className="text-indigo-600">uforpligtende snak</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Udfyld formularen, så vender vi tilbage inden for 24 timer med et
                tidspunkt der passer dig.
              </p>
            </div>

            {submitted ? (
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  Tak for din henvendelse!
                </h2>
                <p className="mt-3 text-gray-500">
                  Vi har modtaget dine oplysninger og vender tilbage inden for 24 timer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 space-y-6">
                {/* Navn */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Navn <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Dit fulde navn"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="din@email.dk"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+45 12 34 56 78"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
                  />
                </div>

                {/* Virksomhed */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                    Virksomhed <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Virksomhedens navn"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
                  />
                </div>

                {/* Hvad handler det om */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700">
                    Hvad er du interesseret i? <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Vælg en mulighed
                    </option>
                    <option value="dashboard">Dashboard & overblik</option>
                    <option value="automatisering">Automatisering</option>
                    <option value="marketing">Marketing & performance</option>
                    <option value="konkurrentanalyse">Konkurrentanalyse</option>
                    <option value="ai-løsning">Skræddersyet AI-løsning</option>
                    <option value="andet">Andet / ved ikke endnu</option>
                  </select>
                </div>

                {/* Besked */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Fortæl kort om din udfordring
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Hvad vil du gerne have hjælp til? Hvad er jeres største udfordring i dag?"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sender...
                    </>
                  ) : (
                    "Send og book sparring"
                  )}
                </button>

                {error && (
                  <p className="text-center text-sm text-red-500 font-medium">
                    {error}
                  </p>
                )}

                <p className="text-center text-xs text-gray-400">
                  Vi svarer inden for 24 timer. Ingen spam, ingen forpligtelser.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
