import source from "./articles.json";

export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  category: string;
}

const punctuation = (text: string) => text.replace(/\u2014/g, "-");

export const articles: Article[] = source.map((article) => ({
  slug: article.slug,
  title: punctuation(article.title),
  date: article.date,
  summary: punctuation(article.summary),
  content: article.content.map(punctuation),
  category: article.category,
}));

export const categories = [...new Set(articles.map((article) => article.category))];

function normalize(text: string) {
  return text.toLocaleLowerCase("he").normalize("NFKD").replace(/[\u0591-\u05C7]/g, "");
}

export function filterArticles(query = "", category = "") {
  const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
  return articles.filter((article) => {
    if (category && article.category !== category) return false;
    const text = normalize([article.title, article.summary, article.category, ...article.content].join(" "));
    return words.every((word) => text.includes(word));
  });
}

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function readingMinutes(article: Article) {
  return Math.max(1, Math.ceil(article.content.join(" ").split(/\s+/).length / 200));
}