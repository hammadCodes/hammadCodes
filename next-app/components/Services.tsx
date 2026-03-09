import { Palette, Code, Globe, Blocks } from "lucide-react";

const services = [
  {
    title: "Theme Development",
    icon: Palette,
    description:
      "Custom Shopify themes built from scratch. Shopify 2.0 implementation, Figma/PSD to Liquid conversion, and pixel-perfect theme customization.",
  },
  {
    title: "Shopify App Development",
    icon: Code,
    description:
      "Custom Shopify apps with Node.js, React, Polaris, and App Bridge. Dockerized deployments and seamless Admin API integrations.",
  },
  {
    title: "Headless Commerce",
    icon: Globe,
    description:
      "Headless Shopify storefronts with Next.js and the Storefront API. Fast, SEO-friendly, and fully custom frontend experiences.",
  },
  {
    title: "Store Setup & Migration",
    icon: Blocks,
    description:
      "Shopify Plus store setup, platform migrations to Shopify, payment gateways, shipping configuration, and checkout optimization.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold uppercase tracking-wider text-accent sm:text-4xl">
          My Services
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center rounded-lg border-b-[3px] border-accent bg-[#222222] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <service.icon className="h-8 w-8 text-[#0a0a0a]" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-foreground">
                {service.title}
              </h3>

              <p className="leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
