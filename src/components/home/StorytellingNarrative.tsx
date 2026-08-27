"use client";

import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { motion } from "framer-motion";
import { BookOpen, Hammer, Users2, Trophy, Rocket, GraduationCap, ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    label: "LEARN",
    icon: BookOpen,
    color: "#00E5FF",
    title: "Master Real-World Tech",
    desc: "Move beyond theory and rote learning. Master Git, React, Next.js, Python, and cloud services through hands-on weekend workshops.",
  },
  {
    step: "02",
    label: "BUILD",
    icon: Hammer,
    color: "#8B5CF6",
    title: "Ship Live Projects",
    desc: "Build functional web apps, AI tools, and portfolio-worthy software. Every workshop ends with a live project URL you can show recruiters.",
  },
  {
    step: "03",
    label: "COLLABORATE",
    icon: Users2,
    color: "#10B981",
    title: "Find Your Squad",
    desc: "Team up with passionate student developers, designers, and peers from colleges across India on Discord and WhatsApp.",
  },
  {
    step: "04",
    label: "COMPETE",
    icon: Trophy,
    color: "#F59E0B",
    title: "Win in Hackathons",
    desc: "Battle-test your skills in 36-hour hackathons like TECHhack and Skill Climax, with real-time feedback from working software engineers.",
  },
  {
    step: "05",
    label: "CONTRIBUTE",
    icon: Rocket,
    color: "#EC4899",
    title: "Open Source Sprints",
    desc: "Get your first pull requests merged into public open-source codebases during community drives like Open Sphere with Y-SoC.",
  },
  {
    step: "06",
    label: "LEAD",
    icon: GraduationCap,
    color: "#38BDF8",
    title: "Lead on Your Campus",
    desc: "Become a Campus Ambassador (CAP 2026), host local hackathon chapters, earn official letters of recommendation, and fast-track your career.",
  },
];

export function StorytellingNarrative() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/70">
      {/* Ambient background refraction orbs */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-electric-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE STUDENT JOURNEY"
          title="From Curious Learner to"
          highlightText="Confident Builder"
          description="Most college clubs stop at certificates and theoretical slides. TECHhelp4U is a step-by-step launchpad guiding students from their first lines of code to winning hackathons and leading campus chapters."
        />

        {/* Editorial Glass Flow Grid with Spotlight Tracking */}
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
              >
                <SpotlightCard
                  glowColor={idx % 2 === 0 ? "cyan" : "violet"}
                  className="h-full flex flex-col justify-between group"
                >
                  {/* Ambient internal color glow */}
                  <div
                    className="absolute -right-12 -top-12 w-32 h-32 blur-[60px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: stage.color }}
                  />

                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center border backdrop-blur-md group-hover:scale-110 transition-transform shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]"
                        style={{
                          backgroundColor: `${stage.color}18`,
                          borderColor: `${stage.color}50`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: stage.color }} />
                      </div>
                      <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-cyan transition-colors">
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

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Bottom line indicator */}
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP {stage.step} OF 06</span>
                    <span className="group-hover:text-cyan transition-colors flex items-center gap-1 font-bold">
                      GROWTH <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
