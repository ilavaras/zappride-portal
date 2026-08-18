# Zappride Portal Patch

Overwrite these files in `ilavaras/zappride-portal`:

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `vercel.json`

Then run:

```bash
npm install
npm run build
```

If the build succeeds:

```bash
git add app/page.tsx app/globals.css app/layout.tsx vercel.json
git commit -m "Align public portal with live Zappride site and add portal routing"
git push
```

This keeps the repository as a Next.js app while matching the current live public website and adding context-path routing for Agent, Business Ops, IT Ops, Admin, and Investor.
