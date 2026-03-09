const categories = [
  {
    title: "Shopify & E-commerce",
    skills: [
      "Shopify Plus",
      "Shopify Apps",
      "Theme Development",
      "Liquid",
      "Storefront API",
      "Admin API",
      "App Bridge",
      "Polaris",
      "Headless Commerce",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "HTML5",
      "CSS3",
      "Figma",
      "Photoshop",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Python",
      "PHP",
      "C#",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Dev Tools & Infrastructure",
    skills: [
      "Git",
      "Docker",
      "Vercel",
      "CI/CD",
      "Performance Optimization",
      "A/B Testing",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="bg-[#1a1a1a] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-14 text-center text-3xl font-bold uppercase tracking-wider text-accent sm:text-4xl">
          Tech Toolbox
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-accent">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-pointer rounded-full border border-foreground/20 px-4 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
