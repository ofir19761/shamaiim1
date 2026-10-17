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
- Reference uploaded portraits through Lovable Assets pointers so media stays off the source repository.
