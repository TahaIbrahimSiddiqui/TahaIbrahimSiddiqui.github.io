import { siteData } from "./site-data.js?v=20260715a";
import { setupPage, initRevealAnimations } from "./site-shell.js?v=20260715a";

setupPage("packages");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#packages-page");
const linkAttributes = (url) => (/^https?:\/\//.test(url) ? ' target="_blank" rel="noreferrer"' : "");

const renderPackageCard = (item) => `
  <article class="resource-card">
    <div class="resource-card__body">
      <p class="resource-card__meta">${item.type} &middot; ${item.access}</p>
      <h2>${item.title}</h2>
      <p>${item.note}</p>
      <p><code>${item.install}</code></p>
      <ul class="resource-list">
        ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
      </ul>
      <p>${item.caveat}</p>
      <div class="card-links">
        <a class="text-link" href="${item.url}"${linkAttributes(item.url)}>PyPI package</a>
        <a class="text-link" href="${item.repositoryUrl}"${linkAttributes(item.repositoryUrl)}>GitHub repository</a>
        <a class="text-link" href="${item.doiUrl}"${linkAttributes(item.doiUrl)}>Zenodo DOI</a>
      </div>
    </div>
  </article>
`;

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Packages</p>
      <h1>${siteData.pageIntro.packages.title}</h1>
      <p class="compact-hero__body">
        ${siteData.pageIntro.packages.body}
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.packages.length}</strong>
        <span>package${siteData.packages.length === 1 ? "" : "s"}</span>
      </div>
      <div>
        <strong>MIT</strong>
        <span>open license</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="section-stack">
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Research tooling</p>
        <h2>Open-source packages for data work.</h2>
      </div>
      <div class="resource-grid">
        ${siteData.packages.map(renderPackageCard).join("")}
      </div>
    </section>
    <div class="contact-grid contact-grid--top-gap">
      <article class="contact-card">
        <p class="panel-card__kicker">Using AdminLineageAI</p>
        <p>
          AdminLineageAI is best treated as a careful assistant for administrative matching,
          not a replacement for human review. It is useful when datasets disagree on names,
          spellings, time periods, or administrative boundaries.
        </p>
      </article>
      <article class="contact-card contact-card--soft">
        <p class="panel-card__kicker">Related site</p>
        <p>
          For Indian datasets, access notes, variables, and documentation, open the public guide.
        </p>
        <ul class="resource-list">
          <li><a class="text-link" href="https://tahaibrahim.in/guidetoindiandata/">Guide to Indian Data</a></li>
          <li><a class="text-link" href="https://tahaibrahim.in/guidetoindiandata/adminlineage-ai/">AdminLineageAI guide page</a></li>
          <li><a class="text-link" href="mailto:${siteData.email}">${siteData.email}</a></li>
        </ul>
      </article>
    </div>
  </div>
`;

initRevealAnimations();
