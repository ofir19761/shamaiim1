import { describe, expect, it } from "vitest";
import source from "@/content/articles.json";
import { articles, categories, filterArticles, findArticle } from "@/content/articles";

describe("Original article archive", () => {
  it("contains all 56 articles with complete original paragraphs", () => {
    expect(articles).toHaveLength(56);
    expect(new Set(articles.map((article) => article.slug)).size).toBe(56);
    for (const original of source) {
      expect(findArticle(original.slug)?.content).toEqual(original.content.map((text) => text.replace(/\u2014/g, "-")));
    }
  });
  it("filters the four original categories", () => {
    expect(categories).toHaveLength(4);
    expect(filterArticles("", "ייעוץ פיננסי ותזרים מזומנים")).toHaveLength(28);
    expect(filterArticles("", "ניהול עסק מצליח")).toHaveLength(14);
    expect(filterArticles("", "יזמות ופיתוח העסק")).toHaveLength(7);
    expect(filterArticles("", "שיווק ומכירות")).toHaveLength(7);
  });
  it("searches article bodies and combines search with category filtering", () => {
    expect(filterArticles("בקשו מהנהלת החשבונות").map((article) => article.slug)).toContain("refresh-the-numbers");
    expect(filterArticles("בקשו מהנהלת החשבונות", "שיווק ומכירות")).toHaveLength(0);
    expect(filterArticles("zzzz-no-such-article")).toHaveLength(0);
    expect(filterArticles("   ")).toHaveLength(56);
  });
});