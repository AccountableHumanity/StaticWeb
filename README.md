# Accountable Humanity

Static marketing site for [Accountable Humanity](https://accountablehumanity.org) — public infrastructure for a more accountable, more human internet.

## Structure

```
accountable-humanity/
├── index.html              # Main single-page site
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # Responsive nav logic
├── how-it-works/
│   └── index.html          # Registration & membership detail page
├── the-rules/
│   └── index.html          # Rules detail page
├── sustainability/
│   └── index.html          # Financial model detail page
├── governance/
│   └── index.html          # Governance detail page
├── open-source/
│   └── index.html          # Licensing detail page
├── images/                 # Static image assets
└── README.md
```

## Pages

### Main Page (`index.html`)

Single-page overview with the following sections:

- **The Problem** — The cost of consuming content never decreases
- **The Network** — What we're building and why
- **How It Works** — Registration, biometrics, and membership fee
- **The Rules** — The three rules of the network
- **Sustainability** — Interest-only financial model
- **Governance** — LLC to public benefit corporation transition
- **Open Source** — AGPL-3.0 core, MIT SDKs

### Detail Pages

Each section of the main page links to a detail page for expanded content. Detail pages share the same nav, styles, and footer as the main page.

## Features

- Responsive navigation — horizontal links on desktop, hamburger dropdown on mobile
- Waitlist popup powered by [Tally](https://tally.so) — triggered from the nav and hero on every page
- No frameworks, no build step, no dependencies

## Color Scheme

| Role | Value |
|---|---|
| Brand / Primary | `#165256` |
| Background | `#ffffff` |
| Dark | `#111111` |

## Development

Open `index.html` directly in a browser — no build step required.

## Deployment

This site is designed for GitHub Pages:

1. Push to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root directory
4. The site will be live at `https://<username>.github.io/<repo-name>/`

## License

This project is licensed under the [GNU Affero General Public License v3.0 (AGPL-3.0-only)](https://www.gnu.org/licenses/agpl-3.0.html).
