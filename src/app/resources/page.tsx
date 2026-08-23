"use client";

import React, { useState, useMemo } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { resourcesData } from "@/data/resources";
import { Search, BookOpen, GitBranch, ArrowUpRight, FileCode, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "roadmap", label: "Developer Roadmaps" },
    { id: "repository", label: "Starter Boilerplates" },
    { id: "guide", label: "Handbooks & Guides" },
    { id: "toolkit", label: "Open Source Toolkits" },
  ];

  const filteredResources = useMemo(() => {
    return resourcesData.filter((r) => {
      const matchSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCategory =
        selectedCategory === "all" || r.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            OPEN KNOWLEDGE REPOSITORY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Developer Resources & <span className="text-gradient-cyan">Toolkits</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Curated roadmaps, production starter kits, and security handbooks open to every builder in the community.
          </p>
        </div>

        {/* Search & Filter Frosted Glass Bar */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-6 sm:p-8 backdrop-blur-2xl mb-12 space-y-4 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />
          
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search resources by topic (e.g. AI, Solidity, Next.js, Git, OSINT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all backdrop-blur-md ${
                  selectedCategory === cat.id
                    ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                    : "bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-white/[0.2] hover:bg-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-7 backdrop-blur-2xl hover:border-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 relative overflow-hidden group"
            >
              {/* Specular top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral" size="sm">
                    {res.category}
                  </Badge>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2.5 py-1 rounded-full border border-cyan/25 backdrop-blur-md shadow-[0_0_10px_rgba(0,229,255,0.15)]">
                    {res.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground font-display mb-2">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {res.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {res.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.06] text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono text-slate-400">
                  {res.authorOrOrg}
                </span>

                {res.isExternal ? (
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
                  >
                    Open Resource <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={res.link}
                    className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
                  >
                    View Guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
