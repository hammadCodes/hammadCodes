import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#1a1a1a] py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <div className="shrink-0">
            <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-accent">
              <Image
                src="/me.jpg"
                alt="Hammad Senior Shopify Developer Profile Photo"
                width={224}
                height={224}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-wider text-accent sm:text-4xl">
              About Hammad — Shopify Expert
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-foreground/70 sm:text-lg">
              <p>
                Six years ago I wrote my first Shopify theme. Since then,
                I&apos;ve built, broken, and rebuilt enough stores to know
                exactly what separates <strong>good from great</strong>.
              </p>

              <p>
                I&apos;m Hammad — a <strong>Senior Shopify Developer</strong> specializing in{" "}
                <strong>Shopify Plus</strong>, custom <strong>Liquid development</strong>,{" "}
                headless commerce with <strong>Hydrogen and Oxygen</strong>, and front-end
                engineering that holds up under real traffic. My full-stack
                background — React, Node.js, GraphQL — means I handle
                complexity without outsourcing the hard parts.
              </p>

              <p>
                Across <strong>200+ projects</strong> and clients ranging from early-stage
                startups to established brands, I&apos;ve learned that great
                development is only half the job.{" "}
                <strong>Clear communication, realistic timelines, and zero-surprise delivery</strong>{" "}
                are the other half.
              </p>

              <p>
                I build things I&apos;d be proud to put my name on. If
                that&apos;s the kind of developer you&apos;re looking for —
                you&apos;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
