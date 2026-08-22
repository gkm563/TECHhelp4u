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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Filter & Search Bar */}
        <div className="mb-12 rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-xl space-y-6">
          {/* Top row: Search input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by event title, technology (e.g. Python, Solidity, AI), or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 border border-slate-700/80 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-slate-500 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan text-navy-900 font-bold shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    : "bg-navy-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Format & Status Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
                Format:
              </span>
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    selectedMode === mode.id
                      ? "bg-electric-violet/20 border border-electric-violet text-electric-violet font-semibold"
                      : "text-slate-400 hover:text-slate-200"
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
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    selectedStatus === status.id
                      ? "bg-cyan/20 border border-cyan text-cyan font-semibold"
                      : "text-slate-400 hover:text-slate-200"
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
              className="text-xs font-mono text-cyan hover:underline"
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
          <div className="text-center py-20 rounded-3xl bg-navy-850 border border-slate-800 p-8">
            <Terminal className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground font-display">
              No matching events found
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or filter selections to find what you&apos;re looking for.
            </p>
            <Button
              variant="outline"
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
