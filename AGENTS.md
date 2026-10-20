<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the uploaded article JSON as the source-controlled content source and use a shared browser-safe article module for search and reading; this preserves the complete archive without requiring a database or hosted search.
- Use the un-nested `articles_.$slug.tsx` route for full article pages because the existing `/articles` page is a content leaf, not a layout.
- Serve site images from public/images via import.meta.env.BASE_URL, not Lovable Assets URLs. Why: /__l5e/ asset paths only exist on Lovable hosting and break on GitHub Pages.
- Share portrait rendering between About and the book resume through a single component with a compact variant so framing remains consistent across both contexts.

- Static hosting: vite.config.ts prerenders every route (incl. one page per article slug) with nitro disabled; GitHub Pages publishes dist/client. Why: GitHub Pages serves only static files.
