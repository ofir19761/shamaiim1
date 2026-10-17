import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/services", label: "שירותים" },
  { to: "/about", label: "אודות" },
  { to: "/book", label: "הספר: ערך מוסף" },
  { to: "/articles", label: "מאמרים" },
  { to: "/contact", label: "צור קשר" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-baseline gap-2">
      <span className={`font-serif text-2xl font-bold ${light ? "text-pearl" : "text-navy"}`}>שמיים</span>
      <span className="text-gold">|</span>
      <span className={`text-sm ${light ? "text-pearl/70" : "text-muted-foreground"}`}>ייעוץ עסקי ופיננסי</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-navy/80 transition hover:text-gold" activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-elegant transition hover:brightness-110 lg:inline-block">
          לתיאום פגישת היכרות
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="תפריט">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-6 py-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold">{n.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="rounded-sm bg-gold px-5 py-3 text-center font-bold text-navy">לתיאום פגישת היכרות</Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-pearl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <Logo light />
          <p className="text-pearl/70 leading-relaxed">ייעוץ עסקי, פיתוח עסקי ופיננסי בהובלת אופיר לוי - מעל 20 שנות ניסיון בניהול כספים בכיר.</p>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-gold">ניווט</h4>
          <ul className="space-y-2 text-pearl/80">
            {nav.map((n) => (<li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>))}
            <li><Link to="/book/toc" className="hover:text-gold">תוכן עניינים לספר</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-gold">יצירת קשר</h4>
          <ul className="space-y-3 text-pearl/80">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /><a href="tel:0545606843" dir="ltr">054-5606843</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /><a href="mailto:Ofir@shamaiim.co.il">Ofir@shamaiim.co.il</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" />הבטחון 6, פתח תקווה</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-pearl/10 py-6 text-center text-sm text-pearl/50">© {new Date().getFullYear()} שמיים - ייעוץ עסקי ופיננסי. כל הזכויות שמורות לאופיר לוי.</div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
