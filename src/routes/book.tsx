import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { chapters } from "@/content/book";

export const Route = createFileRoute("/book")({ component: BookLayout });

function BookLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6 text-sm">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate hover:text-gold"><ArrowRight className="h-4 w-4" />חזרה לשמיים</Link>
          <Link to="/book" className="font-serif text-lg font-bold">ערך מוסף</Link>
          <details className="relative">
            <summary className="cursor-pointer list-none font-semibold hover:text-gold">פרקים ▾</summary>
            <div className="absolute end-0 mt-3 w-64 rounded-sm border border-border bg-card p-2 shadow-elegant">
              <Link to="/book/toc" className="block rounded-sm px-3 py-2 hover:bg-muted">תוכן עניינים</Link>
              {chapters.map((c) => (
                <Link key={c.slug} to="/book/$slug" params={{ slug: c.slug }} className="block rounded-sm px-3 py-2 hover:bg-muted" activeProps={{ className: "text-gold" }}>
                  {c.label === c.title ? c.title : `${c.label}: ${c.title}`}
                </Link>
              ))}
              <Link to="/book/resume" className="block rounded-sm px-3 py-2 hover:bg-muted">הרזומה והמחבר</Link>
            </div>
          </details>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
