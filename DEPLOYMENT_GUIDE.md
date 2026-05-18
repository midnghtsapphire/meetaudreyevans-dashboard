# Deployment Guide

This guide provides a production-ready deployment path for the Meet Audrey Evans Dashboard.

## 1) Prerequisites
- Node.js 22+
- pnpm (via `corepack enable`)
- Docker + Docker Compose (optional container deployment)

## 2) Local Verification
```bash
corepack enable
corepack pnpm install
corepack pnpm build
```

## 3) Production Build
```bash
corepack pnpm build
```
Build output is generated in `/dist`.

## 4) Container Deployment
```bash
docker-compose up -d
```
This uses the included `Dockerfile`, `docker-compose.yml`, and `nginx.conf`.

## 5) Cloud Deployment (Recommended)
- Use any static hosting provider that supports Vite artifacts from `/dist`.
- Configure environment values from `.env.example` before release.
- Serve `index.html` with SPA fallback routing enabled.

## 6) Release Checklist
- [ ] `corepack pnpm build` passes
- [ ] `corepack pnpm lint` reviewed (known legacy lint debt can be tracked separately)
- [ ] `.env` is not committed
- [ ] Domain, TLS, and analytics are verified in production
- [ ] Public review URL is published for stakeholders

## 7) Review Link
Set the deployed review URL here once published:

`https://<your-production-domain>`
