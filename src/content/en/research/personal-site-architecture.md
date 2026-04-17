---
title: Information Architecture and Long-Term Maintenance for a Personal Content Site
summary: A stage summary of the current personal site project, focusing on content collections, bilingual routing, static deployment compatibility, and overall visual order.
date: 2026-03-21
kind: Report
venue: Lior / ABOYL-AIS Project Summary
cover: /favicon.jpg
coverAlt: Lior / ABOYL-AIS site favicon
tags:
  - Information Architecture
  - Static Publishing
  - Bilingual Routing
  - Editorial Design
featured: true
---

This is not a placeholder research entry. It is a real summary built around the current personal site project.

## Background

Personal sites often become unstable over time:

- more pages are added, but the structure is not reorganized
- content grows, but the data model stays unclear
- local visual sections work, while the whole site starts to feel like a stitched template
- deployment paths, bilingual routes, and static assets become fragile across environments

This project is a direct response to those issues.

## Current Approach

### 1. Start from content structure

The site separates public content into four collections:

- `projects`
- `research`
- `notes`
- `gallery`

This creates clear boundaries before the homepage, list pages, and detail pages start collapsing into a single mixed content bucket.

### 2. Keep bilingual routing simple

Chinese stays at the default root path, while English is grouped under `/en/`.

This keeps the default reading path clean and makes language switching easier to maintain. As long as the slugs stay aligned between languages, the structure can keep expanding without breaking.

### 3. Prioritize static deployment

The project is designed around a static-first workflow:

- predictable local builds
- direct deployment to GitHub Pages
- static-friendly deployment on Vercel

That makes maintenance cost, stability, and portability much easier to control.

### 4. Let visual tone serve content order

The project allows a personal tone, soft atmosphere, and anime-influenced visual hints, but all of that must support reading and information hierarchy instead of overpowering the content.

## Current Conclusion

So far, the project shows that:

- a content-oriented site does not need heavy interaction to feel distinctive
- a static structure can still carry a complete personal voice
- once content models, path strategy, and component relationships are stable, visual and copy refinement becomes much easier

## What Still Needs to Be Proven

- whether the information architecture remains stable after real content fully replaces placeholders
- whether the site can keep a unified tone across pages instead of drifting page by page
- whether bilingual content can remain synchronized over the long term
- whether Gallery, Projects, Research, and Notes can keep developing their own reading rhythm
