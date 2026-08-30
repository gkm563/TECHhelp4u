"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

export function BuilderStoriesSection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/70 dark:bg-navy-950/40 border-y border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="STUDENT EXPERIENCES"
          title="What Our Members Say"
          highlightText="About TECHhelp4U"
          description="Real feedback from college students, hackathon winners, and campus ambassadors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-100 dark:bg-cyan/15 border border-cyan-300 dark:border-cyan/30 text-cyan-800 dark:text-cyan font-bold font-display flex items-center justify-center text-sm shadow-sm shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground font-display">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.institutionOrCompany}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan bg-cyan-50 dark:bg-cyan/10 px-2.5 py-1 rounded-full border border-cyan-200 dark:border-cyan/25 font-semibold shrink-0">
                  {item.role.split(",")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
