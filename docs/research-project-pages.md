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


## Add a demo

Demos can replace the overview figure (`demo:` at the top level of the project file), sit in
any section (`media:` inside a section), or replace a thrust figure on the Research page
(`demo:` on a thrust in `_data/research.yml`). Four types are supported by
`_includes/project-media.html`:

```yaml
demo:
  type: video          # local clip; autoplays muted and loops like a GIF
  src: /images/cdc/rollout.mp4
  poster: /images/cdc/rollout.jpg
  caption: "Robust policy at R = 0.35, 40 aircraft. Simulation, not flight data."

media:
  type: youtube        # YouTube video id only
  src: dQw4w9WgXcQ
  caption: "..."

media:
  type: iframe         # interactive page you build, e.g. demos/<name>/index.html
  src: /demos/separation/index.html
  height: 560
  caption: "Drag the corruption rate R and watch separation degrade."

media:
  type: widget         # an include in _includes/widgets/, like the GenAI explorables
  src: diffusion-toy.html
  caption: "..."
```

Keep clips short (under 10 s, under 3 MB, H.264 MP4), always supply a still `poster`, and state
the conditions in the caption. Interactive demos should be self-contained static HTML/JS in
`demos/<name>/` so they work on GitHub Pages.

Other section fields: `equation` (LaTeX, display math) with `equation_note`, `figures` (a list
of two figures shown side by side), and top-level `acknowledgement` and `figures_credit`.

## Animated schematic figures

Figures live in `_includes/figures/<name>.html` as inline SVG animated with SMIL, styled by
`_sass/_figures.scss` (theme-aware colors; small text is hidden in homepage thumbnails).
`assets/js/figures.js` pauses them off screen and for visitors who prefer reduced motion.

Use one with `type: figure` and `src: <name>` (overview `demo:` or section `media:`), as a
homepage thumbnail with `thumb_figure: <name>` in a paper's front matter, or as `animation:`
on a Research thrust. Current figures:

| Figure | Used for |
| --- | --- |
| `hero-airspace` | Homepage banner |
| `robust-marl`, `cdc-observation`, `cdc-game`, `cdc-closed-form`, `cdc-regularizers` | CDC 2026 |
| `runtime-safety` | DASC 2026 |
| `foundation-models`, `sim2lang` | Research thrust 3, CVPR-W 2026 |
| `colregs` | OCEANS 2026 |
| `atc-dialogue` | SciTech 2027 (LLM ATC) |
| `aam-energy`, `icns-mvp`, `icns-bounds` | ICNS 2026, Research thrust 4 |
| `ftc-attitude` | ICGNC 2024 |

Conventions: viewBox 640×300 for section figures (480×300 for thrust/thumbnail figures), prefix
element ids with the figure name, caption every schematic as "Schematic", and never present
illustrative curves as measured data.
