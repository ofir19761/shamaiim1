import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCover } from "@/components/site/Sections";

export const Route = createFileRoute("/book/")({
  head: () => ({
    meta: [
      { title: "ערך מוסף - כשערכים ועסקים נפגשים בהצלחה | אופיר לוי" },
      { name: "description", content: "ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים. מאת אופיר לוי - רואה חשבון ויועץ עסקי." },
      { property: "og:title", content: "ערך מוסף - כשערכים ועסקים נפגשים בהצלחה | אופיר לוי" },
      { property: "og:description", content: "ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים. מאת אופיר לוי - רואה חשבון ויועץ עסקי." },
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
              מאת <span className="font-semibold">אופיר לוי</span> - רואה חשבון ויועץ עסקי
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

          <div className="relative flex items-center justify-center">
            <BookCover className="max-w-[360px]" />
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
          הספר מציג שתי תפיסות שנפגשות: בחלקו הראשון - גישה רעיונית ופרקטית לבניית מערכות יחסים טובות בסביבה העסקית. בחלקו השני - כלים מקצועיים, פיננסיים ותפעוליים, לניהול שוטף של עסק.
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gold/40 bg-gold-soft p-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold">עותק מודפס</p>
            <h3 className="mt-2 font-serif text-2xl font-bold">רוצים את הספר על שולחן העבודה?</h3>
            <p className="mt-3 text-muted-foreground">הספר המלא זמין כאן לקריאה חופשית. ניתן גם להזמין עותק מודפס (96 עמודים) ב-60 ש״ח או עותק דיגיטלי ב-20 ש״ח.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:0545606843" className="inline-flex items-center rounded-md bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:brightness-110">להזמנה: 054-5606843</a>
              <a href="mailto:Ofir@shamaiim.co.il?subject=הזמנת הספר ערך מוסף" className="inline-flex items-center rounded-md border border-border bg-paper px-5 py-3 text-sm font-medium hover:border-gold">הזמנה במייל</a>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-paper p-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold">קרדיטים</p>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-base">
              <dt className="text-muted-foreground">עריכת תוכן</dt><dd className="font-semibold">יוסי דבש</dd>
              <dt className="text-muted-foreground">עריכה לשונית</dt><dd className="font-semibold">שרון ברזילי</dd>
              <dt className="text-muted-foreground">עיצוב ועימוד</dt><dd className="font-semibold">סטודיו עפעף</dd>
              <dt className="text-muted-foreground">דפוס</dt><dd className="font-semibold">גאלה קדם דפוס בע״מ</dd>
              <dt className="text-muted-foreground">מספר עמודים</dt><dd className="font-semibold">96</dd>
            </dl>
          </div>
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
