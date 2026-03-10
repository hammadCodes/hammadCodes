import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const SITE_URL = "https://hammadcodes.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hammad | Freelance Shopify Developer & Expert",
  description:
    "Freelance Shopify developer with 6+ years experience. Custom Liquid themes, Shopify apps, headless commerce, Shopify Plus & store migrations. 200+ projects. Top-rated on Upwork.",
  keywords: [
    "Shopify Expert",
    "Shopify Developer",
    "Freelance Shopify Developer",
    "Shopify Developer for Hire",
    "Hire Shopify Expert",
    "Shopify Plus",
    "Liquid Developer",
    "Custom Shopify Theme",
    "Shopify Theme Development",
    "Headless Shopify",
    "Shopify App Development",
    "Shopify Consultant",
    "Hydrogen",
    "Oxygen",
    "Next.js Shopify",
    "Shopify Storefront API",
    "Shopify Admin API",
    "E-commerce Developer",
    "Shopify Migration",
    "Shopify Store Optimization",
    "Upwork Shopify",
  ],
  authors: [{ name: "Hammad", url: SITE_URL }],
  creator: "Hammad",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "en_US",
    title: "Hammad | Freelance Shopify Developer & Expert",
    description:
      "Freelance Shopify developer with 6+ years experience. Custom Liquid themes, Shopify apps, headless commerce, Shopify Plus & store migrations. 200+ projects. Top-rated on Upwork.",
    siteName: "hammadCodes",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Hammad Freelance Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad | Freelance Shopify Developer & Expert",
    description:
      "Freelance Shopify developer with 6+ years experience. Custom Liquid themes, Shopify apps, headless commerce & Shopify Plus. 200+ projects. Top-rated on Upwork.",
    creator: "@hammadCodes",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hammad",
  url: SITE_URL,
  jobTitle: "Freelance Shopify Developer",
  description:
    "Senior freelance Shopify developer specializing in custom Liquid theme development, Shopify app development, headless commerce with Next.js & Hydrogen, and Shopify Plus solutions with 6+ years of experience and 200+ projects delivered.",
  sameAs: [
    "https://www.linkedin.com/in/hammadCodes",
    "https://github.com/hammadCodes",
    "https://www.x.com/hammadCodes",
    "https://www.upwork.com/freelancers/~018d5cd0b1736fdedf",
  ],
  knowsAbout: [
    "Shopify", "Shopify Plus", "Liquid", "Shopify App Development",
    "Headless Commerce", "Next.js", "React", "Node.js", "GraphQL",
    "E-commerce", "Shopify Migration", "Store Optimization",
    "Hydrogen", "Oxygen", "Shopify Storefront API",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "hammadCodes",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Freelance Shopify development services — custom themes, apps, headless commerce, and Shopify Plus solutions.",
  sameAs: [
    "https://www.linkedin.com/in/hammadCodes",
    "https://github.com/hammadCodes",
    "https://www.upwork.com/freelancers/~018d5cd0b1736fdedf",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "hammadCodes — Shopify Development Services",
  url: SITE_URL,
  description: "Expert Shopify development services including custom theme development, app development, headless commerce, and store migrations.",
  areaServed: "Worldwide",
  availableLanguage: "English",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shopify Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Theme Development",
          description: "Custom Shopify themes built from scratch. Shopify 2.0 implementation, Figma/PSD to Liquid conversion, and pixel-perfect theme customization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify App Development",
          description: "Custom Shopify apps with Node.js, React, Polaris, and App Bridge. Dockerized deployments and seamless Admin API integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Headless Shopify Commerce",
          description: "Headless Shopify storefronts with Next.js and the Storefront API. Fast, SEO-friendly, and fully custom frontend experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Store Setup & Migration",
          description: "Shopify Plus store setup, platform migrations to Shopify, payment gateways, shipping configuration, and checkout optimization.",
        },
      },
    ],
  },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "hammadCodes",
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: 4,
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Patrice L." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Hammad was a true pleasure to work with in every sense of the word. He is not only a skilled Shopify expert but also a collaborator. He was always available, a clear communicator, and responsive to any questions I had throughout this project.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Monica C." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "This is my second visit with him, and will not be my last. This guy is efficient, fast, asks questions to make sure he understands and gets it done! For all my Shopify store owners, start here with him!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rashe S." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Highly responsive contractor. Willing to do whatever it took to ensure product met my expectations. Highly recommend.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Asad A." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Engr. Hammad is very professional and talented. He did a great job in very short time and I'll surely use his services again.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer custom Shopify theme development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I build fully custom Shopify themes from scratch using Liquid, including Shopify 2.0 sections, Figma/PSD conversions, and pixel-perfect customizations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build a headless Shopify store with Next.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. I specialize in headless Shopify storefronts using Next.js and the Shopify Storefront API, as well as Hydrogen and Oxygen for Shopify-native headless setups.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop custom Shopify apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I build custom Shopify apps using Node.js, React, Polaris, and App Bridge with full Admin API and Storefront API integrations. I use Docker for containerized deployments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my store to Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I handle full platform migrations to Shopify from WooCommerce, Magento, BigCommerce, and other platforms, including product data, customer records, and order history.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available for Shopify Plus projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I have extensive experience with Shopify Plus including checkout extensibility, B2B features, Launchpad, Scripts, and multi-store setups.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom Shopify theme take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom Shopify theme typically takes 2–6 weeks depending on complexity. Simple customizations can be done in a few days, while fully custom builds from Figma take 4–6 weeks.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
<link rel="dns-prefetch" href="//github-readme-streak-stats.herokuapp.com" />
        <link rel="dns-prefetch" href="//github-contributions-api.jogruber.de" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
