import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { PageTitle, About, BookShowcase } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => meta("אודות אופיר לוי | שמיים - אופיר לוי", "מעל 20 שנה בייעוץ עסקי וניהול כספים בכיר ב-Lee Cooper Jeans, Aroma Tel Aviv ו-SACK'S."),
  component: () => (
    <SiteShell><PageTitle eyebrow="שמיים" title="אודות אופיר לוי" sub="מעל 20 שנה בייעוץ עסקי וניהול כספים בכיר ב-Lee Cooper Jeans, Aroma Tel Aviv ו-SACK'S." /><About /><BookShowcase /></SiteShell>
  ),
});
