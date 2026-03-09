import { Linkedin, Github } from "lucide-react";
import XIcon from "./XIcon";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hammadCodes",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/hammadCodes",
    icon: Github,
  },
  {
    label: "X",
    href: "https://www.x.com/hammadCodes",
    icon: XIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white transition-colors duration-300 hover:text-accent"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <p className="text-sm text-foreground/40">
          Copyright 2026 Hammad | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
