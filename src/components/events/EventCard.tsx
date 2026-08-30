"use client";

import React from "react";
import Link from "next/link";
import { Event } from "@/types";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { Calendar, MapPin, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

export interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export function EventCard({ event, featured = false }: EventCardProps) {
  const statusVariants: Record<string, "cyan" | "emerald" | "neutral"> = {
    upcoming: "cyan",
    active: "emerald",
    concluded: "neutral",
  };

  const categoryChipColors: Record<string, string> = {
    hackathon: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-cyan",
    workshop: "bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300",
    webinar: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    meetup: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300",
  };

  return (
    <div
      className={`rounded-3xl bg-white/95 dark:bg-navy-950/70 border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group relative overflow-hidden ${
        featured ? "lg:col-span-2 border-cyan-500/50 dark:border-cyan/50" : "hover:border-cyan-500/50"
      }`}
    >
      {/* Specular top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 dark:via-cyan/30 to-transparent pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant={statusVariants[event.status] || "cyan"} dot size="sm">
              {event.status}
            </Badge>
            {event.featuredBadge && (
              <Badge variant="violet" size="sm">
                {event.featuredBadge}
              </Badge>
            )}
          </div>
          <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border ${categoryChipColors[event.category] || "bg-slate-100 text-slate-700"}`}>
            {event.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <Link href={`/events/${event.slug}`} className="group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display leading-snug">
            {event.title}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs font-mono text-cyan-700 dark:text-cyan line-clamp-1 font-semibold">
          {event.tagline}
        </p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
          {event.description}
        </p>

        {/* Metadata Details */}
        <div className="mt-5 space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.06] pt-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">{formatDate(event.date)}</span>
            {event.time && <span className="text-slate-400 dark:text-slate-500">• {event.time}</span>}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
            <span className="truncate">{event.location} ({event.mode})</span>
          </div>
          {event.teamSize && (
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
              <span>{event.teamSize}</span>
            </div>
          )}
        </div>

        {/* Tech Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {event.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-cyan-500/5 dark:bg-white/[0.04] border border-cyan-500/20 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-semibold"
            >
              {tech}
            </span>
          ))}
          {event.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04]">
              +{event.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-7 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-3">
        <Link
          href={`/events/${event.slug}`}
          className="text-xs font-mono text-cyan-700 dark:text-cyan hover:underline flex items-center gap-1 font-bold"
        >
          Event Details <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>

        {event.registrationUrl && event.status !== "concluded" ? (
          <Button
            href={event.registrationUrl}
            isExternal
            variant="cyan-glow"
            size="sm"
            className="text-xs font-bold"
          >
            Register Free
          </Button>
        ) : (
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
            {event.status === "concluded" ? "Concluded" : "Opening Soon"}
          </span>
        )}
      </div>
    </div>
  );
}
