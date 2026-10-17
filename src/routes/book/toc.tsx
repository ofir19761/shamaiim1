import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/book/toc")({
  head: () => ({
    meta: [
      { title: "תוכן העניינים — ערך מוסף" },
      { name: "description", content: "תוכן העניינים של הספר ערך מוסף מאת אופיר לוי." },
      { property: "og:title", content: "תוכן העניינים — ערך מוסף" },
      { property: "og:description", content: "תוכן העניינים של הספר ערך מוסף מאת אופיר לוי." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TOC,
});

const SECTIONS: { part?: string; title: string; to: string; page: number; sub?: { label: string; hash: string; page: number }[] }[] = [
  { title: "פתח דבר", to: "/book/preface", page: 9 },

  { part: "חלק א׳ — ערכים ואידיאולוגיה: ככה בונים עסק", title: "פרק ראשון: מתחילים בערכים", to: "/book/chapter-1", page: 13, sub: [
    { label: "עולם העסקים החדש — מה זה?", hash: "new-world", page: 13 },
    { label: "אידיאולוגיה ב־150 מילים", hash: "ideology", page: 15 },
    { label: "הערכים שמגדירים את העסק", hash: "values", page: 16 },
    { label: "חדשנות בעסקים", hash: "innovation", page: 20 },
  ]},
  { title: "פרק שני: הסביבה העסקית שלכם", to: "/book/chapter-2", page: 23, sub: [
    { label: "א. עובדים — תתחברו אליהם, תשמרו עליהם", hash: "employees", page: 24 },
    { label: "הנעת עובדים ומוטיבציה", hash: "motivation", page: 29 },
    { label: "כוח הקשבה עוזר לאנשים להשתנות", hash: "listening", page: 31 },
    { label: "ב. לקוחות וספקים", hash: "customers", page: 37 },
    { label: "ג. קהילה", hash: "community", page: 43 },
    { label: "בונים את הקשר", hash: "connection", page: 46 },
  ]},

  { part: "חלק ב׳ — מהלכה למעשה", title: "פרק שלישי: מוכנים להקים עסק?", to: "/book/chapter-3", page: 55, sub: [
    { label: "אילו תכונות דרושות לבעל עסק?", hash: "traits", page: 55 },
    { label: "ממחשבות להקמה", hash: "from-thoughts", page: 57 },
    { label: "כמה זמן לוקח להקים עסק?", hash: "time", page: 61 },
    { label: "איך עושים ׳דיפנס׳ בעסק?", hash: "defense", page: 67 },
    { label: "יוצאים לנופש — לפני שאורזים", hash: "vacation", page: 69 },
  ]},
  { title: "פרק רביעי: ניהול פיננסי", to: "/book/chapter-4", page: 71, sub: [
    { label: "איזו רוח נושבת מכיוון רואה החשבון שלכם?", hash: "accountant", page: 71 },
    { label: "איך עוברים את ה־15 לחודש?", hash: "15th", page: 72 },
    { label: "איפה הכסף? באמת איפה…", hash: "money", page: 75 },
    { label: "חודש דצמבר — חודש הרחמים והסליחות", hash: "december", page: 81 },
    { label: "טיפים פיננסיים לניהול עסק", hash: "tips", page: 88 },
    { label: "הכול מתחיל ביחסים בינינו", hash: "relations", page: 94 },
  ]},

  { title: "הרזומה שלי בקצרה", to: "/book/resume", page: 96 },
];

function TOC() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">תוכן העניינים</p>
        <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">המסע בספר</h1>
      </header>

      <ol className="space-y-7">
        {SECTIONS.map((s, i) => (
          <li key={i}>
            {s.part && (
              <p className="mb-3 mt-6 border-b border-border pb-2 font-serif text-lg font-bold text-ink">{s.part}</p>
            )}
            <Link to={s.to} className="group flex items-baseline justify-between gap-4 border-b border-dashed border-border py-2 hover:border-gold">
              <span className="font-serif text-xl font-semibold group-hover:text-gold">{s.title}</span>
              <span className="text-sm text-muted-foreground">עמ׳ {s.page}</span>
            </Link>
            {s.sub && (
              <ul className="mr-4 mt-2 space-y-1">
                {s.sub.map((ss) => (
                  <li key={ss.hash}>
                    <Link to={s.to} hash={ss.hash} className="flex items-baseline justify-between gap-4 py-1 text-muted-foreground hover:text-foreground">
                      <span>{ss.label}</span>
                      <span className="text-xs">{ss.page}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
