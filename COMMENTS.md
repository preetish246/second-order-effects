# Setting up public comments (Giscus)

Every article already has a "Comments" section wired up with placeholder values — you just need to connect it to
a GitHub repo. This takes about 10 minutes.

**One thing to know upfront:** to leave a comment, a visitor needs a free GitHub account and signs in with it —
there's no anonymous "just type your name" box. That's the tradeoff for a comment system with zero backend, zero
cost, and built-in spam resistance (no bots, no login walls you have to build yourself). If that's a dealbreaker,
say so and I'll set up something else instead — but for a site aimed at recruiters and people who follow markets,
this is a low-friction ask.

## Step 1: Get your site into a public GitHub repository

Giscus reads comments from GitHub Discussions, so your site's repo needs to live on GitHub and be **public**.

1. Go to **github.com**, sign in (or create a free account).
2. Click the **+** in the top right → **New repository**.
3. Name it `second-order-effects`, set visibility to **Public**, and click **Create repository**.
4. On the new repo's page, click **uploading an existing file**, then drag in `index.html`, `about.html`,
   `contact.html`, `styles.css`, and the `articles/` folder (don't include `node_modules`, `app`, `public`, or the
   other Next.js leftovers mentioned in `README.md`). Commit the upload.

*(If you already set this repo up for Option B in `DEPLOY.md`, skip to Step 2 — you're already here.)*

## Step 2: Turn on Discussions

1. On your repo page, click **Settings** (top tab bar).
2. Scroll down to the **Features** section.
3. Check the box next to **Discussions**.

## Step 3: Create a "Comments" category

1. Go to the **Discussions** tab on your repo (now visible since you enabled it).
2. Find the category list on the right sidebar and click the pencil/edit icon (**Edit categories**).
3. Click **New category**. Name it `Comments`. For the format, choose **Announcement** — this means only you (or
   giscus, acting on your behalf) can start new discussion threads, so visitors can comment on articles but can't
   spin up unrelated threads elsewhere in your repo.
4. Save.

## Step 4: Install the giscus app on your repo

1. Go to **github.com/apps/giscus**.
2. Click **Install**.
3. Choose **Only select repositories**, pick `second-order-effects`, and confirm.

## Step 5: Generate your embed code at giscus.app

1. Go to **giscus.app**.
2. Under **Repository**, type `your-github-username/second-order-effects`. Wait for the green checkmarks
   confirming the repo is public, Discussions is enabled, and the giscus app is installed.
3. Under **Page ↔️ Discussions Mapping**, choose **"Discussion title contains page pathname"** — this makes giscus
   automatically create a separate comment thread per article based on its URL, with zero extra config per page.
4. Under **Discussion Category**, select **Comments** (the one you made in Step 3).
5. Leave the rest as default, or tweak theme/reactions to taste.
6. Scroll to the bottom of the page — giscus.app now shows a `<script>` snippet with your actual repo ID and
   category ID filled in. Copy the whole thing.

## Step 6: Paste it into your articles

Each file in `articles/` already has this block near the bottom (search for `giscus` to find it fast):

```html
<div class="comments">
  <h3>Comments</h3>
  <script src="https://giscus.app/client.js"
          data-repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
          data-repo-id="YOUR_REPO_ID"
          data-category="Comments"
          data-category-id="YOUR_CATEGORY_ID"
          ...
  </script>
</div>
```

Replace just the `<script>...</script>` tag with the one giscus.app generated for you in Step 5 — it's the exact
same snippet for all six articles, since giscus figures out which thread belongs to which page automatically.

## Step 7: Redeploy and test

- If you're on GitHub-connected Cloudflare Pages (Option B in `DEPLOY.md`): push the updated files to GitHub and
  it redeploys automatically.
- If you're on drag-and-drop (Option A): re-upload the updated files.
- Open a live article, scroll to the bottom. You should see a "Sign in with GitHub to comment" box. Sign in and
  post a test comment — check that it shows up both on the site and as a new thread under your repo's Discussions
  tab.

## Moderating comments later

Every comment is just a reply inside a GitHub Discussion on your repo. To delete or hide one, go to your repo's
**Discussions** tab, open the thread for that article, and delete/hide the reply — same permissions as moderating
any GitHub Discussion.
