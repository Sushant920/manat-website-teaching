# Manat

Landing + contact site for **Manat** coaching (Chembur, Mumbai).

Built as an npm-workspaces monorepo with the Next.js app in `apps/web`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docs

Full product/context brief for humans and agents: [`docs/PROJECT_CONTEXT.md`](./docs/PROJECT_CONTEXT.md).

## Enquiry emails (Resend)

Forms send to **manatgupta1157@gmail.com** via Resend.

1. Create a free API key at [resend.com](https://resend.com) (sign up with that Gmail).
2. Local:

```bash
cp apps/web/.env.example apps/web/.env.local
# Edit apps/web/.env.local and set RESEND_API_KEY=re_...
```

3. Restart `npm run dev`, submit an enquiry, check the inbox (and spam).

## Deploy (Vercel)

1. Import this repo.
2. Set **Root Directory** to `apps/web` (recommended).
3. Add env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `apps/web/.env.example`).
