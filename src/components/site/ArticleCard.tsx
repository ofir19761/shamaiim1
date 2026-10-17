import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readingMinutes, type Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-md border border-border bg-card p-7 transition-shadow hover:shadow-elegant">
      <p className="mb-4 text-sm font-semibold text-slate">{article.category}</p>
      <h3 className="mb-4 break-words text-2xl font-bold leading-snug">
        <Link to="/articles/$slug" params={{ slug: article.slug }} className="transition-colors hover:text-slate">{article.title}</Link>
      </h3>
      <p className="mb-6 line-clamp-3 leading-relaxed text-muted-foreground">{article.summary}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-4" />{readingMinutes(article)} דקות קריאה</span>
        <Button variant="link" asChild className="px-0 font-bold"><Link to="/articles/$slug" params={{ slug: article.slug }}>לקריאת המאמר<ArrowLeft /></Link></Button>
      </div>
    </article>
  );
}