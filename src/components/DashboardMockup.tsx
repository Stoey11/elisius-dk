"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const menuItems = [
  {
    id: "overblik",
    label: "Overblik",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
      </svg>
    ),
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: "salg",
    label: "Salg",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "automatisering",
    label: "Automatisering",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable tiny components                                           */
/* ------------------------------------------------------------------ */

function KPI({ label, value, change, up }: { label: string; value: string; change: string; up: boolean }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 hover:shadow-md transition-shadow">
      <p className="text-xs text-gray-400 font-medium">{label}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      <p className={`mt-1 text-xs font-medium ${up ? "text-emerald-500" : "text-red-500"}`}>
        {up ? "\u25B2" : "\u25BC"} {change}
      </p>
    </div>
  );
}

function BarChart({ data, color = "bg-blue-500" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-32">
      {data.map((v, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm ${color} transition-all hover:opacity-80`}
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

function LineChart({ points, color = "#4f46e5" }: { points: number[]; color?: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const h = 100;
  const w = 240;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => `${i * step},${h - ((p - min) / range) * (h - 10)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h + 5}`} className="w-full h-32" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={coords} />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={i * step}
          cy={h - ((p - min) / range) * (h - 10)}
          r="3"
          fill="white"
          stroke={color}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function MiniTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-gray-50 text-left text-gray-500">
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-gray-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Views                                                              */
/* ------------------------------------------------------------------ */

function OverblikView() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI label="Omsætning" value="1.24M" change="12.5% denne måned" up />
        <KPI label="Besøgende" value="34.2K" change="8.1% denne uge" up />
        <KPI label="Konvertering" value="3.8%" change="0.4% i dag" up />
        <KPI label="Avg. ordreværdi" value="2.450 kr" change="2.1% denne uge" up />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <h4 className="text-sm font-semibold text-gray-800">Omsætning (6 mdr.)</h4>
          <div className="mt-3">
            <LineChart points={[180, 220, 195, 280, 310, 340, 390, 420, 460, 510, 480, 540]} />
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <h4 className="text-sm font-semibold text-gray-800">Besøgende pr. kanal</h4>
          <div className="mt-3">
            <BarChart data={[65, 45, 80, 35, 55, 70, 90, 50]} color="bg-indigo-500" />
          </div>
          <div className="mt-2 flex gap-3 text-[10px] text-gray-400">
            <span>Google</span><span>Meta</span><span>Direct</span><span>Email</span>
            <span>Ref</span><span>Social</span><span>TikTok</span><span>Andet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketingView() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI label="Ad Spend" value="48.3K" change="5.2% denne måned" up={false} />
        <KPI label="ROAS" value="4.2x" change="0.8x denne uge" up />
        <KPI label="CTR" value="2.9%" change="0.3% i dag" up />
        <KPI label="CPA" value="127 kr" change="12 kr lavere" up />
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-4">
        <h4 className="text-sm font-semibold text-gray-800">Ad Spend vs. Revenue</h4>
        <div className="mt-3">
          <LineChart points={[30, 35, 28, 42, 50, 48, 55, 62, 58, 70]} color="#3b82f6" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Aktive kampagner</h4>
        <MiniTable
          headers={["Kampagne", "Spend", "Klik", "ROAS"]}
          rows={[
            ["Forår 2026 — Google", "12.400 kr", "3.842", "5.1x"],
            ["Meta Retargeting", "8.200 kr", "2.105", "3.8x"],
            ["TikTok Brand", "5.600 kr", "6.230", "2.4x"],
            ["Google Shopping", "15.100 kr", "4.510", "6.2x"],
            ["Email Winback", "2.800 kr", "890", "8.1x"],
          ]}
        />
      </div>
    </div>
  );
}

function SalgView() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI label="Pipeline" value="2.8M" change="340K denne uge" up />
        <KPI label="Lukkede deals" value="23" change="4 mere end sidste uge" up />
        <KPI label="Win rate" value="34%" change="2% bedre" up />
        <KPI label="Avg. deal size" value="82K" change="5K højere" up />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <h4 className="text-sm font-semibold text-gray-800">Salg pr. måned</h4>
          <div className="mt-3">
            <BarChart data={[45, 52, 38, 65, 58, 72, 80, 68, 85, 92, 78, 95]} color="bg-emerald-500" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-gray-400">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
            <span>Maj</span><span>Jun</span><span>Jul</span><span>Aug</span>
            <span>Sep</span><span>Okt</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4">
          <h4 className="text-sm font-semibold text-gray-800">Pipeline fordeling</h4>
          <div className="mt-3 space-y-2">
            {[
              { stage: "Kvalificeret", count: 42, pct: 100 },
              { stage: "Tilbud sendt", count: 28, pct: 67 },
              { stage: "Forhandling", count: 15, pct: 36 },
              { stage: "Lukket", count: 8, pct: 19 },
            ].map((s) => (
              <div key={s.stage}>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{s.stage}</span>
                  <span className="font-medium">{s.count}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Top produkter</h4>
        <MiniTable
          headers={["Produkt", "Solgt", "Omsætning", "Margin"]}
          rows={[
            ["Premium Dashboard", "18", "1.476.000 kr", "72%"],
            ["AI Automation Pakke", "12", "984.000 kr", "68%"],
            ["Data Integration", "8", "320.000 kr", "81%"],
            ["Support Aftale", "34", "204.000 kr", "90%"],
          ]}
        />
      </div>
    </div>
  );
}

function AutomatiseringView() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPI label="Aktive workflows" value="12" change="3 nye denne måned" up />
        <KPI label="Sparede timer" value="142" change="23 timer denne uge" up />
        <KPI label="Successrate" value="98.2%" change="0.5% bedre" up />
        <KPI label="Triggers i dag" value="847" change="12% flere" up />
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-4">
        <h4 className="text-sm font-semibold text-gray-800">Automations pr. dag (sidste 14 dage)</h4>
        <div className="mt-3">
          <BarChart data={[52, 48, 61, 55, 70, 65, 78, 72, 80, 85, 68, 90, 88, 95]} color="bg-violet-500" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-2">Aktive workflows</h4>
        <MiniTable
          headers={["Workflow", "Status", "Kørsler i dag", "Sparede min."]}
          rows={[
            ["Lead scoring", "\u2705 Aktiv", "124", "45"],
            ["Email follow-up", "\u2705 Aktiv", "89", "62"],
            ["Rapport generering", "\u2705 Aktiv", "12", "180"],
            ["Faktura afsendelse", "\u2705 Aktiv", "34", "90"],
            ["Data sync (ERP)", "\u2705 Aktiv", "288", "120"],
            ["Konkurrent monitor", "\u2705 Aktiv", "48", "35"],
          ]}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const views: Record<string, () => React.ReactElement> = {
  overblik: OverblikView,
  marketing: MarketingView,
  salg: SalgView,
  automatisering: AutomatiseringView,
};

export default function DashboardMockup() {
  const [active, setActive] = useState("overblik");
  const View = views[active];

  return (
    <section className="pb-20 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        {/* Subtle label */}
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
          Prøv dashboardet selv — klik rundt i menuen
        </p>

        <div className="rounded-2xl border border-gray-200 bg-[#f0f2f5] p-3 shadow-2xl shadow-gray-300/40 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between rounded-t-xl bg-white px-5 py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-800">elisius</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors relative">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
              </button>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                VE
              </div>
            </div>
          </div>

          <div className="flex rounded-b-xl overflow-hidden bg-white min-h-[420px]">
            {/* Sidebar */}
            <div className="w-44 shrink-0 border-r border-gray-100 bg-gray-50/50 py-3 hidden sm:block">
              <nav className="space-y-0.5 px-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all
                      ${
                        active === item.id
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 px-2">
                <div className="rounded-lg bg-indigo-50 p-3">
                  <p className="text-[10px] font-semibold text-indigo-700">Pro Tip</p>
                  <p className="mt-1 text-[10px] text-indigo-600 leading-relaxed">
                    Klik på de forskellige menupunkter for at udforske dashboardet.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile tabs */}
            <div className="sm:hidden flex border-b border-gray-100 bg-gray-50/50 overflow-x-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex-1 min-w-0 px-3 py-2.5 text-[10px] font-medium transition-all border-b-2
                    ${
                      active === item.id
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-400"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-5 overflow-auto">
              <h3 className="text-base font-bold text-gray-800 mb-4 capitalize">
                {menuItems.find((m) => m.id === active)?.label}
              </h3>
              <View />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
