# Saleverse Brand Guidelines
**Version 1.0 | June 2026**

---

## Brand Architecture

Saleverse is the **parent ecosystem**. Everything lives under it.

```
SALEVERSE (Parent Brand)
├── SalesverseHQ ......... GTM systems, outbound tools, digital products
├── Saleverse Media ...... Content platform (LinkedIn, YouTube, Substack)
├── Saleverse Academy .... Courses and education
├── Saleverse Community .. Networking and peer learning
├── Saleverse AI ......... AI-powered sales and career tools
├── Saleverse Labs ....... Building products and startups
└── Saleverse Ventures ... Investing in founders and ideas
```

### Naming Convention

| Context | Use |
|---------|-----|
| Parent brand | **Saleverse** |
| Product/GTM arm | **SalesverseHQ** |
| Content/media | **Saleverse Media** |
| Courses | **Saleverse Academy** |
| Community | **Saleverse Community** |
| AI tools | **Saleverse AI** |
| Incubator | **Saleverse Labs** |
| Investment | **Saleverse Ventures** |

**Rule:** The parent brand is always "Saleverse" — one word, capital S. Sub-brands append the division name. Never hyphenate. Never separate into "Sale Verse."

---

## Logo System

### Primary Mark — The Circuit S

The Saleverse logomark is a stylized **"S"** with **circuit board traces** flowing outward. It represents the intersection of sales (human communication) and technology (systems, AI, data).

| Element | Meaning |
|---------|---------|
| The S shape | Sales — the core skill |
| Circuit traces | Technology, systems, data flowing |
| Node dots | Connection points — people, ideas, opportunities |
| Chrome/metallic finish | Premium, futuristic, built to last |
| Dark background | Authority, sophistication, depth |

### Logo Variants

| Variant | File | Use Case |
|---------|------|----------|
| Icon only (dark bg) | `salesversehq-icon.svg` | Favicons, app icons, profile pictures, small formats |
| Icon only (transparent) | `salesversehq-icon-transparent.svg` | Overlay on images, merchandise |
| Full logo (dark bg) | `salesversehq-logo-dark.svg` | Website headers, presentations, dark backgrounds |
| Full logo (light bg) | `salesversehq-logo-light.svg` | Print, light backgrounds, documents |
| Wordmark only | `salesversehq-wordmark.svg` | When the icon is already visible nearby |

### Logo Clear Space

Minimum clear space around the logo = the height of the "S" mark on all sides. Nothing should intrude into this space.

### Logo Don'ts

- Never stretch or distort the logo
- Never change the circuit trace pattern
- Never place on busy/patterned backgrounds without a solid backing
- Never add effects (drop shadows, bevels, outlines)
- Never rotate the logo
- Never change the chrome gradient to a flat color
- Never use below 24px (icon) or 120px wide (full logo)

---

## Color Palette

### Philosophy

Saleverse uses a **monochrome palette** — black, white, silver, and grey. No accent colour. The chrome logo is the visual anchor. This creates a premium, timeless identity that won't date.

### Primary Colors

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| **Void** | `#0A0A0A` | 10, 10, 10 | Primary background |
| **Surface** | `#111111` | 17, 17, 17 | Cards, elevated surfaces |
| **Surface Raised** | `#1A1A1A` | 26, 26, 26 | Modals, inputs, hover states |
| **Chrome** | `#C0C0C0` | 192, 192, 192 | Logo, metallic accents |
| **Platinum** | `#E0E0E0` | 224, 224, 224 | Headlines, emphasis |
| **White** | `#F5F5F5` | 245, 245, 245 | Primary text |

### Supporting Greys

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| **Border** | `#222222` | 34, 34, 34 | Dividers, card borders |
| **Border Active** | `#333333` | 51, 51, 51 | Hover borders, active states |
| **Muted** | `#555555` | 85, 85, 85 | Disabled text, timestamps |
| **Secondary** | `#888888` | 136, 136, 136 | Body text, descriptions |
| **Tertiary** | `#AAAAAA` | 170, 170, 170 | Labels, captions |

### Functional Colors (use sparingly, only for status)

