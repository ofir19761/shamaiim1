import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { PageTitle, ContactForm } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => meta("צור קשר | שמים - אופיר לוי", "לתיאום פגישת היכרות: 054-5606843 · Ofir@shamaiim.co.il · הבטחון 6, פתח תקווה."),
  component: () => (
    <SiteShell><PageTitle eyebrow="שמים" title="צור קשר" sub="לתיאום פגישת היכרות: 054-5606843 · Ofir@shamaiim.co.il · הבטחון 6, פתח תקווה." /><ContactForm /></SiteShell>
  ),
});
