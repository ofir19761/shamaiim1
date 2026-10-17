import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Layout";
import { chapters } from "@/content/book";

export const Route = createFileRoute("/book/toc")({
  head: () => meta("תוכן עניינים — ערך מוסף | אופיר לוי", "תוכן העניינים המלא של הספר ערך מוסף, כולל זמני קריאה משוערים לכל פרק."),
  component: () => (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-12 text-5xl font-bold">תוכן עניינים</h1>
      <ol className="divide-y divide-border border-y border-border">
        {chapters.map((c) => (
          <li key={c.slug}>
            <Link to="/book/$slug" params={{ slug: c.slug }} className="group flex items-baseline justify-between gap-6 py-6">
              <div>
                <span className="text-sm font-bold text-gold">{c.label}</span>
                <h2 className="text-2xl font-bold transition group-hover:text-slate">{c.title}</h2>
                <p className="text-muted-foreground">{c.subtitle}</p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground">{c.minutes} דק׳</span>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/book/resume" className="group flex items-baseline justify-between gap-6 py-6">
            <div><span className="text-sm font-bold text-gold">נספח</span><h2 className="text-2xl font-bold group-hover:text-slate">הרזומה והמחבר</h2></div>
            <span className="text-sm text-muted-foreground">4 דק׳</span>
          </Link>
        </li>
      </ol>
    </div>
  ),
});
