# Freetime Maker · Portfolio

The source code for my personal portfolio at **[free-time.me](https://free-time.me)** — a showcase of my web and Android applications, open-source work, and development interests.

[Website](https://free-time.me) · [GitHub](https://github.com/FreetimeMaker) · [Contact](mailto:FreetimeMaker@proton.me)

## Overview

The portfolio brings together selected projects, the languages and tools I work with, and links to my wider ecosystem of apps and resources.

- **Selected projects** — application previews, concise descriptions, and links to the source code.
- **About** — my approach to development and the technologies I use.
- **Resources** — access to Luma Store, my F-Droid repository, blog, documentation, and dashboard.
- **Contact** — direct links to email and GitHub.

The site features a responsive layout, light and dark themes, keyboard focus indicators, a skip-to-content link, and reduced-motion support. Search metadata, structured person data, a sitemap, and robots directives are included.

## Featured projects

- **[GeoWeather](https://github.com/FreetimeMaker/GeoWeather)** — a weather application with location search and a companion web experience.
- **[SuperSMP Companion](https://github.com/FreetimeMaker/SuperSMP-Companion-App)** — an Android companion for exploring community shops and maps.
- **[Luma Store](https://github.com/FreetimeMaker/Luma-Store-Android)** — an Android app store for discovering and managing applications from supported sources.
- **[Dualist](https://github.com/FreetimeMaker/Dualist)** — a task management application for organizing everyday work.

## Technology

- **Next.js 16** with the App Router
- **React 19** and **TypeScript**
- **Tailwind CSS 4** and custom CSS
- **ESLint** with the Next.js configuration
- **GitHub Actions** for the Pages deployment workflow

Exact dependency versions are tracked in `package.json` and `package-lock.json`.

## Getting started

### Prerequisites

Install Node.js and npm. The repository's GitHub Actions workflow uses **Node.js 26**; use the same major version for consistency with CI.

### Local development

From the repository root, install the locked dependencies and start the development server:

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Changes to the application files are reflected automatically during development.

### Production build

```sh
npm run build
npm run start
```

`npm run build` creates the production build. `npm run start` serves it locally using the Next.js server.

### Linting

```sh
npm run lint
```

## Project structure

```text
app/
  page.tsx              Portfolio content and project data
  layout.tsx            Root layout, shared metadata, and theme setup
  globals.css           Design tokens, layout, and responsive styles
  robots.ts             Robots directives
  sitemap.ts            Sitemap generation
components/
  theme-provider.tsx    Theme state and context
  theme-toggle.tsx      Theme switch control
public/
  images/               Project previews and technology icons
  Icons/                Favicons and web manifest
.github/workflows/
  nextjs.yml            GitHub Pages build and deployment workflow
```

## Updating the portfolio

- **Content and projects:** edit `app/page.tsx`. The `projects`, `technologies`, and `links` arrays define the main collections.
- **Visual design:** edit `app/globals.css`. CSS variables in `:root` and `html.dark` control the light and dark palettes.
- **Images:** add assets to `public/images/` and reference them with `/images/your-file.png`.
- **Metadata and branding:** update `app/layout.tsx` and the page metadata in `app/page.tsx`.
- **Domain changes:** review `CNAME`, metadata URLs, structured data, `app/sitemap.ts`, and `app/robots.ts` together.

## Deployment

The workflow in `.github/workflows/nextjs.yml` runs on pushes to `main` and can also be triggered manually. It configures GitHub Pages, installs dependencies, builds the site, and uploads the `out/` directory for deployment.

GitHub Pages requires a **static export**. The workflow uses `actions/configure-pages` with Next.js support to configure the Pages build. The local `next.config.ts` does not explicitly enable `output: "export"`, so a normal local build is intended for `npm run start` rather than producing `out/`.

If you change the hosting setup, ensure the Next.js output mode matches the deployment target. A server build needs a Next.js-compatible host; Pages needs exported static files.

## Contact

Questions about a project or interested in collaborating?

- **Email:** [FreetimeMaker@proton.me](mailto:FreetimeMaker@proton.me)
- **GitHub:** [@FreetimeMaker](https://github.com/FreetimeMaker)
- **Support:** [donation.free-time.me](https://donation.free-time.me)

## License

Licensed under the **GNU General Public License v3.0 only** (`GPL-3.0-only`). See [LICENSE.txt](LICENSE.txt) for the full terms.
