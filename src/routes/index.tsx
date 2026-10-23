import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, meta } from "@/components/site/Layout";
import { Hero, Services, About, BookShowcase, Testimonial, Articles, ContactForm } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => meta("שמים - ייעוץ עסקי ופיננסי | אופיר לוי", "ליווי אסטרטגי ופיננסי ליזמים ובעלי עסקים, מעל 20 שנות ניסיון. קראו אונליין את הספר ערך מוסף."),
  component: () => (
    <SiteShell><Hero /><Services /><About /><BookShowcase /><Testimonial /><Articles limit={3} /><ContactForm /></SiteShell>
  ),
});
