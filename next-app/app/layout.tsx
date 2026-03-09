import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://hammadcodes.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hammad | Senior Shopify Expert — Themes, Apps & Headless Commerce",
  description:
    "Senior Shopify developer with 6+ years of experience. Custom Liquid theme development, Shopify app development, headless commerce with Next.js & Hydrogen, and Shopify Plus solutions. 200+ projects delivered. Top-rated on Upwork.",
  keywords: [
    "Shopify Expert",
    "Shopify Developer",
    "Shopify Plus",
    "Liquid Developer",
    "Headless Shopify",
    "Shopify Theme Development",
    "Shopify App Development",
    "Hydrogen",
    "Oxygen",
    "Next.js Shopify",
    "Shopify Storefront API",
    "Shopify Admin API",
    "Freelance Shopify Developer",
    "Upwork Shopify",
  ],
  authors: [{ name: "Hammad", url: SITE_URL }],
  creator: "Hammad",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Hammad | Senior Shopify Expert — Themes, Apps & Headless Commerce",
    description:
      "Senior Shopify developer with 6+ years of experience. Custom themes, Shopify apps, headless commerce, and Shopify Plus. 200+ projects. Top-rated on Upwork.",
    siteName: "hammadCodes",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Hammad — Senior Shopify Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad | Senior Shopify Expert",
    description:
      "Senior Shopify developer with 6+ years of experience. Custom themes, apps, and headless commerce.",
    creator: "@hammadCodes",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hammad",
  url: SITE_URL,
  jobTitle: "Senior Shopify Expert",
  description:
    "Senior Shopify developer specializing in custom theme development, Shopify app development, and headless commerce with 6+ years of experience.",
  sameAs: [
    "https://www.linkedin.com/in/hammadCodes",
    "https://github.com/hammadCodes",
    "https://www.x.com/hammadCodes",
    "https://www.upwork.com/freelancers/~018d5cd0b1736fdedf",
  ],
  knowsAbout: [
    "Shopify",
    "Shopify Plus",
    "Liquid",
    "Shopify App Development",
    "Headless Commerce",
    "Next.js",
    "React",
    "Node.js",
    "GraphQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PYD80ZMLS5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PYD80ZMLS5');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