| Name | Hex | Use |
|------|-----|-----|
| **Success** | `#22C55E` | Confirmations, positive states |
| **Warning** | `#EAB308` | Caution, attention |
| **Error** | `#EF4444` | Errors, destructive actions |
| **Info** | `#3B82F6` | Links, informational |

**Rule:** Functional colors appear only in UI states (form validation, alerts, status badges). They never appear in marketing, branding, or content design. The brand is monochrome.

### Background Usage

| Context | Background | Text |
|---------|-----------|------|
| Website | `#0A0A0A` | `#F5F5F5` |
| Cards/sections | `#111111` | `#F5F5F5` |
| Inputs/forms | `#1A1A1A` | `#F5F5F5` |
| Print/documents | `#FFFFFF` | `#111111` |
| Email | `#0A0A0A` or `#FFFFFF` | Match accordingly |

---

## Typography

### Primary Typeface: Inter

**Inter** is the primary typeface for all digital and print use. It's clean, modern, highly legible, and available for free on Google Fonts.

| Weight | Use |
|--------|-----|
| **Inter 800 (ExtraBold)** | Headlines, hero text, numbers |
| **Inter 700 (Bold)** | Section headers, button text, emphasis |
| **Inter 600 (SemiBold)** | Sub-headers, labels, navigation |
| **Inter 500 (Medium)** | Body text highlights, captions |
| **Inter 400 (Regular)** | Body text, descriptions, long-form |

### Type Scale

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|---------------|
| Hero headline | 48-64px | 800 | -1.5px |
| Section header | 32-40px | 800 | -1px |
| Sub-header | 20-24px | 700 | -0.5px |
| Body | 15-16px | 400 | 0 |
| Caption | 13px | 500 | 0 |
| Label/tag | 11-12px | 600 | 1-2px (uppercase) |
| Button | 14-15px | 600 | 0 |

### Fallback Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Rules

- Headlines: always use negative letter-spacing
- Body: never exceed 680px line width
- Paragraphs: 1.6-1.7 line height
- Lists: 1.5 line height
- Labels/tags: always uppercase with 1-2px letter spacing
- Never use more than 2 weights on a single screen

---

## Brand Voice

### Tone

| Saleverse sounds like... | Saleverse does NOT sound like... |
|--------------------------|----------------------------------|
| A sharp colleague who's done it | A LinkedIn guru with no results |
| Direct and practical | Vague and theoretical |
| Confident without being arrogant | "I'm the best" energy |
| Educational with edge | Textbook or academic |
| Ambitious but grounded | "Get rich quick" |
| Human and real | Corporate and hollow |

### Voice Principles

**1. Lead with execution, not motivation**
- Yes: "Here's the exact sequence I use to book meetings."
- No: "Believe in yourself and the deals will come."

**2. Be specific, not general**
- Yes: "Send T1 on Day 0. Send T2 on Day 3. Reply to your own thread."
- No: "Follow up consistently to stay top of mind."

**3. Acknowledge the grind**
- Yes: "Outbound is repetitive. That's the point. Reps build pipeline."
- No: "Sales is so fun and rewarding!"

**4. Respect the reader's intelligence**
- Yes: State the insight. Move on.
- No: Over-explain, hedge, or pad with qualifiers.

**5. Never be scammy**
- Yes: "This takes work. Here's the system."
- No: "Make £10k/month with this one trick!"

### Words We Use

| Use | Instead of |
|-----|-----------|
| System | Hack |
| Execute | Manifest |
| Build | Dream |
| Pipeline | Funnel (in cold outbound context) |
| Operator | Guru |
| Practical | Revolutionary |
| Framework | Secret |
| Grind | Hustle (overused) |

### Content Format Rules

| Format | Rule |
|--------|------|
| LinkedIn posts | < 200 words. One idea per post. End with a takeaway, not a question bait. |
| Email | < 120 words for cold, < 200 for newsletter. |
| Course content | Practical → Theory → Application. Never theory first. |
| Social captions | 1-2 sentences. No hashtag spam. |

---

## Sub-Brand System

Each division of Saleverse uses:
- The **same** Circuit S logomark
- The **same** monochrome palette
- The **same** Inter typeface
- A **unique division label** appended to "Saleverse"

### Sub-Brand Lockup Format

```
[Circuit S Icon]  Saleverse [Division]
```

