import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { chapters, findChapter } from "@/content/book";

export const Route = createFileRoute("/book/$slug")({
  loader: ({ params }) => {
    const c = findChapter(params.slug);
    if (!c) throw notFound();
    return { slug: c.slug };
  },
  head: ({ loaderData }) => {
    const c = loaderData ? findChapter(loaderData.slug) : undefined;
    if (!c) return { meta: [{ title: "לא נמצא | ערך מוסף" }, { name: "robots", content: "noindex" }] };
    const t = `${c.label === c.title ? c.title : `${c.label}: ${c.title}`} — ערך מוסף | אופיר לוי`;
    return {
      meta: [
        { title: t },
        { name: "description", content: c.subtitle },
        { property: "og:title", content: t },
        { property: "og:description", content: c.subtitle },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useLoaderData();
  const i = chapters.findIndex((c) => c.slug === slug);
  const c = chapters[i];
  const prev = chapters[i - 1];
  const next = chapters[i + 1];
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-bold tracking-widest text-gold">{c.label} · {c.minutes} דקות קריאה</p>
      <h1 className="mt-2 text-5xl font-bold leading-tight">{c.title}</h1>
      <p className="mt-4 text-xl text-slate">{c.subtitle}</p>
      <div className="my-10 h-px w-24 bg-gold" />
      <div className="prose-book">
        {c.sections.map((s, k) => (
          <div key={k}>
            {s.h && <h2>{s.h}</h2>}
            {s.p?.map((p, j) => <p key={j}>{p}</p>)}
            {s.list && <ul>{s.list.map((l, j) => <li key={j}>{l}</li>)}</ul>}
            {s.quote && <blockquote>״{s.quote}״</blockquote>}
          </div>
        ))}
      </div>
      <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link to="/book/$slug" params={{ slug: prev.slug }} className="rounded-sm border border-border p-5 hover:border-gold">
            <span className="text-sm text-muted-foreground">→ הקודם</span><p className="font-serif text-lg font-bold">{prev.title}</p>
          </Link>
        ) : (
          <Link to="/book" className="rounded-sm border border-border p-5 hover:border-gold"><span className="text-sm text-muted-foreground">→ חזרה</span><p className="font-serif text-lg font-bold">שער הספר</p></Link>
        )}
        {next ? (
          <Link to="/book/$slug" params={{ slug: next.slug }} className="rounded-sm border border-border p-5 text-end hover:border-gold">
            <span className="text-sm text-muted-foreground">הבא ←</span><p className="font-serif text-lg font-bold">{next.title}</p>
          </Link>
        ) : (
          <Link to="/book/resume" className="rounded-sm border border-border p-5 text-end hover:border-gold"><span className="text-sm text-muted-foreground">הבא ←</span><p className="font-serif text-lg font-bold">הרזומה והמחבר</p></Link>
        )}
      </nav>
      <div className="mt-8 text-center"><Link to="/" className="text-sm font-semibold text-slate hover:text-gold">חזרה לאתר שמיים</Link></div>
    </article>
  );
}
