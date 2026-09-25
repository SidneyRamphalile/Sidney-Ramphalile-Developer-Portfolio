import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.sidneyramphalile.online";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sidney Ramphalile | Full Stack Web Developer",
  description:
    "Portfolio of Sidney Ramphalile, a Full Stack Web Developer with 5 years of experience building websites with React, Svelte, Tailwind CSS, and MongoDB.",
  keywords: [
    "Sidney Ramphalile",
    "Mokuoane Sidney Ramphalile",
    "Full Stack Web Developer",
    "Web Developer South Africa",
    "React Developer",
    "Svelte Developer",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  // Google ignores a favicon smaller than 48px and falls back to a grey globe,
  // which is what the old 32×32 favicon.ico was getting. These are built from
  // the portrait by scripts/make-icons.mjs.
  icons: {
    icon: [
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sidney Ramphalile | Full Stack Web Developer",
    description:
      "Full Stack Web Developer with 5 years of experience building websites with React, Svelte, Tailwind CSS, and MongoDB.",
    url: SITE_URL,
    siteName: "Sidney Ramphalile Portfolio",
    images: [
      {
        url: "/images/sidney-wearing-a-suit.jpg",
        width: 800,
        height: 800,
        alt: "Sidney Ramphalile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidney Ramphalile | Full Stack Web Developer",
    description:
      "Full Stack Web Developer with 5 years of experience building websites with React, Svelte, Tailwind CSS, and MongoDB.",
    images: ["/images/sidney-wearing-a-suit.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured data so Google understands this site is about Sidney Ramphalile
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sidney Ramphalile",
  alternateName: "Mokuoane Sidney Ramphalile",
  url: SITE_URL,
  image: `${SITE_URL}/images/sidney-wearing-a-suit.jpg`,
  jobTitle: "Full Stack Web Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Central University of Technology, Free State",
  },
  knowsAbout: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Svelte",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Python",
    "Django",
    "REST APIs",
    "Microsoft Azure",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Meta Back-End Developer Professional Certificate",
      credentialCategory: "Professional Certificate",
      recognizedBy: { "@type": "Organization", name: "Meta" },
      url: "https://www.credly.com/badges/4b90c2f3-b0a4-41e8-9027-c4f7532051c4",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Vercel Web Analytics — visit counts appear in your Vercel project dashboard */}
        <Analytics />
        {/* Google Analytics — country, device and traffic sources. Silent
            until NEXT_PUBLIC_GA_ID is set. */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
