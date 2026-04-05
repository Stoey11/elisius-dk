import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "Om Elisius", href: "/om" },
  { label: "Pris", href: "/pris" },
  { label: "Book sparring", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-indigo-600">elisius</span>
            </Link>
            <p className="mt-1 text-xs text-gray-400 max-w-xs">
              Dashboards, automatisering og AI-løsninger til virksomheder der vil have overblik.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-gray-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">
            &copy; 2026 Elisius. Alle rettigheder forbeholdes.
          </p>
          <a
            href="mailto:victor@elisius.dk"
            className="text-xs text-gray-400 hover:text-indigo-600 transition-colors"
          >
            victor@elisius.dk
          </a>
        </div>
      </div>
    </footer>
  );
}
