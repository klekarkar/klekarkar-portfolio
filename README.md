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
