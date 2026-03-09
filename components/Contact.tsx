"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Send, Clock, Star, Briefcase, CheckCircle } from "lucide-react";
import XIcon from "./XIcon";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammadCodes", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/hammadCodes", icon: Github },
  { label: "X", href: "https://www.x.com/hammadCodes", icon: XIcon },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-foreground/30 transition-all focus:border-accent/60 focus:bg-white/[0.07]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(
        "service_774wiqr",
        "template_ec0mvrk",
        formRef.current!,
        { publicKey: "user_MUNrMMGWw6SxGS9f5kcUy" }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent/70">Let&apos;s Work Together</p>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Left info panel */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Let&apos;s build something great together.</h3>
              <p className="mb-8 text-base leading-relaxed text-foreground/60">
                Have a Shopify project in mind? I&apos;d love to hear about it. Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40">Response Time</p>
                    <p className="text-sm text-foreground/80">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40">Upwork</p>
                    <p className="text-sm text-foreground/80">Top Rated · 100% JSS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40">Experience</p>
                    <p className="text-sm text-foreground/80">6+ Years · 200+ Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40">Availability</p>
                    <p className="text-sm text-foreground/80">Open to new projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Send className="h-7 w-7" />
                </div>
                <p className="text-xl font-bold text-accent">Message Sent!</p>
                <p className="mt-2 text-sm text-foreground/60">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" name="name" required placeholder="Name *" className={inputClass} />
                  <input type="email" name="email" required placeholder="Email *" className={inputClass} />
                  <input type="tel" name="phone" placeholder="Phone" className={inputClass} />
                  <input type="text" name="subject" required placeholder="Subject *" className={inputClass} />
                </div>
                <textarea
                  name="description"
                  rows={5}
                  placeholder="Describe your project briefly..."
                  className={`${inputClass} resize-none`}
                />
                {error && <p className="text-sm text-[#ef4035]">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ef4035] py-4 text-base font-bold uppercase tracking-widest text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#ef4035]/30 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
