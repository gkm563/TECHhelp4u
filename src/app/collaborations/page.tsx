"use client";

import React, { useState, useTransition } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { PartnerCardSkeleton } from "@/ui/Skeleton";
import { FloatingOrb } from "@/components/motion/FloatingElements";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { partnersData } from "@/data/partners";
import { 
  ArrowUpRight, 
  Sparkles, 
  Handshake, 
  ExternalLink, 
  ShieldCheck,
  Building2
} from "lucide-react";

export default function CollaborationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isPending, startTransition] = useTransition();

  const categories: { id: string; label: string }[] = [
    { id: "all", label: "All Partners" },
    { id: "technology", label: "Technology & Incubation" },
    { id: "community", label: "Community & Ecosystem" },
    { id: "platform", label: "Platforms & Hackathons" },
    { id: "education", label: "Academic & Campus" },
  ];

  const handleCategoryChange = (id: string) => {
    startTransition(() => {
      setSelectedCategory(id);
    });
  };

  const filteredPartners = partnersData.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient background refraction glows */}
      <FloatingOrb color="cyan" size="xl" className="top-20 left-1/4" />
      <FloatingOrb color="violet" size="lg" className="bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" dot size="md" className="mb-4">
              ECOSYSTEM & ALLIANCES
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
              Our Partners & <span className="text-gradient-cyan">Collaborators</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              TECHhelp4U works alongside leading tech platforms, dev communities, and academic institutions to bring world-class hackathons and learning opportunities to students.
            </p>
          </div>
        </ScrollReveal>

        {/* Frosted Glass Category Pills */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all backdrop-blur-xl ${
                  selectedCategory === cat.id
                    ? "bg-cyan text-navy-900 font-bold shadow-sm dark:shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                    : "bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 dark:hover:border-white/[0.2] hover:bg-slate-100 dark:hover:bg-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Partners Frosted Glass Grid with Skeleton Transition State */}
        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[...Array(6)].map((_, i) => (
              <PartnerCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredPartners.map((partner) => (
              <ScrollReveal key={partner.id} direction="up" duration={0.4}>
                <div
                  className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-2xl hover:border-cyan-500/40 dark:hover:border-cyan/40 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-md dark:hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 relative overflow-hidden h-full"
                >
                  {/* Specular top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 dark:via-white/[0.15] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${partner.gradient || "from-cyan-500 to-blue-600"} text-white flex items-center justify-center font-display font-extrabold text-sm shadow-sm`}>
                        {partner.initials || partner.name.substring(0, 2).toUpperCase()}
                      </div>
                      <Badge variant="neutral" size="sm">
                        {partner.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground font-display group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
                      {partner.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan block mt-1 font-semibold">
                      {partner.collaborationType}
                    </span>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {partner.description}
                    </p>

                    {partner.jointEvents && partner.jointEvents.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase block mb-1.5 font-semibold">
                          Joint Initiatives
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {partner.jointEvents.map((e) => (
                            <span
                              key={e}
                              className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                      Community Partner
                    </span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-700 dark:text-cyan hover:underline flex items-center gap-1 font-bold"
                    >
                      Visit Website <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Partnership CTA Banner */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-2xl shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_20px_50px_-10px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />
            <div className="max-w-2xl mx-auto relative z-10">
              <Handshake className="w-10 h-10 text-cyan-600 dark:text-cyan mx-auto mb-4 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                Want to Partner or Sponsor an Event?
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                We collaborate with tech companies, startups, developer tool makers, and student communities for hackathons, workshops, and college outreach.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button href="/contact" variant="cyan-glow" size="md">
                  Propose Collaboration
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
