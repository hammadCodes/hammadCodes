"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Custom Theme Development",
        2000,
        "Headless Shopify with Next.js",
        2000,
        "Shopify App Developer",
        2000,
        "Shopify Plus Specialist",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-xl text-foreground sm:text-2xl md:text-3xl"
    />
  );
}
