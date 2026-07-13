# Taha Ibrahim Siddiqui - GitHub Pages site

This repository contains a no-build static site for GitHub Pages. It is designed to publish cleanly from the root of the `main` branch at:

`https://tahaibrahim.in/`

## Publishing

1. Push changes to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow deploys the static artifact to GitHub Pages.

## AdSense

The site includes the AdSense script directly in each HTML page.

Set these under **Settings -> Secrets and variables -> Actions -> Variables**:

- `NEXT_PUBLIC_ADSENSE_CLIENT`: `ca-pub-...`
- `ADSENSE_PUBLISHER_ID`: `pub-...` or the numeric publisher id

The workflow writes root `ads.txt` during deployment. Google expects `ads.txt` at `https://tahaibrahim.in/ads.txt`.

## Updating content

Most content lives in `assets/js/site-data.js`. Edit that file to update:

- profile copy
- research entries
- writing entries
- resources
- gallery images

The site uses plain HTML, CSS, and vanilla JS. There is no build step and no Node dependency.
