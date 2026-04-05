import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Gratis AI Sparring — Elisius",
  description:
    "Book en uforpligtende AI sparring og hør hvordan vi kan give din virksomhed bedre overblik, automatisering og data-drevne beslutninger.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
