"use client";

import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return <div className="absolute inset-0 bg-[#0a0a0a]" />;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: ["#f9ab00", "#ef4035"] },
          opacity: { value: { min: 0.08, max: 0.25 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            color: "#f9ab00",
            opacity: 0.12,
            distance: 150,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
