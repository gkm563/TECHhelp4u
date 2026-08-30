"use client";

import React, { useState, useMemo, useTransition } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { EventCardSkeleton } from "@/ui/Skeleton";
import { FloatingOrb } from "@/components/motion/FloatingElements";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { eventsData } from "@/data/events";
import { Search, Filter, Calendar, Sparkles, Compass } from "lucide-react";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMode, setSelectedMode] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isPending, startTransition] = useTransition();

  const categories = [
    { id: "all", label: "All Events" },
    { id: "hackathon", label: "Hackathons" },
    { id: "workshop", label: "Workshops" },
    { id: "collaboration", label: "Collaborations" },
  ];

  const modes = [
    { id: "all", label: "All Formats" },
    { id: "hybrid", label: "Hybrid" },
    { id: "offline", label: "In-Person (Offline)" },
    { id: "online", label: "Virtual (Online)" },
  ];

  const statuses = [
    { id: "all", label: "All Statuses" },
    { id: "upcoming", label: "Upcoming" },
    { id: "concluded", label: "Concluded" },
  ];

  const handleCategoryChange = (id: string) => {
    startTransition(() => {
      setSelectedCategory(id);
    });
  };

  const handleSearchChange = (val: string) => {
    startTransition(() => {
      setSearchQuery(val);
    });
  };

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Search match
      const searchMatch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const categoryMatch =
        selectedCategory === "all" || event.category === selectedCategory;

      // Mode match
      const modeMatch = selectedMode === "all" || event.mode === selectedMode;

      // Status match
      const statusMatch =
        selectedStatus === "all" ||
        (selectedStatus === "upcoming" &&
          (event.status === "upcoming" || event.status === "active")) ||
        (selectedStatus === "concluded" && event.status === "concluded");

      return searchMatch && categoryMatch && modeMatch && statusMatch;
    });
  }, [searchQuery, selectedCategory, selectedMode, selectedStatus]);

  return (
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      {/* Floating ambient glow orbs */}
      <FloatingOrb color="cyan" size="xl" className="top-20 left-1/4" />
      <FloatingOrb color="violet" size="lg" className="bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" dot size="md" className="mb-4">
              COMMUNITY EVENTS & HACKATHONS
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
              Learn, Build & <span className="text-gradient-cyan">Compete</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Explore our upcoming hackathons, hands-on coding masterclasses, open-source sprints, and campus workshop series across India.
            </p>
          </div>
        </ScrollReveal>

        {/* Frosted Glass Filter & Search Bar */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="mb-12 rounded-3xl bg-white/80 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.1] p-5 sm:p-8 backdrop-blur-2xl space-y-6 shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Specular top glare line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan/40 to-transparent pointer-events-none" />

            {/* Top row: Glass Search input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by event title, technology (e.g. Next.js, Python, Solidity), or city..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-slate-50 dark:bg-navy-950/50 backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-white dark:focus:bg-navy-900/60 transition-all shadow-inner"
              />
            </div>

            {/* Category Pills with glassmorphic styling */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 dark:border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mr-2 font-semibold">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all backdrop-blur-md ${
                    selectedCategory === cat.id
                      ? "bg-cyan text-navy-900 font-bold shadow-sm dark:shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                      : "bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 dark:hover:border-white/[0.2]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Format & Status Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mr-2 font-semibold">
                  Format:
                </span>
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all backdrop-blur-md ${
                      selectedMode === mode.id
                        ? "bg-purple-100 dark:bg-electric-violet/20 border border-purple-300 dark:border-electric-violet/50 text-purple-700 dark:text-electric-violet font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100/50 dark:bg-white/[0.02] border border-transparent"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mr-2 font-semibold">
                  Status:
                </span>
                {statuses.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setSelectedStatus(status.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all backdrop-blur-md ${
                      selectedStatus === status.id
                        ? "bg-cyan-100 dark:bg-cyan/20 border border-cyan-300 dark:border-cyan/50 text-cyan-700 dark:text-cyan font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100/50 dark:bg-white/[0.02] border border-transparent"
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            Showing <strong className="text-cyan-700 dark:text-cyan">{filteredEvents.length}</strong> events
          </span>
          {(searchQuery || selectedCategory !== "all" || selectedMode !== "all" || selectedStatus !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedMode("all");
                setSelectedStatus("all");
              }}
              className="text-xs font-mono text-cyan-700 dark:text-cyan hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Events Grid with Skeleton Transition State */}
        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <ScrollReveal key={event.id} direction="up" duration={0.4}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-white/80 dark:bg-navy-950/40 border border-slate-200 dark:border-white/[0.08] p-8 backdrop-blur-xl shadow-inner">
            <Compass className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground font-display">
              No matching events found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or filter selections to find what you&apos;re looking for.
            </p>
            <Button
              variant="glass"
              size="sm"
              className="mt-6"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedMode("all");
                setSelectedStatus("all");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
