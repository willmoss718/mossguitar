# Will Moss Guitar

A simple Next.js portfolio foundation for Will Moss, an NYC guitarist offering session guitar, loops, textures, and collaboration.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

## Edit Site Content

Most homepage copy and links live in:

```text
src/content/siteContent.ts
```

Edit this file to change:

- headline and bio
- demo titles, descriptions, tags, and links
- video links
- photo paths and alt text
- gear list
- services
- email
- Instagram and social links
- SEO title, description, and Open Graph image

## Add Photos And Images

Put image files in:

```text
public/images
```

Then reference them from `src/content/siteContent.ts` with paths like:

```ts
"/images/studio.jpg"
```

The current SVG files are lightweight placeholders and can be replaced later with real photos.

## Add Audio

Put short demo files in:

```text
public/audio
```

Then link to them from `src/content/siteContent.ts` with paths like:

```ts
"/audio/rnb-loop.mp3"
```

You can also link demos to Spotify, SoundCloud, Dropbox, or private streaming links.

## Add Spotify, YouTube, Or SoundCloud Embeds Later

For now, demo and video cards are simple links. Later, you can replace those link cards with embeds:

- YouTube: use the video share URL or embed iframe.
- SoundCloud: use the SoundCloud share/embed code.
- Spotify: use the Spotify embed code for a track, playlist, or artist page.

Keep the source URLs in `src/content/siteContent.ts` so the homepage stays easy to edit.

## Deploy On Vercel

1. Push this repo to GitHub.
2. Import `willmoss718/mossguitar` in Vercel.
3. Vercel should detect Next.js automatically.
4. Use the default settings:
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output: handled by Next.js

After deployment, update `metadataBase` in `src/app/layout.tsx` if the production domain is not `https://mossguitar.vercel.app`.
