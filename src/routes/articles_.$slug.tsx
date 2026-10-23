import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Clock3 } from "lucide-react";
import { SiteShell, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articles, findArticle, readingMinutes } from "@/content/articles";

export const Route = createFileRoute("/articles_/$slug")({
  beforeLoad: ({ params }) => { if (!findArticle(params.slug)) throw notFound(); },
  head: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) return { ...meta("המאמר לא נמצא | שמים", "המאמר המבוקש אינו זמין במאגר המאמרים של שמים."), meta: [...meta("המאמר לא נמצא | שמים", "המאמר המבוקש אינו זמין במאגר המאמרים של שמים.").meta, { name: "robots", content: "noindex" }] };
    return { meta: [
      { title: `${article.title} | שמים - אופיר לוי` },
      { name: "description", content: article.summary },
      { property: "og:title", content: `${article.title} | שמים` },
      { property: "og:description", content: article.summary },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: () => <SiteShell><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="mb-6 text-4xl font-bold">המאמר לא נמצא</h1><Button asChild><Link to="/articles">חזרה למאמרים</Link></Button></div></SiteShell>,
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = findArticle(slug);
  if (!article) throw notFound();
  const related = articles.filter((item) => item.category === article.category && item.slug !== slug).slice(0, 3);

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <Button variant="link" asChild className="mb-8 px-0"><Link to="/articles"><ArrowRight />לכל המאמרים</Link></Button>
        <header className="mb-10 border-b border-border pb-8">
          <Link to="/articles" search={{ q: "", category: article.category }} className="text-sm font-bold text-slate hover:underline">{article.category}</Link>
          <h1 className="mt-4 break-words text-4xl font-bold leading-tight md:text-5xl">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span>מאת אופיר לוי</span>
            <span className="flex items-center gap-2"><Clock3 className="size-4" />{readingMinutes(article)} דקות קריאה</span>
          </div>
        </header>
        <div className="space-y-6 break-words text-lg leading-[2] [overflow-wrap:anywhere]">{article.content.map((paragraph, index) => <p key={index} className="whitespace-pre-line">{paragraph}</p>)}</div>
        <nav className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8" aria-label="ניווט מאמר">
          <Button variant="outline" asChild><Link to="/articles"><ArrowRight />חזרה למאמרים</Link></Button>
          <Button asChild><Link to="/contact">לתיאום פגישת היכרות<ArrowLeft /></Link></Button>
        </nav>
      </article>
      {related.length > 0 && <section className="bg-muted"><div className="mx-auto max-w-7xl px-6 py-14"><h2 className="mb-8 text-3xl font-bold">עוד באותו נושא</h2><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></div></section>}
    </SiteShell>
  );
}