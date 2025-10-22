# xbyali

**a slow, growing archive.**

Personal website featuring projects, writings, fragments, and ongoing work.

## Live Site

🌐 [https://xbyali.page](https://xbyali.page)

## Structure

- `/` - Landing page with hero
- `/library` - Full archive with tag-based connections
- `/about` - Personal introduction

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Content Collections

The site uses 4 content collections:

- **projects** (`src/content/projects/`) - Technical projects and research
- **writings** (`src/data/post/`) - Essays and reflections
- **archive** (`src/content/archive/`) - Experimental fragments
- **log** (`src/content/log/`) - Chronological updates

See example files in each folder for format.

## Deployment

Automatically deploys to GitHub Pages via GitHub Actions on push to `main`.

## Built With

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- Based on [AstroWind](https://github.com/onwidget/astrowind) template

## License

MIT
