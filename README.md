# Second Order Effects

A personal blog. Plain HTML/CSS, no build step, no framework, no dependencies.

## Structure

- `index.html` — homepage, lists all articles
- `about.html` — Who Am I page
- `contact.html` — contact form (see note in `DEPLOY.md` about setting up Formspree)
- `styles.css` — shared styles for every page
- `script.js` — the small scroll-in effect used across every page (progressive enhancement — site works fine without it)
- `articles/` — one HTML file per article

## Cleanup note

This repository is now a standalone static website. It contains only the files needed
for the live site: `index.html`, `about.html`, `contact.html`, `styles.css`,
`script.js`, `articles/`, plus supporting docs like `DEPLOY.md` and `COMMENTS.md`.

If you want to deploy the site, open `index.html` in a browser to preview; no build step
is required.

## Editing

Open any `.html` file in a text editor (VS Code, or even TextEdit) and edit directly —
there's nothing to compile or run. Open `index.html` in a browser to preview.

## Deploying

See `DEPLOY.md` for step-by-step Cloudflare Pages instructions and how to connect the
`second-order-effects.com` domain.

## Comments

Every article has a public comments section (powered by Giscus / GitHub Discussions) ready to go —
see `COMMENTS.md` for the 10-minute setup.
