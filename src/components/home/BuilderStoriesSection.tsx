"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";
import { Quote, Sparkles } from "lucide-react";

export function BuilderStoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
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
              className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md hover:border-cyan/40 hover:bg-navy-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan/40 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} • {item.institutionOrCompany}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
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
