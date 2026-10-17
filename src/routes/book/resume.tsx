import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/site/Layout";

export const Route = createFileRoute("/book/resume")({
  head: () => meta("הרזומה והמחבר — אופיר לוי | ערך מוסף", "פרופיל מקצועי מורחב על אופיר לוי: מעל 20 שנה בייעוץ עסקי וניהול כספים בכיר בלי קופר, ארומה תל אביב וסאקס."),
  component: () => (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-bold text-gold">נספח</p>
      <h1 className="mb-10 text-5xl font-bold">הרזומה והמחבר</h1>
      <div className="prose-book">
        <p>אופיר לוי הוא יועץ עסקי ופיננסי ומייסד ״שמיים — ייעוץ עסקי, פיתוח עסקי ופיננסי״. במשך למעלה מעשרים שנה מילא תפקידי ניהול כספים בכירים בחברות מובילות במשק, ומאז הוא מלווה בעלי עסקים ויזמים בבניית עסקים יציבים ורווחיים.</p>
        <h2>תחנות מרכזיות</h2>
        <ul>
          <li><strong>Lee Cooper Jeans</strong> — ניהול כספים בכיר, בקרה תקציבית וניהול תזרים ברשת קמעונאית.</li>
          <li><strong>ארומה תל אביב</strong> — ניהול כספים בכיר ברשת מזון מהגדולות בישראל, עבודה מול זכיינים וספקים.</li>
          <li><strong>Sack's</strong> — ניהול כספים בכיר, משא ומתן מול ספקים ובנקים ובניית מערכי דיווח ניהוליים.</li>
          <li><strong>שמיים</strong> — ייעוץ וליווי עסקי ופיננסי לעסקים קטנים ובינוניים וליזמים.</li>
        </ul>
        <h2>תחומי מומחיות</h2>
        <ul>
          <li>אסטרטגיה ופיתוח עסקי</li>
          <li>תזרים מזומנים, תקציב ובקרה</li>
          <li>משא ומתן מול ספקים, בנקים ושותפים</li>
          <li>ליווי יזמים מהרעיון ועד ההשקה</li>
        </ul>
        <blockquote>״המטרה שלי פשוטה: שבעל עסק קטן ינהל את העסק שלו כמו עסק גדול.״</blockquote>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-8">
        <Link to="/book/$slug" params={{ slug: "chapter-4" }} className="font-semibold text-slate hover:text-gold">→ פרק ד׳</Link>
        <Link to="/contact" className="rounded-sm bg-gold px-6 py-3 font-bold text-navy">לתיאום פגישת היכרות</Link>
      </div>
    </article>
  ),
});
