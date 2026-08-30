import type { Metadata, Viewport } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { BackToTop } from "@/components/motion/FloatingElements";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#080C14" },
  ],
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
        url: "https://techhelp4u.in/logo.png",
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
    images: ["https://techhelp4u.in/logo.png"],
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
    <html
      lang="en"
      className={`light ${outfit.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('techhelp4u-theme');
                  var theme = saved || 'light';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-cyan selection:text-navy-900 flex flex-col transition-colors duration-200">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
