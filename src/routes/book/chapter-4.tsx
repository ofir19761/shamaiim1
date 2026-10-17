import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage, Section, SubSection, Callout } from "@/components/book/BookLayout";

export const Route = createFileRoute("/book/chapter-4")({
  head: () => ({
    meta: [
      { title: "פרק רביעי: ניהול פיננסי — ערך מוסף" },
      { name: "description", content: "כלים פיננסיים לניהול עסק: תזרים מזומנים, תקציב, נקודת איזון, ניהול מלאי ועוד." },
      { property: "og:title", content: "פרק רביעי: ניהול פיננסי — ערך מוסף" },
      { property: "og:description", content: "כלים פיננסיים לניהול עסק: תזרים מזומנים, תקציב, נקודת איזון, ניהול מלאי ועוד." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Chapter4,
});

function Chapter4() {
  return (
    <ChapterPage
      eyebrow="חלק ב׳ · פרק רביעי"
      title="ניהול פיננסי"
      subtitle="כלים מקצועיים לניהול שוטף של עסק"
      pageNumber={71}
      prev={{ to: "/book/chapter-3", label: "פרק שלישי — מוכנים להקים עסק?" }}
      next={{ to: "/book/resume", label: "הרזומה שלי בקצרה" }}
    >
      <Section id="accountant" title="איזו רוח נושבת מכיוון רואה החשבון שלכם?">
        <p>
          רואי החשבון עמוסים מאוד. תפקידם העיקרי הוא דיווחים חודשיים לרשויות והכנת
          הדוח השנתי. לבעל עסק שזקוק לליווי וייעוץ פיננסי — מוטב לפנות למומחה
          בתחום, ולא לצפות לקבל זאת מרואה החשבון. יועץ פיננסי עוזר לתכנן קדימה את
          הפעילות, לבנות תזרים ולחשב את הרווחיות הצפויה.
        </p>
      </Section>

      <Section id="15th" title="איך עוברים את ה־15 לחודש?">
        <p>
          לקראת ה־15 לחודש בקשו ממנהל החשבונות טבלת השוואה של התשלומים: מע״מ,
          מקדמות מס הכנסה, ניכויי עובדים, ביטוח לאומי וחברות הביטוח. כך תזהו
          תנודתיות, תזרמו את המזומנים בהתאם ותחסכו הפתעות לא נעימות.
        </p>
        <div className="not-prose my-6 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th className="px-3 py-2 text-right font-semibold">חודש</th>
                <th className="px-3 py-2 text-right font-semibold">ינואר</th>
                <th className="px-3 py-2 text-right font-semibold">פברואר</th>
                <th className="px-3 py-2 text-right font-semibold">מרץ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-paper">
              <tr><td className="px-3 py-2">מכירות (לפני מע״מ)</td><td className="px-3 py-2">98,000</td><td className="px-3 py-2">75,000</td><td className="px-3 py-2">112,000</td></tr>
              <tr><td className="px-3 py-2">מע״מ</td><td className="px-3 py-2">15,000</td><td className="px-3 py-2">11,000</td><td className="px-3 py-2">18,000</td></tr>
              <tr><td className="px-3 py-2">מס הכנסה — מקדמות</td><td className="px-3 py-2">1,960</td><td className="px-3 py-2">1,500</td><td className="px-3 py-2">2,240</td></tr>
              <tr><td className="px-3 py-2">ניכויי עובדים</td><td className="px-3 py-2">5,200</td><td className="px-3 py-2">5,400</td><td className="px-3 py-2">5,400</td></tr>
              <tr className="bg-gold-soft font-semibold"><td className="px-3 py-2">סה״כ תשלומים</td><td className="px-3 py-2">22,160</td><td className="px-3 py-2">17,900</td><td className="px-3 py-2">25,640</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          הערכה לא נכונה של תשלומי המקדמות במהלך השנה יכולה להוביל לחיוב גדול
          בלתי צפוי בהגשת הדוחות. בקשו מרואה החשבון לעדכן את המקדמות פעם או פעמיים
          בשנה.
        </p>
      </Section>

      <Section id="money" title="איפה הכסף? באמת איפה…">
        <p>
          אחת הסיבות העיקריות לסגירת עסקים היא התנהלות פיננסית לא נכונה. ניהול
          תזרים מזומנים מסייע בקבלת החלטות, משפר את השליטה ומעניק תחושת ביטחון.
        </p>
        <SubSection title="טבלה מרכזת (לדוגמה)">
          <div className="not-prose overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr>
                  <th className="px-3 py-2 text-right font-semibold"></th>
                  <th className="px-3 py-2 text-right font-semibold">אוקטובר</th>
                  <th className="px-3 py-2 text-right font-semibold">נובמבר</th>
                  <th className="px-3 py-2 text-right font-semibold">דצמבר</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-paper">
                <tr><td className="px-3 py-2">יתרת פתיחה בבנק</td><td className="px-3 py-2">15,000</td><td className="px-3 py-2">24,100</td><td className="px-3 py-2">11,100</td></tr>
                <tr><td className="px-3 py-2">הכנסות</td><td className="px-3 py-2">145,500</td><td className="px-3 py-2">112,000</td><td className="px-3 py-2">152,000</td></tr>
                <tr><td className="px-3 py-2">הוצאות</td><td className="px-3 py-2">136,400</td><td className="px-3 py-2">125,000</td><td className="px-3 py-2">133,000</td></tr>
                <tr className="bg-gold-soft font-semibold"><td className="px-3 py-2">יתרת סגירה בבנק</td><td className="px-3 py-2">24,100</td><td className="px-3 py-2">11,100</td><td className="px-3 py-2">30,100</td></tr>
              </tbody>
            </table>
          </div>
        </SubSection>
      </Section>

      <Section id="december" title="חודש דצמבר — חודש הרחמים והסליחות">
        <p>
          חודש דצמבר הוא חודש סיכומים ומסקנות לקראת השנה הבאה. חמש שאלות חשובות:
        </p>
        <ol className="!list-decimal">
          <li>איפה אתם עומדים ביחס לשאיפות המכירות והרווחיות?</li>
          <li>אילו מוצרים חדשים תכננתם להכניס — והאם הצלחתם?</li>
          <li>איך בניתם את המותג והקשר עם הלקוחות?</li>
          <li>מה טיב היחסים שלכם עם הספקים? יצרתם <span dir="ltr">Win‑Win</span>?</li>
          <li>תרומה לקהילה — מצאתם איך להשפיע לטובה על הסביבה?</li>
        </ol>
      </Section>

      <Section id="tips" title="טיפים פיננסיים לניהול עסק">
        <SubSection title="1 · איך לחשב נקודת איזון?">
          <p>
            נקודת איזון = הוצאות קבועות ÷ אחוז רווח גולמי. אם ההוצאות הקבועות
            החודשיות הן 40,000 ₪ ואחוז הרווח הגולמי הוא 50%, נקודת האיזון היא
            מחזור מכירות של 80,000 ₪ בחודש. מתחת לכך — אתם בהפסד.
          </p>
        </SubSection>
        <SubSection title="2 · מדוע חשוב לבנות תקציב?">
          <p>
            סעיף המכירות הוא הסעיף המרכזי בבניית התקציב, וממנו נגזר תקציב ההוצאות.
            פתחתם עסק כדי למכור — לא כדי לנהל הוצאות. בנו תחזית מכירות חודשית,
            ועקבו אחריה בפועל מדי חודש.
          </p>
        </SubSection>
        <SubSection title="3 · ניתוח הפעילות הפיננסית">
          <p>
            הציפו לעצמכם רק מספר מועט של מדדים: מחזור מכירות, רמת מלאי, הוצאות
            קבועות, נקודת איזון ורמת אשראי בבנק. אל תאבדו שליטה בהמון נתונים —
            דייקו את המעטים שמשפיעים על ההחלטות.
          </p>
        </SubSection>
        <SubSection title="4 · ניהול מלאי">
          <p>
            הכרחי להשקיע בדוח מלאי מדויק (בכמויות ובכסף). אם המלאי לא מנוהל נכון —
            העסק מפסיד. מלאי ישן עדיף למכור גם בהפסד ולהפוך למזומן, מאשר להניח לו
            לתפוס מקום במחסן.
          </p>
        </SubSection>
        <SubSection title="הנמלה והחרגול — רזרבות לימים קשים">
          <p>
            כמעט כל עסק חווה תנודתיות. אפיינו מראש את הסיכונים, ושמרו בצד רזרבה
            כספית של שלושה עד שישה חודשי הוצאות. אם תיכנסו לתקופה קשה בלי הכנה —
            ייתכן שהבנק לא יאשר הלוואה נוספת, וההידרדרות מהירה.
          </p>
        </SubSection>
        <SubSection title="מוצרי Loss Leaders">
          <p>
            מוצר שנמכר במחיר הפסד כדי למשוך לקוחות לחנות. שיטה לגיטימית — אבל יש
            לוודא שהמכירה הנלווית מכסה את ההפסד ומייצרת רווח.
          </p>
        </SubSection>
        <SubSection title="ניכיון כרטיסי אשראי">
          <p>
            ניכיון מאפשר לקבל את הכסף מיידית מחברת הסליקה תמורת עמלה. מתאים
            לתקופות של צורך חד־פעמי בתזרים — לא ככלי קבוע, כי העלות מצטברת.
          </p>
        </SubSection>
      </Section>

      <Section id="relations" title="הכול מתחיל ביחסים בינינו">
        <Callout>
          מיום ליום התחרות נעשית קשה יותר. הנאמנות והיחסים האישיים בינכם לסובבים
          את העסק הם גורמים הכרחיים להצלחתו. ביסוס יחסים קרובים עם הלקוחות, עם
          הספקים, ובעיקר עם העובדים — משפר מאוד את פעילות העסק.
        </Callout>
        <p>
          היו קשובים לסביבה העסקית שלכם, הבינו את הצרכים האמיתיים, והציעו את
          הפתרון הטוב ביותר. נסו ליצור <span dir="ltr">Win‑Win Situation</span>.
          הנאמנות שלהם היא הצלחת העסק שלכם.
        </p>
      </Section>
    </ChapterPage>
  );
}
