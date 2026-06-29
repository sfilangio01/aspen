# Aspen McNealey Portfolio

Creative marketing portfolio built with React, Vite, Tailwind CSS v4, and lucide-react.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Admin editing

The live site includes an authenticated editor at `/admin`.

Editable content is stored in the public GitHub repository `sfilangio01/aspen-assets`:

- `content/site.json` stores text, colors, layout image selections, and section data.
- `media/` stores images uploaded from the admin.

The public site reads content through the Vercel API and image URLs are served through jsDelivr GitHub CDN. Server-side Vercel environment variables hold the admin password, session secret, and GitHub token; these are not committed to the repository.
