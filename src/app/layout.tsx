import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { BackToTop } from "@/components/motion/FloatingElements";

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://techhelp4u.in"),
  title: {
    default: "TECHhelp4U | Student-Driven Tech Community — Built by Students, For Students",
    template: "%s | TECHhelp4U",
  },
  description: "Official TECHhelp4U digital home. A student-driven tech community built by students, for students. Bridging the gap between learning and real-world application through workshops, hackathons, and mentorship.",
  keywords: [
    "TECHhelp4U",
    "TECHhelp4U community",
    "TECHhelp4U events",
    "TECHhelp4U hackathon",
    "TECHhack 2026",
    "Skill Climax",
    "Skill Showdown",
    "student tech community India",
    "developer community Bhopal",
    "developer community Madhya Pradesh",
    "AI workshops India",
    "Web3 hackathon India",
    "student developer events",
    "Campus Ambassador Program 2026",
    "CAP 2026",
    "Vedansh Goyal",
    "Monika Jha",
    "Gautam Kumar Maurya"
  ],
  authors: [
    { name: "Vedansh Goyal" },
    { name: "Monika Jha" },
    { name: "TECHhelp4U Core Team" }
  ],
  creator: "TECHhelp4U",
  publisher: "TECHhelp4U",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techhelp4u.in",
    title: "TECHhelp4U | Student-Driven Tech Community",
    description: "Built by students, for students. Bridging the gap between learning and real-world application through workshops, hackathons, and startup collaborations.",
    siteName: "TECHhelp4U Community",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TECHhelp4U Community & Builder Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHhelp4U | Student-Driven Tech Community",
    description: "Built by students, for students. Workshops, hackathons, startup collaborations, and mentorship.",
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TECHhelp4U",
  "alternateName": "TECHhelp4U Community",
  "url": "https://techhelp4u.in",
  "logo": "https://techhelp4u.in/logo.png",
  "description": "A student-driven tech community built by students, for students. Our mission is to bridge the gap between learning and real-world application by offering accessible, hands-on opportunities in technology, innovation, and personal development.",
  "foundingDate": "2025",
  "telephone": "+91-9238253996",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462042",
    "addressCountry": "IN"
  },
  "founders": [
    {
      "@type": "Person",
      "name": "Vedansh Goyal",
      "jobTitle": "Founder & Community Lead"
    },
    {
      "@type": "Person",
      "name": "Monika Jha",
      "jobTitle": "Co-Founder & Operations Lead"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/107663920/",
    "https://commudle.com/communities/techhelp4u",
    "https://devfolio.co",
    "https://unstop.com",
    "https://github.com/techhelp4u"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-screen bg-navy-900 text-foreground font-sans antialiased selection:bg-cyan selection:text-navy-900 flex flex-col">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
