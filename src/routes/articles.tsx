import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { PageTitle, Articles } from "@/components/site/Sections";

export const Route = createFileRoute("/articles")({
  head: () => meta("מאמרים | שמיים — אופיר לוי", "מאמרים מקצועיים על תזרים מזומנים, ניהול עסק, שותפויות ותמחור."),
  component: () => (
    <SiteShell><PageTitle eyebrow="שמיים" title="מאמרים" sub="מאמרים מקצועיים על תזרים מזומנים, ניהול עסק, שותפויות ותמחור." /><Articles /></SiteShell>
  ),
});
