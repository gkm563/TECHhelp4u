# 🌐 TECHhelp4U — Official Community Website & Builder Ecosystem

> **"Where Passion Meets Possibility."**
> A student-driven technology community and builder ecosystem empowering engineers across India through hands-on systems learning, multi-stage hackathons, verified partnerships, and campus leadership pipelines.

---

## ⚡ Overview & Features

* **Interactive Ecosystem Network**: Dynamic node visualization representing AI, Web3, Systems, Data Science, Open Source, and Cloud.
* **Flagship Campaign Experience**: Dedicated cinematic terminal UI and multi-stage pipeline for **The Black-Box Protocol: Stage 01 — System Escalation**.
* **Filterable Event Archive**: Real-time multi-dimensional search and filtering (Hackathons, Workshops, Webinars, Sprints / Hybrid, Offline, Online).
* **Dynamic Event Detail Engine**: Rich event pages with full problem statements, challenge tracks, agendas, mentor showcases, and JSON-LD structured data.
* **Campus Ambassador Program (CAP 2026)**: Comprehensive student leadership playbook, 3-tier structure (Gold, Silver, Volunteer), weekly commitments, career perks, and direct application portal.
* **Verified Collaborations Network**: Partner directory featuring HiDevs, AI House, Shardeum, Youth Season of Code (Y-SoC), Gwalior DAO, Unstop, Devfolio, and Commudle.
* **Searchable Developer Knowledge Hub**: Curated roadmaps, boilerplate starter kits, and security handbooks.
* **Visual Archive & Lightbox**: Responsive photo gallery with keyboard-accessible modal lightbox.
* **Enterprise SEO & Performance**: Dynamic XML sitemaps, robots.txt, OpenGraph/Twitter social cards, Organization & Event Schema.org JSON-LD markup.
* **Accessibility**: Full keyboard navigation, visible focus rings, WCAG AA contrast compliance, and `prefers-reduced-motion` support.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Design Tokens
* **Motion & Animation**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18+** or **Node.js 20+** installed on your system:
```bash
node -v
npm -v
```

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/techhelp4u/techhelp4u-community.git
cd techhelp4u-community
npm install
```

### 3. Running Locally
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Generate an optimized production build:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
TECHhelp4U/
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root Layout with Metadata, Navbar, Footer, JSON-LD
│   │   ├── page.tsx                 # Homepage narrative architecture
│   │   ├── about/page.tsx           # Mission, Vision, Core Values, 5-Year Roadmap
│   │   ├── events/page.tsx          # Filterable & searchable events hub
│   │   ├── events/[slug]/page.tsx   # Dynamic Event Detail template with Schema.org
│   │   ├── collaborations/page.tsx  # Partner & Alliance directory
│   │   ├── community/page.tsx       # Campus Ambassador Program (CAP 2026) hub & form
│   │   ├── initiatives/page.tsx     # Flagship initiatives (Black-Box, CAP, Labs)
│   │   ├── resources/page.tsx       # Developer Roadmaps & Toolkits
│   │   ├── gallery/page.tsx         # Responsive Photo Gallery + Lightbox
│   │   ├── team/page.tsx            # Leadership & Core Team
│   │   ├── contact/page.tsx         # Multi-purpose contact portal
│   │   ├── sitemap.ts               # Dynamic XML sitemap generator
│   │   ├── robots.ts                # SEO robots.txt
│   │   └── not-found.tsx            # Custom 404 Node Not Found
│   ├── components/
│   │   ├── ui/                      # Button, Badge, Card, SectionHeading
│   │   ├── layout/                  # Sticky Navbar, Mobile Drawer, Footer
│   │   ├── home/                    # Hero, Node Network, Storytelling, Black-Box Campaign
│   │   ├── events/                  # Reusable EventCard
│   │   └── motion/                  # CustomCursor, ScrollProgress, CountUp, FadeIn
│   ├── data/                        # Modular CMS-ready typed data files
│   │   ├── events.ts                # Verified events (Black-Box Protocol, Skill Climax, etc.)
│   │   ├── partners.ts              # Verified partners (HiDevs, Shardeum, AI House, Y-SoC, etc.)
│   │   ├── team.ts                  # Leadership & Mentors
│   │   ├── initiatives.ts           # Flagship programs
│   │   ├── resources.ts             # Developer roadmaps & repositories
│   │   ├── gallery.ts               # Event photos & metadata
│   │   ├── impact.ts                # Verified metrics
│   │   ├── testimonials.ts          # Authentic community voices
│   │   └── navigation.ts            # Navbar & Social links
│   ├── types/                       # Strict TypeScript interfaces
│   ├── lib/                         # Utility helpers (cn, dates)
│   └── styles/                      # Tailwind CSS & custom design tokens
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 📝 Content Management (Adding Content)

Content is decoupled from the UI layer in `/src/data/`, making it straightforward to edit or integrate with a headless CMS (e.g. Supabase, Firebase, Sanity, Strapi).

### Adding a New Event
Open `src/data/events.ts` and append a new `Event` object:
```typescript
{
  id: "your-event-id",
  slug: "your-event-slug",
  title: "Your Event Title",
  tagline: "Short compelling subtitle",
  description: "Brief summary for card display",
  fullDescription: [
    "Paragraph 1 detailing the event...",
    "Paragraph 2 with deep dive..."
  ],
  date: "2026-09-15",
  location: "Gwalior, MP / Online",
  mode: "hybrid", // "offline" | "online" | "hybrid"
  category: "hackathon", // "hackathon" | "workshop" | "webinar" | "collaboration"
  status: "upcoming", // "upcoming" | "active" | "concluded"
  coverImage: "https://images.unsplash.com/...",
  registrationUrl: "https://unstop.com/...",
  tags: ["AI", "Web3"],
  technologies: ["Python", "Solidity"],
  organizers: ["TECHhelp4U"],
  partners: [{ name: "Partner Name", role: "Co-host" }],
  seoTitle: "Your Event Title | TECHhelp4U",
  seoDescription: "Meta description for search engines.",
  createdAt: "2026-08-20"
}
```

### Adding a New Partner
Open `src/data/partners.ts` and add an entry:
```typescript
{
  id: "partner-id",
  name: "Partner Name",
  category: "technology", // "technology" | "community" | "platform" | "education"
  logo: "https://...",
  description: "Brief summary of the collaboration.",
  collaborationType: "Ecosystem Partner",
  website: "https://partner.com",
  featured: true
}
```

### Adding a New Team Member
Open `src/data/team.ts` and add:
```typescript
{
  id: "member-id",
  name: "Member Name",
  role: "Lead Title",
  tier: "core", // "leadership" | "core" | "technical" | "ambassador_lead"
  department: "Division Name",
  bio: "Short bio...",
  avatar: "https://...",
  skills: ["Skill 1", "Skill 2"],
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/..."
}
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Import the repository in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Click **Deploy**. Vercel will automatically configure SSR, caching, and edge routing.

### Deploying to Netlify
1. Connect your repository to Netlify.
2. Build Command: `npm run build`
3. Publish Directory: `.next`
4. Deploy using the `@netlify/plugin-nextjs`.

---

## 🔒 Security & Best Practices

- **Zero Client Credential Leakage**: No secret tokens or private keys are exposed in frontend code.
- **Client & Server Sanitization**: Forms are validated with typed schemas.
- **Strict TypeScript**: Ensures type safety across all CMS entities.

---

## 📄 License & Attribution

Designed & Engineered for **TECHhelp4U** Community. All rights reserved.
For inquiries, contact `contact@techhelp4u.in`.
