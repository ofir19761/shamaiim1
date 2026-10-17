import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/ofir-levi-portrait.jpg.asset.json";

export const Route = createFileRoute("/book/resume")({
  head: () => ({
    meta: [
      { title: "הרזומה שלי בקצרה - אופיר לוי" },
      { name: "description", content: "אופיר לוי - רואה חשבון ויועץ עסקי בעל ניסיון של יותר מ־15 שנה במגזר העסקי." },
      { property: "og:title", content: "הרזומה שלי בקצרה - אופיר לוי" },
      { property: "og:description", content: "אופיר לוי - רואה חשבון ויועץ עסקי בעל ניסיון של יותר מ־15 שנה במגזר העסקי." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">סיומת הספר</p>
        <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">הרזומה שלי בקצרה</h1>
      </header>

      <div className="grid gap-10 sm:grid-cols-[200px_1fr] sm:gap-12">
        <div>
          <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-md border border-gold bg-card">
            <img src={portrait.url} alt="אופיר לוי - מחבר הספר ערך מוסף" width={768} height={768} className="h-full w-full object-cover object-top" />
          </div>
          <p className="mt-3 text-center font-serif text-lg font-bold">אופיר לוי</p>
          <p className="text-center text-sm text-muted-foreground">רואה חשבון ויועץ עסקי</p>
        </div>

        <div className="prose-book">
          <p>
            רואה חשבון ויועץ עסקי בעל ניסיון של יותר מ־15 שנה במגזר העסקי. התחלתי
            את הקריירה המקצועית שלי בארנסט אנד יאנג (משרד רואי החשבון הגדול
            בישראל). עבדתי מול חברות מובילות מתחומי פעילות שונים.
          </p>
          <p>
            לאחר מכן, עברתי לתפקידי חשבות וניהול כספים בחברות עסקיות שונות:
            <strong> Lee Cooper Jeans</strong>, <strong>ארומה תל אביב</strong>,
            <strong> ״כרמל פלור דיזיין״</strong> ורשת האופנה המובילה לנשים
            <strong> SACK'S</strong>.
          </p>
          <p>
            בשנים האחרונות, אני מייעץ לעסקים באמצעות <strong>״שמים - מימוש שאיפות
            עסקיות״</strong>.
          </p>
          <p className="text-sm text-muted-foreground">
            מוזמנים לקרוא בהרחבה בבלוג שלי:{" "}
            <a href="https://www.shamaiim.co.il/blog/resume" target="_blank" rel="noreferrer" className="font-semibold text-gold hover:underline">
              shamaiim.co.il/blog/resume
            </a>
          </p>
        </div>
      </div>

      <nav className="mt-16 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/book/chapter-4" className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-3 text-sm hover:border-gold hover:bg-gold-soft">
          <span aria-hidden>→</span>
          <span><span className="block text-xs text-muted-foreground">הקודם</span><span className="font-semibold">פרק רביעי - ניהול פיננסי</span></span>
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-4 py-3 text-sm hover:border-gold hover:bg-gold-soft">
          <span><span className="block text-xs text-muted-foreground">חזרה</span><span className="font-semibold">לעמוד הראשי</span></span>
          <span aria-hidden>←</span>
        </Link>
      </nav>
    </article>
  );
}
