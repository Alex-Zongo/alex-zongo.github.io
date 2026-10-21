# Research project pages

The DASC publication pilots a standalone, sidebar-free project layout. Its URL and
publication-index entry are unchanged. The implementation is original Jekyll/Liquid
and CSS, inspired by the presentation of GCBF+ and Nerfies; it does not copy their
template code or bundle their frameworks.

## Enable on a paper

Keep the publication's existing front matter and add:

```yaml
layout: research-project
project: dasc
presentation: /talks/dasc-2026-runtime-safety-filtering
```

Create `_data/projects/<project>.yml`, using `dasc.yml` as the example. The layout
reads the paper's title, authors, resource URLs, citation, and BibTeX directly from
the publication. The data file supplies its research narrative:

- `venue`, `affiliation`, `subtitle`, `takeaway`, and `lead`: page introduction.
- `awards`: optional list of paper awards.
- `hero`: optional figure (`src`, `alt`, `caption`, `source_page`).
- `metrics` and `metrics_note`: optional results with their experimental context.
- `sections`: ordered sections with stable `id`, `nav`, `eyebrow`, `title`, and `text`.
- Each section can have `points`, a `figure`, and expandable `details` with figures.

Figures link to their full-resolution image. `source_page` links to the numbered
page of the publication's `slidesurl`. Provide descriptive alt text and a caption
that explains conditions, units, and any comparison limitations.

## Replace the DASC figures

The PNG files under `images/dasc/` are crops rendered directly from `files/DASC.pdf`:

| Image | Slide |
| --- | --- |
| `filter-architectures.png` | 6 |
| `filter-mechanisms.png` | 8 |
| `separation-results.png` | 10 |
| `bound-sensitivity.png` | 11 |
| `barrier-sensitivity.png` | 12 |

Replace an image at the same path, or update its `src` in the data file. Image
aspect ratios remain natural; the layout does not crop the figures. Original
research plots can replace these slide extracts without changing the template.

`assets/js/research-project.js` only adds citation copying. Navigation, figures,
and expandable results work without JavaScript. Copy feedback reports success
only after the clipboard operation succeeds.

To return a paper to the standard publication layout, remove its `layout` and
`project` overrides. All other publications continue using the standard layout.
# Maritime and non-slide sources

The maritime pilot uses `project: maritime`. A figure can specify `source_url`
and `source_label` instead of `source_page`; existing DASC slide links are
unchanged. Without either source, the source link is omitted.

Sections may include a `table` with `caption`, `headers`, `rows`, and an optional
`note`. Tables retain row/column headings and scroll within their own region on
small screens. The maritime figures are extracted from Figures 3 and 4 of its
linked preprint; the existing architecture image is Figure 1.

