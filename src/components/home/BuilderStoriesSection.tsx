"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function BuilderStoriesSection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-100/60 dark:bg-navy-950/60 transition-colors duration-300">
      {/* Background ambient chromatic glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="VOICES FROM THE SQUAD"
          title="What Builders Say"
          highlightText="About TECHhelp4U"
          description="Authentic feedback from participants, campus leads, and student engineers across our hackathons and masterclasses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <SpotlightCard
              key={item.id}
              glowColor={idx % 2 === 0 ? "cyan" : "violet"}
              className="flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-600/70 dark:text-cyan/50 mb-4 group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors" />
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-foreground font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • {item.institutionOrCompany}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-[10px] font-mono text-cyan-700 dark:text-cyan bg-cyan-50 dark:bg-cyan/10 px-2.5 py-1 rounded-full border border-cyan-200 dark:border-cyan/30 backdrop-blur-md shadow-sm dark:shadow-[0_0_10px_rgba(0,229,255,0.15)] font-bold">
                  {item.event}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
