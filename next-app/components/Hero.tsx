"use client";

import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section
      id="header"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,171,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,171,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mesh gradient glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 15% 50%, rgba(249,171,0,0.20) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 85% 15%, rgba(239,64,53,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 65% 85%, rgba(249,171,0,0.12) 0%, transparent 50%)",
        }}
      />

      {/* Particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-accent sm:text-6xl md:text-7xl lg:text-8xl">
          Senior Shopify Expert
        </h1>

        <div className="mt-5 h-10 sm:mt-6">
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
        </div>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-full border-2 border-accent px-10 py-3 text-sm uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 sm:mt-12"
        >
          Let&apos;s Talk
        </a>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-accent sm:text-4xl">6+</p>
            <p className="mt-1 text-sm uppercase tracking-widest text-foreground/50">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent sm:text-4xl">200+</p>
            <p className="mt-1 text-sm uppercase tracking-widest text-foreground/50">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-accent sm:text-4xl">100%</p>
            <p className="mt-1 text-sm uppercase tracking-widest text-foreground/50">Job Success Score</p>
          </div>
        </div>
      </div>
    </section>
  );
}
