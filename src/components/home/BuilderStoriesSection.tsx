"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function BuilderStoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/60">
      {/* Background ambient chromatic glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="VOICES FROM THE SQUAD"
          title="What Builders Say"
          highlightText="About TECHhelp4U"
          description="Authentic feedback from participants, campus leads, and student engineers across our hackathons and masterclasses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-navy-950/40 border border-white/[0.08] p-8 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Specular top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <Quote className="w-8 h-8 text-cyan/40 mb-4 group-hover:text-cyan/70 transition-colors" />
                <p className="text-slate-300 text-sm leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-foreground font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} • {item.institutionOrCompany}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2.5 py-1 rounded-full border border-cyan/25 backdrop-blur-md shadow-[0_0_10px_rgba(0,229,255,0.15)]">
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
