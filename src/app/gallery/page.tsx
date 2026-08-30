"use client";

import React, { useState } from "react";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { galleryArchiveData } from "@/data/gallery";
import { 
  Instagram, 
  Youtube, 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  Users, 
  Trophy, 
  Video, 
  Camera, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Archives" },
    { id: "hackathon", label: "Hackathons" },
    { id: "workshop", label: "Workshops" },
    { id: "community", label: "Community & Chapters" },
  ];

  const filteredItems = galleryArchiveData.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="cyan" dot size="md" className="mb-4">
            EVENT ARCHIVES & MEDIA
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Moments & <span className="text-gradient-cyan">Highlights</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Archives of our national hackathons, campus workshops, and student developer assemblies across Central India.
          </p>
        </div>

        {/* Real Live Media Banner: Instagram & YouTube */}
        <div className="rounded-3xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground font-display">
                Real Photos & Video Drops on Instagram & YouTube
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Catch live event reels, student interviews, stage pitches, and winner announcements.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/techhelp4u/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 text-pink-700 dark:text-pink-400 font-mono text-xs font-bold hover:brightness-105 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram Reels</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 font-mono text-xs font-bold hover:brightness-105 transition-all flex items-center gap-2"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan text-navy-900 font-bold shadow-sm border border-cyan"
                  : "bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Community Event Archive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                {/* Top Badge & Attendees */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan bg-cyan-50 dark:bg-cyan/10 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan/25">
                    {item.event}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/25 font-semibold">
                    {item.attendees}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground font-display mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  Hosted with: <span className="text-slate-700 dark:text-slate-200 font-semibold">{item.partnerOrHost}</span>
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Metadata Details */}
                <div className="mt-5 space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.06] pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <a
                  href="https://www.instagram.com/techhelp4u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>View Reels</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Watch Session</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
