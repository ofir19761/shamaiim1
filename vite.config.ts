// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import articles from "./src/content/articles.json";

const staticPaths = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/articles",
  "/book",
  "/book/toc",
  "/book/preface",
  "/book/chapter-1",
  "/book/chapter-2",
  "/book/chapter-3",
  "/book/chapter-4",
  "/book/resume",
  ...(articles as { slug: string }[]).map((a) => `/articles/${a.slug}`),
];

export default defineConfig({
  nitro: { preset: "github_pages" },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: staticPaths.map((path) => ({ path })),
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
