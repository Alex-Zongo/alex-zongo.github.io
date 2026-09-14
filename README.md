# Alex B. Zongo — academic website

Jekyll / Academic Pages site. Canonical domain: https://alexzongo.com (connection pending). GitHub Pages repository: Alex-Zongo/alex-zongo.github.io.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

## Updating content

- Homepage and news: `_pages/about.md`; introduction banner: `_includes/home-hero.html`.
- Publications: `_publications/`. Keep `type` accurate (`conference`, `journal`, `accepted`, `preprint`, `under-review`, or `research-essay`); update citations and links when status changes. Preserve existing permalinks.
- Presentations: `_talks/`; add slides and posters to `files/` and link the corresponding paper.
- Teaching and mentoring: `_teaching/`; update the period and description when an appointment changes.
- CV: replace `files/cv.pdf`. The `/cv/` page links to this canonical document; legacy CV routes redirect there.
- Writing: `_posts/`. Unfinished notes use both `draft: true` and `published: false`. When ready, remove both flags and set the publication date. A private draft preview can be built with `bundle exec jekyll serve --unpublished`; never deploy that output.

Before publishing, run `bundle exec jekyll build`, review affected pages, and check material links. Keep acceptance, publication, and presentation dates distinct. Update homepage news when a milestone occurs.

## Research record review — September 14, 2026

Sources: the existing `files/cv.pdf`, the author's updates, and linked arXiv records. Google Scholar blocked automated access, so a complete Scholar reconciliation remains outstanding.

- Added OCEANS 2026 and two SciTech 2027 accepted works. No proceedings DOI, publication day, or acceptance day has been inferred. For new accepted entries, `date` records when the entry was added; `publication_year` and `date_label` control the public display.
- Preserved all four authors on the CDC paper, as listed by arXiv:2603.28900; the PDF CV currently lists only Zongo and Wei. The PDF should be corrected at its source.
- The ICNS published title follows the CV; its preprint uses a different title. The publisher link was extracted from the PDF, but publisher access was blocked during review.
- DASC presentation day is not yet specified. The talk displays the conference date range; add `slidesurl` when the presentation is available and update its `status` and tense after the talk.
- The Berkeley follow-up manuscript is described as in preparation on the homepage; add a publication entry once its title and author list are ready.

## Presentation and accessibility

- Mark up to three papers `featured: true` and set `feature_order` to choose homepage research cards.
- The homepage shows four recent news items; older news remains under “Earlier news.”
- Demo pages, sample portfolio entries, and the unreviewed template privacy policy are excluded through `_config.yml`; their source files remain available.
- Publication filters and citation disclosures use `assets/js/publications.js`. Navigation keyboard support is in `assets/js/accessibility.js`.
- The profile video is user-controlled, and animations respect reduced-motion preferences.

Review completed: desktop and 320/400 px mobile layouts in Chrome; light/dark cards, topic filtering, citation expansion, mobile menu, and keyboard theme activation. Generated-page checks cover internal links, disclosure targets, publication counts, and demo-page exclusion. This is a targeted review, not a full accessibility audit.
