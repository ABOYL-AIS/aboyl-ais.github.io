---
title: Dual Deploy Setup
summary: A static deployment setup prepared for both GitHub Pages and Vercel, keeping build paths and site URLs manageable over time.
year: "2026"
role: Deployment
cover: /images/covers/dual-deploy.svg
coverAlt: Dual Deploy Setup cover
tags:
  - GitHub Pages
  - Vercel
  - CI
featured: false
status: Ready
github: https://github.com/ABOYL-AIS/aboyl-ais.github.io
writeup: /projects/dual-deploy/
---

The deployment layer stays intentionally simple:

- Astro uses `static` output
- The site URL is controlled through environment variables
- GitHub Pages builds and deploys through a workflow
- Vercel stays on a zero-server static path