Division names use the same font weight (800) but in `#888888` (grey) to distinguish from the parent brand name in `#F0F0F0` (white).

### Sub-Brand Taglines

| Division | Tagline |
|----------|---------|
| **SalesverseHQ** | The unglamorous truth about B2B sales. |
| **Saleverse Media** | Sales. Tech. AI. — Documented. |
| **Saleverse Academy** | Skills that pay. Not certificates that don't. |
| **Saleverse Community** | Grow with operators, not observers. |
| **Saleverse AI** | AI that sells. Built by sellers. |
| **Saleverse Labs** | Build. Ship. Sell. |
| **Saleverse Ventures** | Backing builders at the intersection. |

---

## Social Media Specs

### Profile Picture
- All platforms: Circuit S icon on `#0A0A0A` background
- Size: 400x400px minimum
- No text in the profile picture — the mark stands alone

### Cover Images

| Platform | Size | Content |
|----------|------|---------|
| X / Twitter | 1500 x 500px | Circuit S mark (left), "Saleverse" wordmark (center), tagline (right) |
| LinkedIn | 1584 x 396px | Same layout as X, adjusted for vertical crop |
| YouTube | 2560 x 1440px | Circuit S mark centered, "Saleverse" below, tagline under |

### Post Formats

| Type | Size | Background |
|------|------|-----------|
| Quote card | 1080 x 1080px | `#0A0A0A` with `#F5F5F5` text |
| Carousel slide | 1080 x 1350px | `#0A0A0A` with `#F5F5F5` text |
| Thread header | 1200 x 675px | `#0A0A0A` with Circuit S watermark |
| YouTube thumbnail | 1280 x 720px | `#0A0A0A` with large white text |

---

## Email Signature

```
Ola Odusanya
Founder — Saleverse
salesversehq.com

Sales. Tech. AI.
```

Rules:
- 4 lines maximum
- No logo image (images get blocked by email clients)
- No social links in cold emails
- Social links allowed in warm/internal emails only
- Never include a marketing tagline in a cold signature

---

## Photography & Imagery

### Style
- High contrast, dark backgrounds
- Monochrome or desaturated
- No stock photos of people shaking hands or pointing at whiteboards
- Prefer: code on screens, cityscapes at night, abstract tech patterns, data visualisations
- When using photos of Ola: natural, candid, professional — not staged corporate

### Imagery Don'ts
- No clip art
- No cartoon illustrations
- No overly saturated colors
- No cheesy "success" imagery (money raining, sports cars)
- No generic "team high-five" stock photos

---

## File Naming Convention

All brand assets follow this format:
```
saleverse-[type]-[variant]-[size].[ext]
```

Examples:
- `saleverse-icon-dark-512.svg`
- `saleverse-logo-dark-800x280.svg`
- `saleverse-banner-x-1500x500.html`
- `saleverse-og-1200x630.html`

---

## Usage Quick Reference

| Need | Use |
|------|-----|
| Website favicon | `salesversehq-icon.svg` at 32x32 or 16x16 |
| Social profile pic | `salesversehq-icon.svg` at 400x400 |
| Email header | `salesversehq-logo-dark.svg` |
| Presentation title slide | Full logo on `#0A0A0A` background |
| Product packaging | Full logo, monochrome only |
| Merchandise | Icon only, white on black |
| Video intro/outro | Animated Circuit S (from original .mp4) |
| Print business card | Full logo on matte black stock, chrome foil for S mark |

---

## Brand Checklist — Before You Publish Anything

- [ ] Is it on-brand? (monochrome, dark, premium)
- [ ] Does the voice sound like an operator, not a guru?
- [ ] Is the Saleverse name spelled correctly? (one word, capital S)
- [ ] Is the correct sub-brand used? (HQ for products, Media for content, etc.)
- [ ] Is the logo used correctly? (clear space, no distortion, right variant)
- [ ] Are only approved fonts used? (Inter or system fallback)
- [ ] Are functional colours used only for status, not decoration?
- [ ] Would you pay attention to this if you saw it? If not, redo it.

---

*Saleverse Brand Guidelines v1.0 — Built June 2026*
*This document is the source of truth for all brand decisions.*
