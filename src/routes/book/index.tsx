import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/book/")({
  head: () => ({
    meta: [
      { title: "ערך מוסף — כשערכים ועסקים נפגשים בהצלחה | אופיר לוי" },
      { name: "description", content: "ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים. מאת אופיר לוי — רואה חשבון ויועץ עסקי." },
      { property: "og:title", content: "ערך מוסף — כשערכים ועסקים נפגשים בהצלחה | אופיר לוי" },
      { property: "og:description", content: "ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים. מאת אופיר לוי — רואה חשבון ויועץ עסקי." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero / cover */}
      <section className="relative">
        <div className="absolute inset-y-0 right-0 hidden w-2 bg-gold lg:block" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">המדריך לעולם העסקים החדש</p>
            <h1 className="font-serif text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              ערך<br />מוסף
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted-foreground">
              כשערכים ועסקים נפגשים בהצלחה. ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים.
            </p>
            <p className="mt-3 text-lg">
              מאת <span className="font-semibold">אופיר לוי</span> — רואה חשבון ויועץ עסקי
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/book/preface" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                התחילו לקרוא
              </Link>
              <Link to="/book/toc" className="inline-flex items-center justify-center rounded-md border border-border bg-paper px-6 py-3 text-base font-medium transition-colors hover:border-gold hover:bg-gold-soft">
                תוכן העניינים
              </Link>
            </div>
          </div>

          {/* "Book cover" mock */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-md bg-gold/60" />
              <div className="relative aspect-[3/4] rounded-md bg-card p-8 shadow-xl ring-1 ring-border">
                <div className="flex h-full flex-col items-center justify-between text-center">
                  <p className="font-serif text-sm tracking-widest text-muted-foreground">המדריך לעולם<br />העסקים החדש</p>
                  <div>
                    <p className="font-serif text-6xl font-bold leading-none text-ink">ערך</p>
                    <p className="mt-2 font-serif text-6xl font-bold leading-none text-ink">מוסף</p>
                    <p className="mt-6 text-sm italic text-muted-foreground">כשערכים ועסקים<br />נפגשים בהצלחה</p>
                  </div>
                  <p className="font-serif text-lg font-semibold">אופיר לוי</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center">
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
            “עסק טוב, בטווח הארוך, נבנה על יחסי גומלין טובים בין העסק לבין העובדים, הלקוחות, הספקים והקהילה.”
          </p>
        </div>
      </section>

      {/* Parts overview */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">על הספר</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          הספר מציג שתי תפיסות שנפגשות: בחלקו הראשון — גישה רעיונית ופרקטית לבניית מערכות יחסים טובות בסביבה העסקית. בחלקו השני — כלים מקצועיים, פיננסיים ותפעוליים, לניהול שוטף של עסק.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PartCard
            label="חלק א׳"
            title="ערכים ואידיאולוגיה"
            subtitle="ככה בונים עסק"
            chapters={[
              { to: "/book/chapter-1", label: "פרק ראשון · מתחילים בערכים" },
              { to: "/book/chapter-2", label: "פרק שני · הסביבה העסקית שלכם" },
            ]}
          />
          <PartCard
            label="חלק ב׳"
            title="מהלכה למעשה"
            subtitle="הקמה וניהול"
            chapters={[
              { to: "/book/chapter-3", label: "פרק שלישי · מוכנים להקים עסק?" },
              { to: "/book/chapter-4", label: "פרק רביעי · ניהול פיננסי" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function PartCard({ label, title, subtitle, chapters }: { label: string; title: string; subtitle: string; chapters: { to: string; label: string }[] }) {
  return (
    <div className="group rounded-lg border border-border bg-paper p-8 transition-colors hover:border-gold">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{label}</p>
      <h3 className="mt-2 font-serif text-2xl font-bold">{title}</h3>
      <p className="mt-1 text-muted-foreground">{subtitle}</p>
      <ul className="mt-6 space-y-2">
        {chapters.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className="inline-flex items-center gap-2 text-base hover:text-gold">
              <span className="text-gold" aria-hidden>›</span> {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
