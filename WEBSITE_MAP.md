# DeepRank Website — Complete Site Map

This document is a full reference for the DeepRank marketing website: every route, every page's content/sections, every image asset and where it's used, shared components, and site-wide functionality. Read this first to understand the whole site before making changes.

## 1. Tech Stack

- **React 19** + **Vite 8**, client-side routed with **react-router-dom v7** (`BrowserRouter`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`) for all styling — no CSS modules, mostly utility classes inline
- **recharts** — all dashboards/graphs (line/area charts)
- **framer-motion** — scroll/entry animations (used in `AmishaHealing.jsx`, some others)
- **swiper** — carousel on the Case Study listing page (`Swiper`/`SwiperSlide`, Navigation/Pagination/Autoplay modules)
- **react-icons** (`hi`, `hi2`, `si`, `fa`, `bs` icon sets) — all icons across the site
- **@emailjs/browser** — sends the Discovery Call booking form via EmailJS (no backend)
- **react-google-recaptcha** — CAPTCHA on the booking form
- **@fontsource/inter** — Inter font, loaded in `main.jsx`

Entry point: [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx) (defines all routes) → renders `Navbar` + `DiscoveryModal` + `Routes` + `Footer` on every page.

### Environment variables (`.env`, not committed to docs — see actual `.env` for values)
Used only in [src/components/DiscoveryModal.jsx](src/components/DiscoveryModal.jsx):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` (email sent to DeepRank team)
- `VITE_EMAILJS_TEMPLATE_ID_USER` (confirmation email sent to the visitor)
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_RECAPTCHA_SITE_KEY`

---

## 2. Project Structure

```
react-deeprank/
├── public/                  # favicon.svg, icons.svg only — almost no static images live here
├── src/
│   ├── assets/               # ALL image assets (PNG), imported directly into components (Vite bundles them)
│   ├── components/           # Shared, reused across multiple pages
│   ├── context/               # ModalContext — global discovery-call modal open/close state
│   ├── data/                  # Static content data (case study copy, dashboard tab labels)
│   ├── pages/                  # One file per route (see routing table below)
│   ├── sections/               # Reusable page sections composed into pages (Hero, CTA, Process, etc.)
│   ├── App.jsx                 # Router + route table
│   ├── main.jsx                 # App entry, mounts <App/>, loads Inter font
│   ├── App.css / index.css        # Global styles, Tailwind entry, marquee/mega-menu animation keyframes
├── .env                          # EmailJS + reCAPTCHA secrets (not documented here)
```

Note: `git-recovery-backup-20260626144445/` at the project root contains a stray backup copy of `DiscoveryModal.jsx` — not part of the live app, safe to ignore.

---

## 3. Routing Table

All routes are defined in [src/App.jsx](src/App.jsx). Every route renders inside `<Navbar/>` … `<Routes>` … `<Footer/>`, with `<DiscoveryModal/>` mounted globally (opened via `ModalContext`, not route-based).

| Route | Page Component | File |
|---|---|---|
| `/` | Home (inline: `Hero` + `AIFeature` + `Products` + `Industries` + `Process` + `CaseStudies` + `CTA`) | composed in `App.jsx` from `src/sections/*` |
| `/ai-automation` | AIAutomation | `src/pages/AIAutomation.jsx` |
| `/seo` | SEO | `src/pages/SEO.jsx` |
| `/case-study` | CaseStudy (main case-study listing/hub page) | `src/pages/CaseStudy.jsx` |
| `/custom-solutions` | CustomSolutions | `src/pages/CustomSolutions.jsx` |
| `/digital-marketing` | DigitalMarketing | `src/pages/DigitalMarketing.jsx` |
| `/web-development` | WebDevelopment (imported as `WebDevlopment`) | `src/pages/WebDevelopment.jsx` |
| `/software-development` | Softwaredevelopment | `src/pages/Softwaredevelopment.jsx` |
| `/nft-development` | NftDevelopment | `src/pages/NftDevelopment.jsx` |
| `/case-study/tsamuel-estate` | TsamuelCaseStudy | `src/pages/TsamuelCaseStudy.jsx` |
| `/case-study/amisha-healing` | AmishaHealing | `src/pages/AmishaHealing.jsx` |
| `/case-study/yogalife` | Yogalife | `src/pages/Yogalife.jsx` |
| `/case-study/gubeluxe` | GubeLuxe | `src/pages/GubeLuxe.jsx` |
| `/case-study/lumani-systems` | LumaniSystem | `src/pages/LumaniSystem.jsx` |
| `/case-study/ais-utilities` | AisUtilities | `src/pages/AisUtilities.jsx` |
| `/case-study/exademy` | Exademy | `src/pages/Exademy.jsx` |
| `/case-study/drryn` | DRRYN | `src/pages/DRRYN.jsx` |
| `/case-study/rewari-handicrafts` | RewariHandicrafts | `src/pages/RewariHandicrafts.jsx` |

**Known inconsistency:** the case-study card for "T Samuel Estate" on the Home page (`src/sections/CaseStudies.jsx`) links to `/case-study/tsamuel-estate-agents`, which does **not** match the real route `/case-study/tsamuel-estate` — that link is broken (404s to nothing, since there's no catch-all/404 route defined either). Everywhere else (`CaseStudy.jsx` listing page) correctly links to `/case-study/tsamuel-estate`.

There is **no 404 / catch-all route** — unmatched paths render just Navbar+Footer with no content.

---

## 4. Global / Shared Components (`src/components/`)

### `Navbar.jsx`
Sticky header, present on every page. Logo "DR / DeepRank" → links home.
- **Products mega-menu** (hover/click "Products"): lists 3 products (Swolio, Tasku, CRMforU — note these display names differ slightly from `Products` section's "Sowlio/TaskfU/EasyCRM"), a "Why Choose Us" panel, and a mini dashboard mockup. Purely presentational — no real links besides "View All Products"/"Book a Free Call" buttons (non-functional, no `onClick`).
- **Services mega-menu** (hover/click "Services"): grid of 7 service cards that `Link` to the 7 service routes (`/ai-automation`, `/seo`, `/digital-marketing`, `/software-development`, `/web-development`, `/nft-development`, `/custom-solutions`), plus a "Featured Service" sidebar promoting AI Automation, plus 4 category columns (AI & Automation, Growth Marketing, Development, Emerging Tech — these are text labels only, not links).
- "Case Study" nav item → `/case-study`.
- "Contact Us" nav item and "Book Discovery Call" button → both call `openModal()` from `ModalContext` (open the `DiscoveryModal`).
- Mobile: hamburger menu with the same 4 items (Products/Services here are non-expanding labels, not functional on mobile), plus a "Book Discovery Call" CTA button.

### `Footer.jsx`
Present on every page (dark navy `#1c2b48`, large "DeepRank" watermark text).
- 3 link columns: **Solutions** (Templates, Resume Builder, Pricing, Examples), **Products** (Blog, Help Center, Guides, API Docs), **Company** (About Us, Careers, Contact, Privacy) — all `href="#"`, **non-functional placeholder links**.
- **Contact Us** column: `mailto:info@deeprank.com`, `tel:+919332949176`.
- Social icons: Instagram, LinkedIn, X, YouTube — buttons with no `href`/`onClick` (decorative only).
- Copyright: "© 2026 DeepRank. All rights reserved."

### `DiscoveryModal.jsx` — the site's core conversion mechanism
A full-screen modal (portal to `document.body`), opened from anywhere via `useModal().open()` (Navbar buttons, Hero/CTA "Book a Call" buttons, case-study page CTAs, etc.). Closed via Escape key, backdrop click, or the × button.

5-step booking form:
1. **Select Service** — one of: AI Automation, SEO, Digital Marketing, Web Development, Software Development, NFT Development, Custom Solutions.
2. **Project Details** — Full Name*, Business Name, Email*, Phone, Website URL, Project Description.
3. **Choose a Date** — custom calendar widget (month navigation, disables past dates), starts on July 2026.
4. **Select a Time** — 9 fixed slots from 10:00 AM–06:00 PM IST.
5. **Additional Info (optional)** — "How did you hear about us?" dropdown, newsletter opt-in checkbox.

Right sidebar (desktop only): live booking summary, "What happens next" 3-step explainer, contact info (`+91 976641 3245`, `hello@deeprank.com`, hours Mon–Fri 9–7 IST), and 3 trust badges (Secure & Confidential, Expert Consultation, No Obligation).

**Submission**: validated client-side (service, name, email format, date, time, reCAPTCHA all required) → on submit, sends **two** EmailJS emails using the same template pair: one to the internal team address (`ash.shri982@gmail.com`, hardcoded) and one confirmation to the user's own email. On success shows a "Booking Confirmed" message and auto-closes/resets after 3s. No backend/database — EmailJS + reCAPTCHA are the entire pipeline.

### `CaseStudyFAQ.jsx`
Reusable "case study teaser + FAQ accordion" section, driven entirely by a `data` prop (see `src/data/caseStudies.js`). Used at the bottom of `AIAutomation.jsx` (with `aiAutomationCaseStudy`) and `SEO.jsx` (with `seoCaseStudy`). Renders: badge, title, description, 2 stat callouts, a "phone mockup" image with a floating animated bar-chart stat card, and an FAQ accordion (single-open) driven by `data.faqs`.

### `DashboardChart.jsx`
Small reusable dark-themed line chart (recharts) plotting `performanceData` from `src/data/dashboardTabs.js` (conversations per day, Mon–Sun). Used inside `DashboardShowcase.jsx`.

### `SEOAnalyticsDashboard.jsx`
Self-contained SEO-page-only dashboard section (not reused elsewhere). Left panel: 3 toggle buttons (Keyword Tracking / Technical SEO / Content Optimization) that swap the displayed metrics on the right (Organic Traffic, Keywords Ranked, CTR, Conversion Rate) plus a 6-month organic-traffic line chart (hardcoded `seoChartData`, Jan–Jun). Used only in `SEO.jsx`.

---

## 5. Context (`src/context/ModalContext.jsx`)
`ModalProvider` wraps the whole app in `App.jsx`. Exposes `useModal()` → `{ isOpen, open(), close() }`, consumed by `Navbar`, `Hero`, `CTA`, `DiscoveryModal`, and every case-study/service page's "Book Discovery Call" buttons. This is the **only** global app state — everything else is local component state.

---

## 6. Reusable Sections (`src/sections/`)

These are composed into multiple pages (not 1:1 with routes):

| Section | File | Used on | Purpose |
|---|---|---|---|
| `Hero` | `Hero.jsx` | Home only | Full-bleed image (`hero5.png`) with headline "BuiLding The Future of Business" [sic], animated counter (0→100+), "Book a Call"/"Explore Solutions" buttons, marquee of trusted-company logos (Google, Microsoft, Binance, Airbnb, Meta, Stripe — react-icons brand icons, not real logos/images) |
| `AIFeature` | `AIFeature.jsx` | Home only | 4-tab image showcase (AI Solutions / Automation / Web Develop / Marketing) using `hero3.png`, `automation.png`, `heroweb.png`, `Manufacturing.png` |
| `Products` | `Products.jsx` | Home only | 3 product cards: Sowlio, TaskfU, EasyCRM (images `Sowlio.png`, `Taskfu.png`, `EasyCRM.png`) — all "Explore" buttons non-functional |
| `Industries` | `Industries.jsx` | Home, `AIAutomation.jsx`, `CustomSolutions.jsx` (has its own separate local copy of an `Industries` component inside that file) | 5 industry cards (Real Estate, Healthcare, Manufacturing, Utilities, E-commerce) + a stats bar (100+ Projects, 20+ Industries, Global Clients, AI First) |
| `Process` | `Process.jsx` | Home, `AIAutomation.jsx`, `DigitalMarketing.jsx`, `WebDevelopment.jsx`, `Softwaredevelopment.jsx`, `NftDevelopment.jsx` (also `CustomSolutions.jsx` has its own local `Process` variant) | 5-step "Discover → Design → Develop → Automate → Scale" horizontal timeline |
| `CaseStudies` | `CaseStudies.jsx` | Home only | 3 featured case cards (all currently reuse `hero4.png` as image and "Real Estate"/"8x Increase in Leads" copy for all 3 — placeholder/unfinished content), links to `/case-study` and the broken `/case-study/tsamuel-estate-agents` link noted above |
| `CTA` | `CTA.jsx` | **Every** page (Home + every service page + every case-study page) as the closing section | "Let's Build the Future Together" + Book a Discovery Call / Explore Solutions buttons |
| `DashboardShowcase` | `DashboardShowcase.jsx` | `AIAutomation.jsx` only | Dark "AI Showcase" panel: 3 selectable tabs (AI Chatbot / Sales Assistant / Support Hub from `dashboardTabs.js`), metric tiles (Total Conversations, Resolved, Resolution Rate, Avg Response), and embeds `DashboardChart` |

---

## 7. Data Files (`src/data/`)

- **`caseStudies.js`** — exports `aiAutomationCaseStudy` and `seoCaseStudy`, each an object of `{ badge, title, description, stats[], image, floatingCard{}, cta, faqBadge, faqTitle, faqDescription, faqs[] }` consumed by `CaseStudyFAQ`. Both currently reuse the same image (`seo.png`) since `automation` is aliased to `seo.png` too (see comment in file — `hero4` import is dead/commented out).
- **`dashboardTabs.js`** — exports `dashboardTabs` (3 tab labels for `DashboardShowcase`) and `performanceData` (7-day conversation counts for `DashboardChart`).

---

## 8. Page-by-Page Content Breakdown

### Home (`/`) — composed in `App.jsx`
`Hero` → `AIFeature` → `Products` → `Industries` → `Process` → `CaseStudies` → `CTA`. (See section table above for each.)

### `/ai-automation` — `AIAutomation.jsx`
Hero: "Build an **AI** Workforce." + animated counter + `robot.png` illustration. "The Problem" stat bar (40% time on repetitive tasks / 60% queries handled manually / 24/7 expectation). "AI Solutions That Drive Results" — 4 cards: AI Chatbots (`chatbot.png`), AI Voice Agents (`voice-agent.png`), Workflow Automation (`workflow.png`), AI Knowledge Systems (`knowledge.png`). Then `DashboardShowcase` → `Industries` → `Process` → `CaseStudyFAQ` (with `aiAutomationCaseStudy`) → `CTA`.

### `/seo` — `SEO.jsx`
Hero: "Rank Higher. **Get Found.** Grow Faster." + `seo.png` illustration. "SEO Advantage" stat bar (90% higher organic traffic / 3X more leads / 70% lower acquisition cost). 4 solution cards reusing the AI-automation images (`chatbot.png`, `voice-agent.png`, `workflow.png`, `knowledge.png`) but relabelled: Keyword Research, On-Page SEO, Technical SEO, Local SEO. Then `SEOAnalyticsDashboard` → `Industries` → `Process` → `CaseStudyFAQ` (with `seoCaseStudy`) → `CTA`.

### `/digital-marketing` — `DigitalMarketing.jsx`
Hero: "Marketing That **Drives Real Growth.**" + a large "Performance Overview" stats/chart mockup (Total Spend, Conversions, ROAS, Revenue + a recharts revenue line chart with hardcoded `marketingData`). "Marketing Channels" — 7 channel cards (Meta Ads, Google Ads, LinkedIn Ads, SEO, Social Media, Video Marketing, More). "Complete Digital Marketing Solutions" — 6 service cards (Paid Advertising, Social Media Marketing, Content & Creative, Conversion Optimization, Tracking & Analytics, Email Automation). Stats strip (200% ROAS, 2.5X leads, 60% lower CPA, 150% revenue, 4+ months retention). `Process` section. Case study block ("E-Commerce Brand Growth", image `digitalmarketing.png`) + testimonial (Sarah Johnson, CEO Urban Store). `CTA`.

### `/web-development` — `WebDevelopment.jsx`
Hero: "Websites Built **For Growth.**" + `heroweb1.png` + floating stats card (200+ Websites, 98% Satisfaction, 1.5s Load Speed). "Why Choose Us" 4-card row. "End-to-End Web Development Services" — 6 service cards (Custom Website Design, Web App Development, E-Commerce Experiences, Cloud-Ready Integrations, Performance & Security, Conversion-Driven Pages). "Modern Technologies" strip (React, Next.js, WordPress, Shopify, Webflow, PHP, Laravel, Node.js, MongoDB, AWS — text badges only). Stats bar (200+/98%/1.5s/40%+). "Our Recent Work" — 4 portfolio cards using `hero.png`, `hero1.png`, `hero3.png`, `hero4.png` (Skyline Residences, Urban Vogue, TaskPro Dashboard, Nexora Solutions — placeholder project names). `Process`. Case study block (image `webdev1.png`) + FAQ list (non-expanding, just +/- icons). `CTA`.

### `/software-development` — `Softwaredevelopment.jsx`
Hero: "Software Built For Your Business. **Solutions Built To Scale.**" + a fake analytics dashboard mockup with an SVG line path (not a real chart). "Why Choose DeepRank" 4-item row. "Software Development Services" — horizontally-scrolling row of 6 service cards (Custom Software Dev, Web App Dev, Mobile App Dev, Enterprise Software, SaaS Product Dev, API & System Integrations). "Technologies We Build With" — 8 emoji-icon tech badges (React, Angular, Node.js, PHP, Python, MySQL, AWS, Docker) in a dark strip. Stats row (100+/98%/40%/60%/99.9%). "Custom Software. Real Impact." — 3 project cards with real images: E-Commerce Platform (`chatbot.png`), Healthcare Portal (`knowledge.png`), CRM Automation System (`workflow.png`) — note these reuse AI-automation imagery, likely placeholder. A large SaaS-case-study + FAQ section exists in the code but is **commented out** (not rendered). `Process` → `CTA`.

### `/nft-development` — `NftDevelopment.jsx`
Hero: "NFTs Built For **The Future.**" + a stats card (150+ NFT Projects, 10+ Blockchains, 100% Audited Contracts) — no hero image, just the stat panel. "End-to-End NFT Development Services" — 6 cards (Smart Contracts, Marketplace Development, Generative Art & Metadata, Blockchain Integration, Security & Auditing, Launch & Minting Portal). "Built On Proven Chains" tech strip (Ethereum, Polygon, Solana, BNB Chain, Avalanche, IPFS, Hardhat, OpenZeppelin, Moralis, Alchemy). Stats bar (150+/$50M+/10+/98%). FAQ list (4 questions, non-expanding +/- rows). `Process` → `CTA`.

### `/custom-solutions` — `CustomSolutions.jsx`
Largest/most animated page — has its own **local** copies of `Hero`, `Industries`, `Process` (not the shared `src/sections` versions). Scroll-reveal (`IntersectionObserver`) animations throughout.
- Hero: "Your Challenge. **Our Custom** Solution." + a dark "Challenge → DeepRank Engineers → Goals" flow diagram (no photo images, pure UI mockup).
- Benefits: 4 cards (Business Focused, Scalable & Future Ready, Secure & Reliable, Agile & Transparent).
- Solutions Grid: **12** solution types (Process Automation, Custom Platforms, Data & Analytics, AI-Powered Solutions, API Integrations, Legacy Modernisation, Cloud Infrastructure, Mobile Applications, E-commerce Solutions, Security & Compliance, Business Intelligence, SaaS Development).
- Tech marquee: 16 scrolling tech badges (React, Next.js, Node.js, Python, TypeScript, AWS, Azure, .NET, PostgreSQL, MongoDB, Docker, Kubernetes, GraphQL, Redis, Flutter, Terraform).
- Stats bar (100+/98%/40%/60%/99.9%).
- Industries: 7 cards using `hero4.png`, `hero1.png`, `hero2.png`, `hero3.png`, `hero5.png` (Real Estate, Healthcare, E-Commerce, Manufacturing, Finance, Education, & More).
- Process: 5-step list next to a "Custom CRM Solution" live dashboard mockup.
- FAQ: 5-question accordion (functional, single-open).
- `CTA`.

### `/case-study` — `CaseStudy.jsx` (the case-study **hub/listing** page)
This is the largest page, entirely self-contained (own `HeroStats`, `FeaturedCase`, `CaseGrid`, `ImpactSection`, `IndustrySection`, `StatsBar`, `Testimonials` components defined in-file).
- **HeroStats**: "Results That **Speak For** Themselves." + 4 stat tiles (100+ Solutions, 20+ Years, 500+ Campaigns, Global Reach) + a live area chart (`growthData`, traffic/leads Jan–Jun).
- **FeaturedCase**: Swiper carousel (autoplay, 3.5s) cycling through all **9** case studies as full-bleed dark slides, each with 3 stat callouts and a "View Full Case Study" link to its detail route.
- **CaseGrid**: filterable grid (industry pills: All/Real Estate/Healthcare/E-Commerce/Manufacturing/Hospitality/Education/Finance) of all 9 case study cards, each linking to its detail page.
- **ImpactSection**: dark section with animated progress bars (Traffic 85%, Organic 72%, Advertising 60%, Conversions & Revenue 90%) + a 3-line recharts chart (`impactData`).
- **IndustrySection**: clickable industry-filter image cards (All, Real Estate, Healthcare, Education, Manufacturing, Hospitality, E-Commerce) — filtering is local UI-only, doesn't actually filter `CaseGrid` above it.
- **StatsBar**: 6 stats (2,400+ Leads, 30+ Industries, 46.30% Avg Conversion Lift, 11,200+ Hours Automated, 140+ Campaigns, 12.3X Average ROI).
- **Testimonials**: 4 client quotes (James Brown/Estate Agency, Dr. Sarah Mitchell/Health Clinic, Michael Roberts/AG UK, Lua Pang/Luxury Hotels), paginated 2-at-a-time.
- `CTA`.

### The 9 individual case study detail pages
All follow the **same template pattern**: breadcrumb (Home → Case Studies → [Name]) → hero (title + growth headline + description + tag pills + "Book Discovery Call") → info bar (Industry/Location/Duration/Services) → tab nav (Overview/About/Strategy/Results/Testimonial — mostly cosmetic, `Yogalife.jsx` is the only one that actually scroll-links the tabs to page anchors) → About/Challenge/Before-stats 3-column → Our Strategy 5-step cards → Services Used pills → What We Did checklist + client quote → Results (4 metric cards with mini area-charts + a combined line chart) → Related Case Studies (3 cards) → closing CTA banner → global `CTA`.

| Page | File | Title / Headline stat | Industry | Location | Duration | Hero image |
|---|---|---|---|---|---|---|
| Tsamuel Estate Agents | `TsamuelCaseStudy.jsx` | 340% Growth In Organic Traffic | Real Estate | Wales, UK | 8 Months | `tsamuelestate.png` |
| Amisha Healing Hub | `AmishaHealing.jsx` (uses `framer-motion`, different layout w/ sidebar-less anchored sections) | 250% Growth In Patient Appointments | Healthcare | Mumbai, India | 4 Months | `healing.png` |
| Yogalife Global | `Yogalife.jsx` (sticky sidebar tab nav, scroll-to-anchor) | 120% Growth In Organic Traffic | Yoga Education | Global | 5 Months | `yogalife.png` |
| GubeLuxe | `GubeLuxe.jsx` | Luxury E‑commerce Growth +256% Revenue | Luxury Retail | UK | 9 Months | `gebeluxe.png` |
| Lumani Systems | `LumaniSystem.jsx` | 300% Increase In Leads | Enterprise Software | EMEA | 10 Months | `lumani.png` |
| AIS Utilities | `AisUtilities.jsx` | 180% Increase In Conversions | Utilities | UK | 7 Months | `aisutilities.png` |
| Exademy | `Exademy.jsx` | 250% Growth In Course Sales | Education | Remote | 6 Months | `exademy.png` |
| DRRYN | `DRRYN.jsx` | 420% Increase In Online Sales | Retail | Global | 8 Months | `drryn.png` |
| Rewari Handicrafts | `RewariHandicrafts.jsx` | 300% Increase In Orders | Crafts & Retail | India | 5 Months | `handicraft.png` |

Note: `CaseStudy.jsx` also directly imports `TsamuelCaseStudy`, `Yogalife`, `GubeLuxe`, `Exademy`, `LumaniSystem`, `AisUtilities` at the top of the file but never renders them there (dead imports) — they're only actually used via their own routes in `App.jsx`.

---

## 9. Image Asset Reference (`src/assets/`)

All images are PNGs imported as ES modules (Vite fingerprints/bundles them — none are referenced by plain URL string, except a handful of external placeholder avatar images from `i.pravatar.cc` used for fake "trusted by" user avatars on several hero sections, and `emailjs`/`recaptcha` which load their own assets).

| Asset file | Used in |
|---|---|
| `hero.png` | `WebDevelopment.jsx` (recent-work card + import alias `heroImage`, unused twice) |
| `hero1.png` | `WebDevelopment.jsx`, `CustomSolutions.jsx` (Industries: Healthcare), `TsamuelCaseStudy.jsx` (related case), `CaseStudy.jsx` (industry card) |
| `hero2.png` | `CustomSolutions.jsx` (Industries: E-Commerce), `TsamuelCaseStudy.jsx` (related case) |
| `hero3.png` | `AIFeature.jsx` (AI Solutions tab), `WebDevelopment.jsx`, `CustomSolutions.jsx` (Industries: Manufacturing), `TsamuelCaseStudy.jsx` (related case) |
| `hero4.png` | `CaseStudies.jsx` (all 3 home cards), `CustomSolutions.jsx` (Industries: Real Estate + Education), `WebDevelopment.jsx`, `CaseStudy.jsx` (chart/data placeholder imports) |
| `hero5.png` | `Hero.jsx` (home hero background), `CustomSolutions.jsx` (Industries: Finance), `CaseStudy.jsx` |
| `heroweb.png` | `AIFeature.jsx` (Web Develop tab) |
| `heroweb1.png` | `WebDevelopment.jsx` (hero illustration) |
| `webdev1.png` | `WebDevelopment.jsx` (case study section image) |
| `automation.png` | `AIFeature.jsx` (Automation tab) |
| `Manufacturing.png` | `AIFeature.jsx` (Marketing tab, aliased `Manufacturing`), `Industries.jsx` (home, aliased `Manufacture`) |
| `HealthCare.png` | `Industries.jsx` (home) |
| `Ecommerce.png` | `Industries.jsx` (home) |
| `RealEstate.png` | `Industries.jsx` (home) |
| `Utilities.png` | `Industries.jsx` (home) |
| `Sowlio.png` | `Products.jsx` (home) |
| `Taskfu.png` | `Products.jsx` (home) |
| `EasyCRM.png` | `Products.jsx` (home) |
| `chatbot.png` | `AIAutomation.jsx` (AI Chatbots card), `SEO.jsx` (relabelled "Keyword Research"), `Softwaredevelopment.jsx` (E-Commerce Platform project card) |
| `voice-agent.png` | `AIAutomation.jsx` (AI Voice Agents card), `SEO.jsx` (relabelled "On-Page SEO") |
| `workflow.png` | `AIAutomation.jsx` (Workflow Automation card), `SEO.jsx` (relabelled "Technical SEO"), `Softwaredevelopment.jsx` (CRM Automation System project card) |
| `knowledge.png` | `AIAutomation.jsx` (AI Knowledge Systems card), `SEO.jsx` (relabelled "Local SEO"), `Softwaredevelopment.jsx` (Healthcare Portal project card) |
| `robot.png` | `AIAutomation.jsx` (hero illustration) |
| `seo.png` | `SEO.jsx` (hero illustration), `src/data/caseStudies.js` (both `automation` and `seo` case-study images alias to this same file) |
| `digitalmarketing.png` | `DigitalMarketing.jsx` (case study section image) |
| `healing.png` | `CaseStudy.jsx`, `AmishaHealing.jsx` (hero + all repeated images on that page) |
| `yogalife.png` | `CaseStudy.jsx`, `Yogalife.jsx`, plus used as a **secondary/related-case** thumbnail on `AisUtilities.jsx`, `AmishaHealing.jsx`, `DRRYN.jsx`, `Exademy.jsx`, `GubeLuxe.jsx`, `RewariHandicrafts.jsx` |
| `gebeluxe.png` | `CaseStudy.jsx`, `GubeLuxe.jsx` |
| `handicraft.png` | `CaseStudy.jsx`, `RewariHandicrafts.jsx` |
| `exademy.png` | `CaseStudy.jsx`, `Exademy.jsx`, plus reused as related-case thumbnail on `AisUtilities.jsx`, `AmishaHealing.jsx`, `DRRYN.jsx`, `GubeLuxe.jsx`, `LumaniSystem.jsx`, `RewariHandicrafts.jsx`, `Yogalife.jsx` |
| `drryn.png` | `CaseStudy.jsx`, `DRRYN.jsx` |
| `aisutilities.png` | `CaseStudy.jsx`, `AisUtilities.jsx`, plus reused as related-case thumbnail on `AmishaHealing.jsx`, `DRRYN.jsx`, `Exademy.jsx`, `GubeLuxe.jsx`, `RewariHandicrafts.jsx`, `Yogalife.jsx` |
| `lumani.png` | `CaseStudy.jsx`, `LumaniSystem.jsx` |
| `tsamuelestate.png` | `CaseStudy.jsx` (listing + industry card), `TsamuelCaseStudy.jsx` |

**Pattern**: each individual case-study page has its own hero image (unique) plus a "Related Case Studies" strip of 3 thumbnails borrowed from 3 *other* case studies (`yogalife.png`, `aisutilities.png`, `exademy.png` are the most frequently reused as filler "related" thumbnails, appearing on almost every other case study page regardless of relevance).

Non-asset images: avatar photos (`https://i.pravatar.cc/40?img=N` etc.) are used as fake "trusted by" user avatar placeholders on `AIAutomation.jsx`, `SEO.jsx`, `DigitalMarketing.jsx`, `WebDevelopment.jsx`, `Softwaredevelopment.jsx`, `NftDevelopment.jsx` hero sections — these are external, not local assets.

`public/favicon.svg` and `public/icons.svg` are the only files in `public/` — everything else is bundled from `src/assets/`.

---

## 10. Cross-cutting Functional Notes

- **The only real backend interaction on the entire site** is the Discovery Call form in `DiscoveryModal.jsx` (via EmailJS + reCAPTCHA). Every other button/link across the site either navigates via React Router, opens that same modal, or is a non-functional placeholder (`href="#"`, no `onClick`).
- Multiple sections/pages contain **placeholder/duplicated content** not yet finished: home `CaseStudies.jsx` cards all show identical "Real Estate / 8x / hero4.png" data; Navbar's Products mega-menu buttons don't link anywhere; Footer link columns are all `href="#"`; several FAQ lists (Web Dev, NFT Dev) render as static +/- rows with no actual expand/collapse logic (unlike the working accordions in `CaseStudyFAQ.jsx`, `CustomSolutions.jsx`'s FAQ, and `Yogalife.jsx`/etc.'s pattern).
- `Industries` and `Process` exist as **both** a shared `src/sections/*` component and, separately, a locally-defined same-named component inside `CustomSolutions.jsx` — don't confuse the two when editing.
- Scroll-reveal animation pattern (`useReveal` hook wrapping `IntersectionObserver`) is duplicated locally in `CustomSolutions.jsx` and `CaseStudy.jsx` rather than shared.
