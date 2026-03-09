import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent/70">Error</p>
      <h1 className="text-8xl font-bold text-accent sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md text-base text-foreground/50">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back to the right place.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-[#ef4035] px-10 py-4 text-base font-semibold uppercase tracking-widest text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#ef4035]/30"
      >
        Back to Home
      </Link>
    </main>
  );
}
