# Editing Hive Metric website content

Every file in this folder is plain JSON. Edit these to update the site — no code changes needed. After saving, redeploy (or restart `npm run dev` locally) to see changes.

| File | Controls |
|---|---|
| `site.json` | Company info, nav links, footer links, contact email/phone, social links, SEO defaults |
| `services.json` | The 8 service cards in the Services section |
| `why-us.json` | The "Why Hive Metric" section heading + 4 differentiator points |
| `process.json` | The "Our Process" numbered steps |
| `portfolio.json` | Case studies shown in the Case Studies section AND the full Portfolio page. See below to add a new project. |
| `testimonials.json` | Client testimonial quotes |
| `industries.json` | The "Industries We Serve" grid |
| `faqs.json` | FAQ accordion questions/answers |
| `founder.json` | Founder bio, photo, quote |
| `results.json` | The animated stat counters in the Results & Metrics section |
| `section-content.json` | Every section's heading copy (eyebrow/title/description) — Hero, About, Services, Process, Case Studies, Results & Metrics, Testimonials, Industries, FAQ, Contact, Founder label, and the Portfolio page header. Edit here instead of hunting through component files. |

## Adding a new Portfolio / case study entry

Open `portfolio.json` and copy this block into the array (add a comma after the previous entry):

```json
{
  "slug": "unique-url-slug",
  "client": "Client Name",
  "isSample": false,
  "category": "Meta Ads",
  "industry": "Industry name",
  "title": "Short project headline",
  "summary": "One or two sentence summary shown on the portfolio grid card.",
  "featuredImage": "/portfolio/unique-url-slug/cover.jpg",
  "problem": "What was broken or missing before you got involved.",
  "approach": "The strategy you designed to fix it.",
  "execution": "The specific tactics, tools, and deliverables.",
  "metrics": [
    { "value": "3.2x", "label": "ROAS increase" },
    { "value": "58%", "label": "Lower cost per lead" }
  ],
  "testimonialQuote": "A short client quote about the results.",
  "testimonialAuthor": "Name, Title, Company",
  "gallery": ["/portfolio/unique-url-slug/1.jpg", "/portfolio/unique-url-slug/2.jpg"],
  "featured": true,
  "date": "2026-01"
}
```

**`category` must be one of:** `Meta Ads`, `Automation`, `CRM`, `Sales Systems`, `Analytics`, `Funnel Optimization` — these power the filter buttons on the Portfolio page. Add a new category string here and it will automatically appear as a new filter.

**Images:** drop screenshots/dashboards/before-after images into `public/portfolio/<slug>/` and reference them with a path starting `/portfolio/...`. If `featuredImage` is `null` or omitted, the card automatically shows a branded placeholder instead of a broken image — so it's safe to add a case study before you have screenshots ready.

**`featured: true`** shows the project in the homepage "Case Studies" preview (only the first 3 featured items are shown there). All entries, featured or not, always appear on the full `/portfolio` page.

## The `isSample` flag — important

Every case study currently shipped in `portfolio.json`, and every quote in `testimonials.json`, is placeholder content and has `"isSample": true`. This shows a visible **"Illustrative example"** badge on the card, the case study page, and the testimonial — so nothing reads as a real client claim.

**When you replace a placeholder with a real client project or real testimonial, delete the `"isSample": true` line (or set it to `false`) for that entry.** Never leave fabricated metrics, quotes, or client names marked as real — that's a false-advertising risk, not just a style issue.
