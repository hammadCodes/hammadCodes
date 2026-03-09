import ContributionGraph from "./ContributionGraph";

const USERNAME = "hammadCodes";

const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&hide_border=true&background=0d0d0d&stroke=f9ab00&ring=f9ab00&fire=ef4035&currStreakNum=f4f4f4&sideNums=f4f4f4&currStreakLabel=f9ab00&sideLabels=f4f4f4&dates=666666`;

const activityUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&bg_color=0d0d0d&color=f9ab00&line=f9ab00&point=f9ab00&hide_border=true&area=true&area_color=f9ab00`;

const stats = [
  { value: "18", label: "Public Repos" },
  { value: "7", label: "Followers" },
  { value: "6+", label: "Years Coding" },
];

export default function GitHub() {
  return (
    <section id="github" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent/70">
            Open Source
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            GitHub <span className="text-accent">Activity</span>
          </h2>
        </div>

        {/* Quick stats */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/5 bg-white/[0.07] py-6 text-center"
            >
              <p className="text-3xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-foreground/75">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Streak stats */}
        <div className="mb-6 flex justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={streakUrl} alt="GitHub Contribution Streak Statistics for hammadCodes" className="w-full max-w-lg" loading="lazy" decoding="async" />
        </div>

        {/* Contribution graph */}
        <ContributionGraph />

        {/* Link */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-widest text-foreground/85 transition-all hover:border-accent hover:text-accent"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
