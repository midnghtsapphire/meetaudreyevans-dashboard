# Meet Audrey Evans — Dashboard

> Real-time analytics dashboard with multi-domain tracking, music industry tools, affiliate management, and business intelligence.

## Overview

The **MeetAudreyEvans Dashboard** is a fully standalone React application that serves as the central command center for Audrey Evans' business empire. It provides real-time analytics, multi-domain tracking, music production tools, cybersecurity intelligence, affiliate marketing management, and social media automation — all in one modern, colorful, ADHD-friendly interface.

## Features

### Core Modules
- **Business Performance Dashboard** — Revenue, clicks, conversion rates, and campaign metrics at a glance.
- **Music Production Suite** — AI stem separation, auto mastering, distribution tracking, copyright compliance, global trends, and promotion tools.
- **Cybersecurity Intelligence** — Real-time CVE tracking, threat detection, and vulnerability management.
- **Affiliate Marketing** — Automated link generation, performance tracking, and revenue optimization.
- **Social Media Automation** — Cross-platform scheduling, engagement tracking, and content management.
- **Business Analytics** — Revenue breakdown, traffic sources, monthly growth, and performance metrics.

### Blue Ocean Enhancements
- **Real-Time Analytics Widgets** — Live visitor counts, page views per minute, connection status, and auto-refreshing metrics with 5-second intervals.
- **Multi-Domain Tracking** — Monitor uptime, SEO scores, response times, organic traffic, SSL expiry, backlinks, and domain authority across all of Audrey's domains.
- **Visitor Geography Map** — Regional breakdown of active visitors.
- **Device Breakdown** — Mobile, desktop, and tablet usage analytics.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS 4 + Custom CSS |
| Animation | Framer Motion |
| Routing | React Router DOM 7 |
| Charts | Recharts |
| Icons | Lucide React |
| UI Components | Radix UI primitives |
| Real-Time | Socket.IO Client |

## Quick Start

### Prerequisites
- Node.js 22+ and pnpm

### Development
```bash
pnpm install
pnpm dev
# Open http://localhost:5173
```

### Production Build
```bash
pnpm build
pnpm preview
```

### Docker
```bash
# Production
docker-compose up -d

# Development with hot reload
docker-compose --profile dev up dashboard-dev
```

## Environment Variables

Copy `.env.example` to `.env` and configure your API keys and domain list.

## License

Proprietary — All rights reserved by Audrey Evans.

---

*Dashboard provided by free sources and APIs. Built with React, Vite, and Tailwind CSS.*
