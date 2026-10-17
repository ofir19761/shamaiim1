import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, X, BookOpen } from "lucide-react";
import { SiteShell, meta } from "@/components/site/Layout";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { articles, categories, filterArticles } from "@/content/articles";

export const Route = createFileRoute("/articles")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
    category: typeof search.category === "string" ? search.category : "",
  }),
  head: () => meta("מאמרים עסקיים | שמיים - אופיר לוי", "56 מאמרים מקוריים מאת אופיר לוי על פיננסים ותזרים מזומנים, יזמות, ניהול עסק, שיווק ומכירות."),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { q, category } = Route.useSearch();
  const navigate = useNavigate({ from: "/articles" });
  const selectedCategory = categories.includes(category) ? category : "";
  const results = filterArticles(q, selectedCategory);
  const reset = () => navigate({ search: { q: "", category: "" }, replace: true, resetScroll: false });

  return (
    <SiteShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <p className="mb-4 text-sm font-bold text-slate">שמיים / ידע וניסיון</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold md:text-6xl">מאמרים</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">מחשבות, ניסיון וכלים מעשיים לעסק שלכם. מאת אופיר לוי.</p>
            </div>
            <p className="flex items-center gap-3 text-lg text-slate"><BookOpen className="size-6 text-gold" />{articles.length} מאמרים</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="mb-8 grid items-end gap-5 md:grid-cols-[1fr_320px]">
          <div>
            <label htmlFor="article-search" className="mb-2 block text-sm font-semibold">חיפוש במאמרים</label>
            <div className="relative">
              <Search className="pointer-events-none absolute right-4 top-4 size-5 text-muted-foreground" />
              <Input id="article-search" type="search" value={q} placeholder="מה מעניין אתכם?" className="h-13 bg-card ps-12 pe-12 text-base" onChange={(event) => navigate({ search: (previous) => ({ ...previous, q: event.target.value }), replace: true, resetScroll: false })} />
              {q && <Button variant="ghost" size="icon" aria-label="ניקוי החיפוש" className="absolute left-2 top-2" onClick={() => navigate({ search: (previous) => ({ ...previous, q: "" }), replace: true, resetScroll: false })}><X /></Button>}
            </div>
          </div>
          <div>
            <label id="category-label" className="mb-2 block text-sm font-semibold">קטגוריה</label>
            <Select dir="rtl" value={selectedCategory || "all"} onValueChange={(value) => navigate({ search: (previous) => ({ ...previous, category: value === "all" ? "" : value }), replace: true, resetScroll: false })}>
              <SelectTrigger aria-labelledby="category-label" className="h-13 bg-card text-base"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="all">כל הקטגוריות</SelectItem>{categories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{results.length} מאמרים{selectedCategory ? ` בקטגוריית ${selectedCategory}` : ""}</p>
          {(q || selectedCategory) && <Button variant="ghost" size="sm" onClick={reset}><X />ניקוי סינון</Button>}
        </div>
        {results.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{results.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : (
          <div className="py-20 text-center"><Search className="mx-auto mb-5 size-9 text-gold" /><h2 className="text-3xl font-bold">לא נמצאו מאמרים</h2><p className="mt-3 text-muted-foreground">אין תוצאות עבור החיפוש והקטגוריה שנבחרו.</p><Button variant="outline" className="mt-6" onClick={reset}>לכל המאמרים</Button></div>
        )}
      </section>
    </SiteShell>
  );
}
