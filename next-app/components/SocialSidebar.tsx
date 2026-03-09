import { Linkedin, Github } from "lucide-react";
import XIcon from "./XIcon";

const socials = [
  {
    label: "X",
    href: "https://www.x.com/hammadCodes",
    icon: XIcon,
    rounded: "rounded-tl-lg",
  },
  {
    label: "GitHub",
    href: "https://github.com/hammadCodes",
    icon: Github,
    rounded: "",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hammadCodes",
    icon: Linkedin,
    rounded: "rounded-bl-lg",
  },
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
          className={`flex items-center justify-center bg-white/5 p-2.5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-accent/20 hover:text-accent hover:shadow-[0_0_12px_rgba(249,171,0,0.3)] ${social.rounded}`}
        >
          <social.icon className="h-[36px] w-[36px]" />
        </a>
      ))}
    </div>
  );
}
