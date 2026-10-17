import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface NavItem { to: string; label: string }

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  pageNumber?: number;
  prev?: NavItem;
  next?: NavItem;
  children: ReactNode;
}

export function ChapterPage({ eyebrow, title, subtitle, pageNumber, prev, next, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <header className="mb-10 border-b border-border pb-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
        {pageNumber !== undefined && (
          <p className="mt-4 text-xs text-muted-foreground">עמוד {pageNumber} בספר המודפס</p>
        )}
      </header>

      <div className="prose-book">{children}</div>

      <nav className="mt-16 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link to={prev.to} className="group inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-3 text-sm transition-colors hover:border-gold hover:bg-gold-soft">
            <span aria-hidden>→</span>
            <span><span className="block text-xs text-muted-foreground">הקודם</span><span className="font-semibold">{prev.label}</span></span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={next.to} className="group inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-3 text-sm transition-colors hover:border-gold hover:bg-gold-soft">
            <span><span className="block text-xs text-muted-foreground">הבא</span><span className="font-semibold">{next.label}</span></span>
            <span aria-hidden>←</span>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <blockquote>
      {title && <p className="!mb-2 font-serif text-lg font-bold text-ink">{title}</p>}
      {children}
    </blockquote>
  );
}
