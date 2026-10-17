import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Layout";
import { BookCover } from "@/components/site/Sections";
import { BOOK_SUBTITLE, chapters } from "@/content/book";

export const Route = createFileRoute("/book/")({
  head: () => meta("ערך מוסף — מדריך מעשי ליזמים ובעלי עסקים | אופיר לוי", "קראו אונליין את הספר ערך מוסף מאת אופיר לוי: מערכות יחסים עסקיות, מכירה, משא ומתן ושימור לקוחות."),
  component: () => (
    <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-20 md:grid-cols-2">
      <BookCover />
      <div>
        <p className="mb-2 text-sm font-bold tracking-[0.2em] text-gold">אופיר לוי</p>
        <h1 className="text-6xl font-black">ערך מוסף</h1>
        <p className="mt-3 text-xl text-slate">{BOOK_SUBTITLE}</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          מדריך מעשי שנכתב מתוך יותר מעשרים שנה בניהול כספים ובייעוץ עסקי. הספר מוביל את הקורא לאורך המסלול המלא של עסקה: בניית אמון, תהליך המכירה, משא ומתן חכם ושימור לקוחות לאורך שנים — עם כלים שאפשר ליישם מיד.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{chapters.length} חלקים · כ־{chapters.reduce((s, c) => s + c.minutes, 0)} דקות קריאה</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/book/$slug" params={{ slug: "preface" }} className="rounded-sm bg-gold px-8 py-4 font-bold text-navy hover:brightness-110">להתחיל לקרוא</Link>
          <Link to="/book/toc" className="rounded-sm border border-border px-8 py-4 font-semibold hover:border-gold">תוכן עניינים</Link>
        </div>
      </div>
    </div>
  ),
});
