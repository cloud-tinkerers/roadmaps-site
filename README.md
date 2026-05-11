# roadmaps.cloudtinkerers.com

[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://roadmaps.cloudtinkerers.com)  
[https://roadmaps.cloudtinkerers.com](https://roadmaps.cloudtinkerers.com)

A free, open, and community-focused roadmap hub for DevOps, Cloud, and modern engineering careers. Every roadmap is written in plain English for complete beginners — no jargon, no assumed knowledge, just clear direction. A subsidiary of [cloudtinkerers.com](https://cloudtinkerers.com).

## Project Overview

**Tagline:** "Your direction in the cloud. Step by step."

This is a standalone static website built to provide accessible guidance for entering the cloud engineering space. It runs purely on static HTML, CSS, and vanilla JavaScript without the need for frameworks, build tools, or a backend.

## Tech Stack

- **Frontend:** Pure static HTML, CSS, and vanilla JavaScript (no npm, no build tools, no dependencies)
- **Typography:** Google Fonts (DM Serif Display + DM Sans)
- **Deployment:** Vercel (Auto-deployed from the `main` branch via GitHub Actions)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy-vercel.yml`)
- **Backend/Database:** None (completely serverless and stateless)

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-vercel.yml      ← Auto-deploy to Vercel on push
├── .vercel/                       ← Vercel project config (do not edit)
├── assets/
│   ├── css/
│   │   └── style.css              ← Global styles, design system, all roadmap page components
│   └── js/
│       └── main.js                ← Navbar scroll, sidebar observer, scroll animations (vanilla JS)
├── index.html                     ← Landing page (home)
└── roadmaps/
    ├── devops-overview.html       ← Full DevOps overview (all 7 stages)
    ├── linux.html                 ← Stage 1: Linux & The Command Line
    ├── git.html                   ← Stage 2: Git & Version Control
    ├── scripting.html             ← Stage 3: Scripting Language
    ├── cloud.html                 ← Stage 4: Cloud Basics
    ├── docker.html                ← Stage 5: Docker & Containers
    ├── cicd.html                  ← Stage 6: CI/CD Pipelines
    ├── iac-monitoring.html        ← Stage 7: IaC & Monitoring
    └── devops/                    ← Legacy/alternate roadmap pages
        ├── index.html
        ├── 01-linux.html
        ├── 02-git.html
        ├── 03-scripting.html
        ├── 04-cloud.html
        ├── 05-docker.html
        ├── 06-cicd.html
        └── 07-iac-monitoring.html
```

## Current Roadmaps

The DevOps Roadmap Series consists of 8 interconnected pages:

| # | Roadmap | Stage | File |
|---|---|---|---|
| 1 | The DevOps Roadmap (overview) | Full 7-stage career path | `roadmaps/devops-overview.html` |
| 2 | Linux & The Command Line | Stage 1 of 7 | `roadmaps/linux.html` |
| 3 | Git & Version Control | Stage 2 of 7 | `roadmaps/git.html` |
| 4 | Scripting Language (Python, Bash, YAML, JSON) | Stage 3 of 7 | `roadmaps/scripting.html` |
| 5 | Cloud Basics (AWS, Azure, GCP) | Stage 4 of 7 | `roadmaps/cloud.html` |
| 6 | Docker & Containers | Stage 5 of 7 | `roadmaps/docker.html` |
| 7 | CI/CD Pipelines | Stage 6 of 7 | `roadmaps/cicd.html` |
| 8 | Infrastructure as Code & Monitoring | Stage 7 of 7 | `roadmaps/iac-monitoring.html` |

## Vercel Deployment

### How It Deploys

- Every push to the `main` branch automatically triggers a deployment to Vercel via the GitHub Actions workflow located in `.github/workflows/deploy-vercel.yml`.
- Because the site is pure static HTML with no build step, Vercel serves it directly — no build command is needed.
- The Vercel project configuration lives in `.vercel/project.json`. This file is committed to the repository and is not a secret (it only contains the project ID and organisation ID).

### Environment Variables

The following variables are stored in `.env.local` (never committed to the repository):

- `VERCEL_TOKEN` — Your Vercel personal access token
- `VERCEL_ORG_ID` — Your Vercel organisation/team ID
- `VERCEL_PROJECT_ID` — Your Vercel project ID

These three values must also be added as **GitHub Actions secrets** (Settings → Secrets and variables → Actions) with the exact same names so the deploy workflow can authenticate with Vercel.

### How to Set Up Deployment From Scratch

If you are forking this repository and want to set up your own deployment:

1. Fork or clone the repository
2. Create a new project on [vercel.com](https://vercel.com) and link it to the repo. Set the root directory to `/` and leave the build command blank (no build needed). Set the output directory to `/` as well.
3. In your Vercel account, generate a personal access token (Account Settings → Tokens)
4. Find your Org ID and Project ID in the Vercel dashboard or via the Vercel CLI (`vercel link`)
5. Add all three values as GitHub Actions secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
6. Push any change to `main` — GitHub Actions will trigger and deploy automatically
7. *(Optional)* Add a custom domain in Vercel's domain settings

### Custom Domain Setup

- In Vercel → Project Settings → Domains, add your custom domain (e.g., `roadmaps.cloudtinkerers.com`).
- In your DNS provider (Cloudflare, Namecheap, etc.), add a `CNAME` record pointing your subdomain to `cname.vercel-dns.com`.
- Vercel handles SSL/HTTPS automatically.

## Local Development

Because the site is pure static HTML, no server is needed for most work. Simply open `index.html` in a web browser.

For the best experience (ensuring proper relative paths and avoiding CORS issues), use a simple local server:

```bash
# Using Python
python3 -m http.server 8000
```

```bash
# Using Node (if installed)
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Design System

- **Colour palette:** `#7c3aed` (primary purple), `#f8f6ff` (soft bg), `#1a1a2e` (dark ink), `#6b7280` (muted text)
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via Google Fonts
- **Theme Variables:** Each roadmap page sets its own `--page-accent` CSS variable for its unique accent colour. The stage colours include orange, pink, purple, blue, green, amber, and teal.
- **Styling:** All styles and design tokens live in `assets/css/style.css`.
- **Scripts:** All JavaScript (scroll effects, sidebar observer) lives in `assets/js/main.js`.

## Contributing

This is an open, community-built project. Contributions are very much welcome:

- Fix typos or improve explanations in any roadmap.
- Add new roadmap pages (please follow the existing page structure and template used in the `/roadmaps/*.html` files).
- Improve styles or animations in `assets/css/style.css`.
- Raise issues for mistakes, outdated information, or suggestions.

**Contribution process:** Fork the repository → Make your changes → Open a pull request against the `main` branch. All PRs are reviewed before merging.

***

made with ✦ for the community