# Bence Szilágyi — Portfolio

A focused, static Next.js 14 portfolio for Bence Szilágyi, a software engineer and product builder.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

In GitHub, set **Settings -> Pages -> Build and deployment -> Source** to
**GitHub Actions**. Push to `main`, and the workflow will build the static
export and publish the `out` folder.

For a root/custom-domain Pages site, no extra config is needed. For a project
page like `https://username.github.io/repo-name/`, add a repository variable
named `NEXT_PUBLIC_BASE_PATH` with the value `/repo-name`, and optionally set
`NEXT_PUBLIC_SITE_URL` to `https://username.github.io`.

The default public URL is `https://new.szilagyibence.com`, matching the copied
`public/CNAME` file from the old site. Remove or edit `public/CNAME` if you do
not want to use that custom domain.
