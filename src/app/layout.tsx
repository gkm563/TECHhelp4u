import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://techhelp4u.in"),
  title: {
    default: "TECHhelp4U | Where Passion Meets Possibility — Student Tech Community & Ecosystem",
    template: "%s | TECHhelp4U",
  },
  description: "Official TECHhelp4U digital home. A student-driven technology community and builder ecosystem across India empowering engineers through hackathons, workshops, AI/Web3 innovation, and leadership pipelines.",
  keywords: [
    "TECHhelp4U",
    "TECHhelp4U community",
    "TECHhelp4U events",
    "TECHhelp4U hackathon",
    "Skill Climax",
    "The Black-Box Protocol",
    "System Escalation",
    "student tech community India",
    "developer community India",
    "AI hackathon India",
    "Web3 hackathon India",
    "student developer events",
    "technology workshops India",
    "developer workshops Gwalior",
    "Campus Ambassador Program 2026",
    "CAP 2026",
    "Vedansh Goyal"
  ],
  authors: [{ name: "TECHhelp4U Core Team" }],
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
    title: "TECHhelp4U | Where Passion Meets Possibility",
    description: "Student-driven technology community empowering builders through hackathons, practical learning, and campus leadership.",
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
    title: "TECHhelp4U | Student Tech Community & Ecosystem",
    description: "Where Passion Meets Possibility. Hackathons, workshops, AI, Web3, and builder pipelines.",
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
  "description": "A student-driven technology community and builder ecosystem empowering engineers across India through real-world projects, hackathons, and mentorship.",
  "founder": {
    "@type": "Person",
    "name": "Vedansh Goyal"
  },
  "sameAs": [
    "https://commudle.com/communities/techhelp4u",
    "https://devfolio.co",
    "https://unstop.com",
    "https://linkedin.com",
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
      </body>
    </html>
  );
}
