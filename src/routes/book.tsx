import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { bookNav } from "@/content/book";

export const Route = createFileRoute("/book")({ component: BookLayout });

function BookLayout() {
  const ref = useRef<HTMLDetailsElement>(null);
  const { pathname } = useLocation();
  useEffect(() => { ref.current?.removeAttribute("open"); }, [pathname]);
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 text-sm">
          <Link to="/" className="inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2 font-bold text-pearl transition hover:bg-slate">
            <ArrowRight className="h-4 w-4" />חזרה לאתר שמים
          </Link>
          <Link to="/book" className="hidden items-center gap-2 font-serif text-xl font-bold sm:flex"><BookOpen className="h-5 w-5 text-gold" />ערך מוסף</Link>
          <details ref={ref} className="relative">
            <summary className="cursor-pointer list-none rounded-sm border border-border px-4 py-2 font-semibold hover:border-gold">פרקים ▾</summary>
            <div className="absolute end-0 mt-3 w-72 rounded-sm border border-border bg-card p-2 shadow-elegant">
              <Link to="/book" className="block rounded-sm px-3 py-2 hover:bg-muted" activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }}>שער הספר</Link>
              <Link to="/book/toc" className="block rounded-sm px-3 py-2 hover:bg-muted" activeProps={{ className: "text-gold" }}>תוכן העניינים</Link>
              {bookNav.map((c) => (
                <div key={c.to}>
                  {"part" in c && <p className="mt-2 border-t border-border px-3 pt-2 text-xs font-bold text-gold">{c.part}</p>}
                  <Link to={c.to} className="block rounded-sm px-3 py-2 hover:bg-muted" activeProps={{ className: "text-gold" }}>{c.label}</Link>
                </div>
              ))}
            </div>
          </details>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
