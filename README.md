# Baher Mohammad — personal research profile

A responsive static portfolio built from CV_Baher.pdf. No dependencies or build step.

## Publish on GitHub Pages

1. Create a public repository named `BaherMh.github.io` in the `BaherMh` account.
2. Upload `index.html`, `style.css`, `script.js`, and `.nojekyll` to the repository root on `main`.
3. Open Settings → Pages. Select **Deploy from a branch**, **main**, **/(root)**, then Save.
4. Once deployment finishes, visit https://bahermh.github.io/.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit your profile

All professional content lives in `index.html`; styling is in `style.css`. Publication filters and the print button are in `script.js`. Updating the publishing branch redeploys the site.

Paper acceptance statuses, performance metrics, employment dates, and education are reproduced from the supplied CV. Paper/code URLs were not supplied, so the site does not invent them. MAVE remains marked under review. The phone number is omitted from the website. The print button produces a clean profile PDF through the browser; the original CV is not uploaded.

## Local preview

Open `index.html` directly, or run `python -m http.server 8765` from this folder and visit http://localhost:8765.
