"use client";

import { useState } from "react";
import { Linkedin, Github, Send } from "lucide-react";
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: Wire up to your email service (EmailJS, Resend, etc.)
    // For now, simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-wider text-accent sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mb-6 text-lg text-foreground/50">
            Have a Shopify project in mind? Fill out the form and I&apos;ll get
            back to you as soon as possible.
          </p>
          <div className="mb-12 flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground/50 transition-colors duration-300 hover:text-accent"
              >
                <social.icon className="h-6 w-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[50px] border border-white/10 p-8 shadow-[0_0_20px_5px] shadow-accent/20 sm:p-12">
          {submitted ? (
            <div className="py-12 text-center">
              <p className="text-xl font-bold text-accent">Thank you!</p>
              <p className="mt-2 text-foreground/60">
                I&apos;ve received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="w-full border-b border-white/10 bg-transparent px-2 py-3 text-accent outline-none placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email *"
                    className="w-full border-b border-white/10 bg-transparent px-2 py-3 text-accent outline-none placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full border-b border-white/10 bg-transparent px-2 py-3 text-accent outline-none placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject *"
                    className="w-full border-b border-white/10 bg-transparent px-2 py-3 text-accent outline-none placeholder:text-foreground/30 focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your project briefly..."
                  className="w-full resize-none border-b border-white/10 bg-transparent px-2 py-3 text-accent outline-none placeholder:text-foreground/30 focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent bg-transparent px-8 py-3 font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-accent disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
