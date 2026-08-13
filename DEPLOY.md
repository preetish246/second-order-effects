# Deploying Second Order Effects to Cloudflare Pages

This site is plain HTML/CSS — no build step, no framework, nothing to install. That means deployment is just
"upload the folder," and once it's live it keeps running with zero maintenance from you or anyone else.

## Before you deploy: fill in the placeholders

Every `[bracketed]` note with a yellow highlight in `about.html` and each article in `articles/` is a spot where I
left a real detail for you to add (your university/role, a personal memory, your contact info). Search for the
word `placeholder` in each file, or just skim the pages in a browser — they're visually flagged. Replace them
before this goes live; a job application site should sound entirely like you.

## About this folder: leftover Next.js scaffold

This folder started as a `create-next-app` project before becoming this static site. There's still a
`node_modules/`, `app/`, `public/`, `package.json`, and a few config files sitting in it that are no longer used.
They're harmless (already excluded via `.gitignore` so they won't get pushed to GitHub), but delete them via
Finder whenever you have a minute — see the cleanup note in `README.md` for the exact list. **Do not select or
upload them in Option A below** — only upload the files listed in step 4. If your upload didn't include the `articles/` subfolder (a common
drag-and-drop issue — browsers sometimes don't recurse into folders), zip everything first: select
`index.html`, `about.html`, `contact.html`, `styles.css`, `script.js`, and the `articles` folder together in
Finder, right-click → **Compress**, and drag the resulting `.zip` into Cloudflare's upload box instead — it
extracts the zip and preserves the folder structure reliably.

## Option A: Fastest — drag-and-drop deploy (no GitHub needed)

1. Go to **dash.cloudflare.com** and log in (or create a free account).
2. In the left sidebar, click **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Give the project a name (e.g. `second-order-effects`).
4. Select and upload only: `index.html`, `about.html`, `contact.html`, `styles.css`, `script.js`, and the
   `articles/` folder.
   (Easiest way: copy just these into a fresh empty folder first, then drag that folder in — this avoids
   accidentally uploading the leftover `node_modules` etc.) Cloudflare will detect it's a static site automatically.
5. Click **Deploy site**. Within a minute you'll get a live URL like `second-order-effects.pages.dev` — that's your
   site, publicly live, immediately.

To update the site later (fix a typo, add a 7th article), you re-upload the folder from the same project page —
takes 30 seconds.

## Option B: GitHub-connected deploy (better if you'll keep editing)

1. Create a free GitHub account if you don't have one, and create a new repository (e.g. `second-order-effects`).
2. Upload these files to the repo (GitHub's web UI has a drag-and-drop uploader — no command line required — under
   "Add file" → "Upload files").
3. In Cloudflare dash → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, authorize GitHub, and
   pick the repo.
4. Build settings: leave the build command blank and set the output directory to `/` (root) — there's no build
   step for plain HTML.
5. Click **Save and Deploy**. From now on, any time you push a change to GitHub, Cloudflare redeploys automatically.

## Connecting second-order-effects.com

**If your domain is already registered with Cloudflare** (Cloudflare Registrar), this is trivial:
1. In your Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Enter `second-order-effects.com` (and optionally `www.second-order-effects.com`).
3. Cloudflare configures the DNS automatically since it already manages the domain. Live in a few minutes.

**If your domain is registered elsewhere** (GoDaddy, Namecheap, Google Domains, etc.):
1. In Cloudflare, add the domain as a new "site" first (dash.cloudflare.com → Add a site → enter
   `second-order-effects.com`) — this moves DNS management to Cloudflare while keeping your existing registrar.
2. Cloudflare will give you two nameservers (e.g. `xxx.ns.cloudflare.com`). Log into wherever you bought the
   domain, find the nameserver / DNS settings, and replace the existing nameservers with the two Cloudflare gives
   you.
3. Nameserver changes can take anywhere from a few minutes to 24 hours to propagate (usually much faster).
4. Once Cloudflare shows the domain as "Active," go back to your Pages project → **Custom domains** → add
   `second-order-effects.com`, and it will resolve to your site.

## Why this "keeps running" without you doing anything

Cloudflare Pages serves static files from its own global network — there's no server for you to restart, no
process that can crash, no bill that scales with a forgotten instance. As long as the domain's registration and
Cloudflare account stay active, the site stays up. This is the same reason static sites are the standard choice
for personal/portfolio sites that need to "just work" indefinitely.

## Setting up the contact form (contact.html)

The contact form uses Formspree — a free service that turns a plain HTML form into an email to you, with no
server or backend code. Takes about 3 minutes:

1. Go to **formspree.io** and sign up free.
2. Click **New Form**, name it (e.g. "Second Order Effects contact"), and create it. Formspree will show you an
   endpoint that looks like `https://formspree.io/f/abcd1234`.
3. Open `contact.html`, find the line `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>`,
   and replace `YOUR_FORM_ID` with the ID Formspree gave you (just the part after `/f/`).
4. Delete the yellow "Setup note" paragraph right above the form — it's just there as a reminder while you set this up.
5. Formspree's free tier includes 50 submissions/month and will ask you to confirm your first submission by email
   (a one-time verification step) — after that, every message submitted through the form lands directly in your
   inbox with the sender's name, email, and message.

## Adding a 7th (or 8th) article later

1. Copy any file in `articles/` as a template.
2. Update the `<title>`, date, headline, dek, and body content.
3. Add a new `<li class="post-item">` block to `index.html` linking to it (copy an existing block as a template).
4. Re-deploy (drag-and-drop again, or `git push` if you used Option B).
