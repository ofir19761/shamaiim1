import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Compass, LineChart, Rocket, Feather, Quote, ArrowLeft, CheckCircle2, BookOpen } from "lucide-react";
import { BOOK_SUBTITLE, BOOK_TITLE } from "@/content/book";

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-3 text-sm font-bold tracking-[0.2em] text-gold">{children}</p>;
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky text-pearl">
      <div className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Eyebrow>שמיים · ייעוץ עסקי, פיתוח עסקי ופיננסי</Eyebrow>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          להסתכל על העסק <span className="text-gold">מגבוה</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-pearl/80">
          ליווי אסטרטגי ופיננסי לבעלי עסקים ויזמים, מתוך ניסיון של למעלה מ־20 שנה בהנהלת כספים בחברות המובילות במשק. כדי שתנהלו עסק קטן - כמו עסק גדול.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="rounded-sm bg-gold px-8 py-4 font-bold text-navy shadow-elegant transition hover:brightness-110">בוא נדבר</Link>
          <Link to="/book" className="flex items-center gap-2 rounded-sm border border-pearl/30 px-8 py-4 font-semibold transition hover:border-gold hover:text-gold">
            <BookOpen className="h-5 w-5" /> לקריאת הספר אונליין
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Compass, t: "פיתוח עסקי ואסטרטגיה", d: "בניית תוכנית עסקית, זיהוי מנועי צמיחה, כניסה לשווקים חדשים ושותפויות אסטרטגיות." },
  { icon: LineChart, t: "ליווי וניהול פיננסי", d: "תזרים מזומנים, תקציב, תמחור, בקרה ודוחות ניהוליים - שקט פיננסי והחלטות מבוססות נתונים." },
  { icon: Rocket, t: "הכוונה וליווי ליזמים", d: "מהרעיון ועד ההשקה: בדיקת היתכנות, מודל עסקי, גיוס מימון וצעדים ראשונים בטוחים." },
  { icon: Feather, t: "תוכן ויצירת ערך", d: "הרצאות, סדנאות ותוכן מקצועי שמעניק לבעלי עסקים כלים מעשיים לצמיחה." },
];

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Eyebrow>תחומי השירות</Eyebrow>
      <h2 className="mb-14 max-w-2xl text-4xl font-bold md:text-5xl">ארבעה עוגנים לעסק יציב וצומח</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group relative rounded-sm border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-elegant">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition group-hover:bg-gold group-hover:text-navy">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-xl font-bold">{t}</h3>
            <p className="leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const stations = [
  { n: "Lee Cooper Jeans", r: "ניהול כספים בכיר" },
  { n: "ארומה תל אביב", r: "ניהול כספים בכיר" },
  { n: "Sack's", r: "ניהול כספים בכיר" },
];

