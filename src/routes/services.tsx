import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { PageTitle, Services, Testimonial } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => meta("שירותים | שמים - אופיר לוי", "פיתוח עסקי, ליווי פיננסי, הכוונת יזמים ויצירת תוכן - ארבעה עוגנים לעסק יציב."),
  component: () => (
    <SiteShell><PageTitle eyebrow="שמים" title="שירותים" sub="פיתוח עסקי, ליווי פיננסי, הכוונת יזמים ויצירת תוכן - ארבעה עוגנים לעסק יציב." /><Services /><Testimonial /></SiteShell>
  ),
});
