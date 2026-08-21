# Katoria Lekarkar — Portfolio website

Source code for [www.klekarkar.com](https://www.klekarkar.com), a portfolio for Katoria Lekarkar, hydrologist and water resources engineer.

The website is hosted with ChatGPT Sites. The `.openai/hosting.json` file links this source project to the existing hosted Site; keep it in the repository.

## Where to edit content

| Page or element | File |
| --- | --- |
| Homepage | `app/page.tsx` |
| Project portfolio | `app/projects/page.tsx` |
| Research | `app/research/page.tsx` |
| Talks and teaching | `app/talks/page.tsx` |
| CV | `app/cv/page.tsx` |
| Shared navigation and footer | `app/site-chrome.tsx` |
| Colours, typography and responsive layout | `app/globals.css` |
| Page titles and social-sharing metadata | `app/layout.tsx` |
| Images and favicon | `public/` |

Most page content is stored in small arrays near the top of each page file. To add a project, talk or research item, copy one existing object, update its text and keep the same field names.

### Add a new project

Open `app/projects/page.tsx`, find `const projects = [` and copy one complete project object. Paste the copy inside the array and edit:

- `year`, `place` and `title`
- `image` for the picture shown on the project card (place the file in `public/projects/`)
- `copy` for the short text shown on the card
- `narrative` for the paragraphs revealed by the **+ Read project narrative** control
- optional `highlights` for outcome bullets
- `tags` and `tone` for the labels and card colour

Keep each paragraph in quotation marks and separate entries with commas.

Project images use `.webp` files for fast loading. A new image saved as `public/projects/my-new-project.webp` is referenced in the project object as `image: "/projects/my-new-project.webp"`.

### Add a new talk

Open `app/talks/page.tsx`, find `const talks = [` and copy one complete talk object. Edit its `year`, `place`, `title`, `event` and `narrative`. Each item in `narrative` becomes a separate paragraph inside the expandable section.

New objects appear in the same order as they are listed in the array, so place the newest item first.

### Replace the downloadable CV

Replace `public/Katoria_Lekarkar_CV.pdf` with the new PDF, keeping the same filename. The **Download CV** button on the CV page will update automatically.

## Work locally

Requirements:

- Node.js 22.13 or newer
- npm

Install and start the development server:

```bash
npm ci
npm run dev
```

Create a production build:

```bash
npm run build
```

## Publish an update

The Site is already linked to its ChatGPT Sites project. After editing and reviewing the source, open the project with Codex or ChatGPT Sites and ask it to publish the current version. Publishing updates the existing Site and custom domain; the Namecheap DNS records do not need to change again.

## Important files to preserve

- `.openai/hosting.json` — connects the repository to the hosted Site
- `package-lock.json` — keeps dependency versions reproducible
- `public/og.png` — social-sharing image

Do not commit `.env` files, `node_modules`, `.sites-runtime`, `dist` or `.wrangler`.
