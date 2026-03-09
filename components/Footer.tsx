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
    <footer className="bg-[#1a1a1a] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-foreground/65">
          © 2026 hammadCodes | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
