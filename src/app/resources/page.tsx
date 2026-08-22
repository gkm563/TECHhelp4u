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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Search & Filter Bar */}
        <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-xl mb-12 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search resources by topic (e.g. AI, Solidity, Next.js, Git, OSINT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 border border-slate-700/80 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan text-navy-900 font-bold"
                    : "bg-navy-900 border border-slate-800 text-slate-300 hover:border-slate-700"
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
              className="rounded-3xl bg-navy-850/80 border border-slate-800 p-7 backdrop-blur-md hover:border-cyan/40 hover:bg-navy-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral" size="sm">
                    {res.category}
                  </Badge>
                  <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                    {res.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground font-display mb-2">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {res.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {res.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-900 border border-slate-800 text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
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
