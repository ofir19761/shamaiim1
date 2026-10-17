import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { PageTitle, About, BookShowcase } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => meta("אודות אופיר לוי | שמיים — אופיר לוי", "מעל 20 שנה בייעוץ עסקי וניהול כספים בכיר בלי קופר, ארומה תל אביב וסאקס."),
  component: () => (
    <SiteShell><PageTitle eyebrow="שמיים" title="אודות אופיר לוי" sub="מעל 20 שנה בייעוץ עסקי וניהול כספים בכיר בלי קופר, ארומה תל אביב וסאקס." /><About /><BookShowcase /></SiteShell>
  ),
});
