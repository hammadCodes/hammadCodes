"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: number };

const LEVEL_COLORS = [
  "#2d333b",       // 0 - empty (visible on dark bg)
  "#0e4429",       // 1 - light green
  "#006d32",       // 2 - medium green
  "#26a641",       // 3 - bright green
  "#39d353",       // 4 - full green
];

export default function ContributionGraph() {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/hammadCodes?y=last")
      .then((r) => r.json())
      .then((data) => {
        setDays(data.contributions);
        setTotal(data.contributions.reduce((sum: number, d: Day) => sum + d.count, 0));
      });
  }, []);

  // Group into weeks, show last 26 on mobile, all 52 on desktop
  const allWeeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    allWeeks.push(days.slice(i, i + 7));
  }
  const weeks = isMobile ? allWeeks.slice(-26) : allWeeks;

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.06] p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-foreground/75 sm:text-sm">
          <span className="font-semibold text-accent">{total.toLocaleString()}</span> contributions in the last year
        </p>
        <div className="hidden items-center gap-1.5 text-xs text-foreground/65 sm:flex">
          <span>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
        </div>
      </div>

      {days.length === 0 ? (
        <div className="flex h-32 items-center justify-center text-sm text-foreground/90">
          Loading contributions...
        </div>
      ) : (
        <div className="w-full">
          <div className="flex w-full gap-[2px] sm:gap-[3px]">
            {/* Day labels */}
            <div className="flex shrink-0 flex-col justify-between pb-1 pr-1 pt-5">
              {dayLabels.map((label, i) => (
                <span key={i} className="text-[10px] leading-[11px] text-foreground/90 h-[11px]">
                  {label}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
              {/* Month labels */}
              <div className="relative mb-1 h-3">
                {weeks.map((week, wi) => {
                  const firstDay = new Date(week[0].date);
                  const showMonth = firstDay.getDate() <= 7;
                  if (!showMonth) return null;
                  return (
                    <span
                      key={wi}
                      className="absolute text-[10px] text-foreground/90 leading-none"
                      style={{ left: `${(wi / weeks.length) * 100}%` }}
                    >
                      {months[firstDay.getMonth()]}
                    </span>
                  );
                })}
              </div>

              {/* Days grid */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-1 flex-col gap-[2px] sm:gap-[3px]">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        className="group relative aspect-square w-full rounded-sm"
                        style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                      >
                        {/* Tooltip */}
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-[#1a1a1a] px-2 py-1 text-[10px] text-foreground opacity-0 shadow group-hover:opacity-100 border border-white/10">
                          {day.count} contribution{day.count !== 1 ? "s" : ""} on {day.date}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
