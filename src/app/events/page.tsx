"use client";

import React, { useState, useMemo } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { eventsData } from "@/data/events";
import { Search, Filter, Calendar, Sparkles, Terminal } from "lucide-react";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMode, setSelectedMode] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "hackathon", label: "Hackathons" },
    { id: "workshop", label: "Workshops" },
    { id: "collaboration", label: "Collaborations" },
    { id: "webinar", label: "Webinars" },
  ];

  const modes = [
    { id: "all", label: "All Formats" },
    { id: "hybrid", label: "Hybrid" },
    { id: "offline", label: "In-Person (Offline)" },
    { id: "online", label: "Virtual (Online)" },
  ];

  const statuses = [
    { id: "all", label: "All Statuses" },
    { id: "upcoming", label: "Upcoming / Active" },
    { id: "concluded", label: "Concluded" },
  ];

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
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            EVENT ARCHIVE & HACKATHONS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Explore Events & <span className="text-gradient-cyan">Sprints</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            From hands-on workshops to multi-stage hackathon universes, every TECHhelp4U event is engineered to help you master systems, ship code, and build your network.
          </p>
        </div>

        {/* Frosted Glass Filter & Search Bar */}
        <div className="mb-12 rounded-3xl bg-navy-950/60 border border-white/[0.1] p-6 sm:p-8 backdrop-blur-2xl space-y-6 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_20px_45px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Specular top glare line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

          {/* Top row: Glass Search input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by event title, technology (e.g. Python, Solidity, AI), or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950/50 backdrop-blur-xl border border-white/[0.08] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:bg-navy-900/60 focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Category Pills with glassmorphic styling */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
              Category:
            </span>
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

          {/* Format & Status Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
                Format:
              </span>
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all backdrop-blur-md ${
                    selectedMode === mode.id
                      ? "bg-electric-violet/20 border border-electric-violet/50 text-electric-violet font-semibold shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      : "text-slate-400 hover:text-slate-200 bg-white/[0.02] border border-transparent"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
                Status:
              </span>
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all backdrop-blur-md ${
                    selectedStatus === status.id
                      ? "bg-cyan/20 border border-cyan/50 text-cyan font-semibold shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      : "text-slate-400 hover:text-slate-200 bg-white/[0.02] border border-transparent"
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs font-mono text-slate-400">
            Showing <strong className="text-cyan">{filteredEvents.length}</strong> events
          </span>
          {(searchQuery || selectedCategory !== "all" || selectedMode !== "all" || selectedStatus !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedMode("all");
                setSelectedStatus("all");
              }}
              className="text-xs font-mono text-cyan hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl bg-navy-950/40 border border-white/[0.08] p-8 backdrop-blur-xl shadow-inner">
            <Terminal className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground font-display">
              No matching events found
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
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