export function About() {
  return (
    <section className="bg-muted">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 translate-x-6 translate-y-6 border border-gold" />
          <div className="relative flex aspect-[4/5] items-center justify-center bg-sky shadow-elegant">
            <span className="font-serif text-8xl text-gold">א.ל</span>
          </div>
        </div>
        <div>
          <Eyebrow>אודות</Eyebrow>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">אופיר לוי</h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            יועץ עסקי ופיננסי עם ניסיון של מעל 20 שנה בייעוץ עסקי ובניהול כספים בכיר בחברות מובילות. אופיר מביא לכל עסק את ארגז הכלים של ארגונים גדולים - בהתאמה אישית לגודל, לקצב ולאופי של העסק.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            הגישה שלו פשוטה: להכיר את העסק לעומק, לראות את התמונה המלאה, ולהיות שם בכל שלב.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stations.map((s) => (
              <div key={s.n} className="border-t-2 border-gold bg-card p-5">
                <p className="font-serif text-lg font-bold" dir="auto">{s.n}</p>
                <p className="text-sm text-muted-foreground">{s.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookCover() {
  return (
    <div className="mx-auto [perspective:1600px]">
      <div className="relative h-[420px] w-[290px] transition duration-700 [transform-style:preserve-3d] [transform:rotateY(22deg)] hover:[transform:rotateY(8deg)]">
        <div className="absolute inset-y-0 -left-[28px] w-[28px] origin-right bg-slate [transform:rotateY(-90deg)]" />
        <div className="absolute inset-0 flex flex-col justify-between bg-sky p-8 text-pearl shadow-elegant">
          <div className="h-px w-full bg-gold-grad" />
          <div>
            <p className="mb-2 text-xs tracking-[0.3em] text-gold">אופיר לוי</p>
            <h3 className="text-5xl font-black text-gold">{BOOK_TITLE}</h3>
            <p className="mt-4 text-sm text-pearl/80">{BOOK_SUBTITLE}</p>
          </div>
          <div className="h-px w-full bg-gold-grad" />
        </div>
      </div>
    </div>
  );
}

export function BookShowcase() {
  return (
    <section className="bg-navy text-pearl">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <BookCover />
        <div>
          <Eyebrow>הספר</Eyebrow>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">ערך מוסף - {BOOK_SUBTITLE}</h2>
          <blockquote className="mb-6 border-s-2 border-gold ps-5 font-serif text-2xl text-gold-soft">
            ״עסק טוב, בטווח הארוך, נבנה על יחסי גומלין טובים בין העסק לבין העובדים, הלקוחות, הספקים והקהילה.״
          </blockquote>
          <p className="mb-10 text-lg leading-relaxed text-pearl/75">
            ספר השראה והדרכה ליזמים, לעצמאים ולבעלי עסקים. חלק א׳ - ערכים ואידיאולוגיה: ככה בונים עסק. חלק ב׳ - מהלכה למעשה: הקמה וניהול פיננסי. הספר המלא זמין לקריאה כאן, באתר.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-bold text-navy transition hover:brightness-110">
            למתחם הספר <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <Quote className="mx-auto mb-8 h-12 w-12 text-gold" strokeWidth={1} />
      <p className="font-serif text-2xl leading-relaxed md:text-3xl">
        ״אופיר עבד בארגונים גדולים, הוא בעל ניסיון רב, מכיר לעומק את העסק שלי ומסתכל מגבוה. הוא רואה את התמונה המלאה. עם אופיר אני מתנהל כמו עסק גדול בעסק קטן: אני מקבל ממנו ייעוץ בכל מה שקשור לניהול העסק ופיננסים, ולא זז מילימטר בלעדיו. אופיר יודע לתמוך בי בכל שלב, הוא מכיר את העסק שלי כל כך טוב, ממש כמוני. אני בוטח בו ויודע שיחד נגיע רחוק״
      </p>
      <div className="mx-auto mt-8 h-px w-16 bg-gold" />
      <p className="mt-6 font-bold">יגל שמעיה</p>
      <p className="text-muted-foreground">מייסד ומנכ״ל גולד פארם - מוצרים לגיל השלישי</p>
    </section>
  );
}

const articles = [
  { t: "תזרים מזומנים: הדופק של העסק", d: "למה עסק רווחי יכול לקרוס, ואיך בונים תחזית תזרים שמונעת הפתעות.", tag: "פיננסים" },
  { t: "חמישה הרגלים של עסק מצליח", d: "ההבדל בין עסק ששורד לעסק שצומח טמון בשגרה הניהולית.", tag: "ניהול" },
  { t: "שותפויות עסקיות: לפני שחותמים", d: "הסכם שותפות טוב נכתב ביום שכולם אוהבים זה את זה.", tag: "אסטרטגיה" },
  { t: "תמחור נכון בלי לפחד", d: "איך מחשבים עלות אמיתית ומציבים מחיר שמשקף את הערך.", tag: "פיננסים" },
  { t: "הבנק הוא שותף, לא אויב", d: "כך תנהלו שיחה עם הבנקאי ותשיגו תנאי אשראי טובים יותר.", tag: "מימון" },
  { t: "מיזם ראשון: מה לבדוק", d: "רשימת בדיקה ליזמים לפני שמשקיעים את השקל הראשון.", tag: "יזמות" },
];

export function Articles({ limit = 6 }: { limit?: number }) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>מאמרים נבחרים</Eyebrow>
        <h2 className="mb-14 text-4xl font-bold md:text-5xl">ידע שמייצר ערך</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(0, limit).map((a) => (
            <article key={a.t} className="group flex flex-col rounded-sm bg-card p-8 transition hover:shadow-elegant">
              <span className="mb-4 w-fit text-xs font-bold tracking-widest text-gold">{a.tag}</span>
              <h3 className="mb-3 text-2xl font-bold transition group-hover:text-slate">{a.t}</h3>
              <p className="flex-1 leading-relaxed text-muted-foreground">{a.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  first: z.string().trim().min(1, "נא למלא שם פרטי").max(50),
  last: z.string().trim().min(1, "נא למלא שם משפחה").max(50),
  phone: z.string().trim().regex(/^[0-9+\-\s]{9,15}$/, "מספר טלפון לא תקין"),
  email: z.string().trim().email("כתובת אימייל לא תקינה").max(255),
  message: z.string().trim().max(1000, "עד 1000 תווים"),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(r.data.first);
  }

  const field = "w-full rounded-sm border border-input bg-background px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";
  const F = ({ name, label, type = "text" }: { name: string; label: string; type?: string }) => (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input name={name} type={type} className={field} dir={type === "tel" || type === "email" ? "ltr" : undefined} />
      {errors[name] && <span className="mt-1 block text-sm text-destructive">{errors[name]}</span>}
    </label>
  );

  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <Eyebrow>צור קשר</Eyebrow>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">נתחיל בשיחת היכרות</h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">ספרו לי בקצרה על העסק שלכם, ואחזור אליכם לתיאום פגישה ללא התחייבות.</p>
        <ul className="space-y-3 text-lg">
          <li><a href="tel:0545606843" dir="ltr" className="hover:text-gold">054-5606843</a></li>
          <li><a href="mailto:Ofir@shamaiim.co.il" className="hover:text-gold">Ofir@shamaiim.co.il</a></li>
          <li>הבטחון 6, פתח תקווה</li>
        </ul>
      </div>
      <div className="rounded-sm border border-border bg-card p-8 shadow-elegant lg:col-span-3 md:p-10">
        {sent ? (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-500">
            <CheckCircle2 className="mb-6 h-16 w-16 text-gold" strokeWidth={1.2} />
            <h3 className="mb-3 text-3xl font-bold">תודה, {sent}!</h3>
            <p className="max-w-sm text-muted-foreground">ההודעה התקבלה. אחזור אליך בהקדם לתיאום פגישת היכרות.</p>
            <button onClick={() => setSent(null)} className="mt-8 text-sm font-semibold text-slate underline-offset-4 hover:underline">שליחת הודעה נוספת</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">{F({ name: "first", label: "שם פרטי" })}{F({ name: "last", label: "שם משפחה" })}</div>
            <div className="grid gap-5 sm:grid-cols-2">{F({ name: "phone", label: "טלפון", type: "tel" })}{F({ name: "email", label: "אימייל", type: "email" })}</div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">הודעה</span>
              <textarea name="message" rows={5} className={field} />
              {errors['message'] && <span className="mt-1 block text-sm text-destructive">{errors['message']}</span>}
            </label>
            <button className="w-full rounded-sm bg-navy py-4 font-bold text-pearl transition hover:bg-slate">שליחה</button>
          </form>
        )}
      </div>
    </section>
  );
}

export function PageTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="bg-sky text-pearl">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-pearl/75">{sub}</p>
      </div>
    </section>
  );
}
