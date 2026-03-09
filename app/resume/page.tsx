import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Site
          <Image src="/logo.png" alt="hammadCodes" width={28} height={28} className="object-contain" />
        </Link>
        <span className="text-sm font-bold uppercase tracking-widest text-accent">Resume</span>
        <a
          href="/hammad_resume.pdf"
          download
          className="rounded-full bg-[#ef4035] px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:brightness-110"
        >
          Download
        </a>
      </nav>

      <iframe
        src="/hammad_resume.pdf"
        title="Hammad's Resume"
        className="flex-1 w-full border-0"
      />
    </main>
  );
}
