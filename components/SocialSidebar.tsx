import { Linkedin, Github } from "lucide-react";
import XIcon from "./XIcon";

const socials = [
  { label: "X", href: "https://www.x.com/hammadCodes", icon: XIcon },
  { label: "GitHub", href: "https://github.com/hammadCodes", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammadCodes", icon: Linkedin },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col md:flex">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex h-11 w-11 items-center justify-center border-b border-white/10 bg-[#111111] text-white/60 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-accent"
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
