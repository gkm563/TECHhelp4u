"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { motion } from "framer-motion";
import { BookOpen, Hammer, Users2, Trophy, Rocket, TrendingUp } from "lucide-react";

const STAGES = [
  {
    step: "01",
    label: "LEARN",
    icon: BookOpen,
    color: "#00E5FF",
    title: "Master Core Systems",
    desc: "Cut through superficial video tutorials. Master Git, EVM internals, RAG architecture, and Linux through hands-on labs.",
  },
  {
    step: "02",
    label: "BUILD",
    icon: Hammer,
    color: "#8B5CF6",
    title: "Engineer Prototypes",
    desc: "Transform abstract theory into testnet smart contracts, AI agent swarms, and scalable full-stack web applications.",
  },
  {
    step: "03",
    label: "COLLABORATE",
    icon: Users2,
    color: "#10B981",
    title: "Join Builder Squads",
    desc: "Connect with like-minded developers, cross-campus peers, and open-source maintainers across India.",
  },
  {
    step: "04",
    label: "COMPETE",
    icon: Trophy,
    color: "#F59E0B",
    title: "Battle-Test in Sprints",
    desc: "Compete in high-stakes hackathons like Skill Climax and The Black-Box Protocol under tight deadlines.",
  },
  {
    step: "05",
    label: "SHIP",
    icon: Rocket,
    color: "#EC4899",
    title: "Deploy into Production",
    desc: "Deploy real MVPs, open-source repositories, and live demo products evaluated by industry CTOs.",
  },
  {
    step: "06",
    label: "GROW",
    icon: TrendingUp,
    color: "#38BDF8",
    title: "Lead & Accelerate",
    desc: "Advance into Campus Leads, earn LORs, gain venture incubation with HiDevs, and unlock career referrals.",
  },
];

export function StorytellingNarrative() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE BUILDER JOURNEY"
          title="More Than a Community."
          highlightText="An Engineering Ecosystem."
          description="Most student clubs stop at certificates and theoretical slides. TECHhelp4U is engineered as a progressive launchpad guiding every curious mind from raw curiosity to production excellence."
        />

        {/* Editorial Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md hover:border-cyan/40 hover:bg-navy-800 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        borderColor: `${stage.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: stage.color }} />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span
                      className="text-xs font-mono font-bold tracking-widest uppercase"
                      style={{ color: stage.color }}
                    >
                      {stage.label}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 font-display">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>STAGE {stage.step} / 06</span>
                  <span className="group-hover:text-cyan transition-colors">
                    PROGRESSION →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
