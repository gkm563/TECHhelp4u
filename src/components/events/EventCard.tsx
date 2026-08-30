"use client";

import React from "react";
import Link from "next/link";
import { Event } from "@/types";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { Calendar, MapPin, Users, ArrowUpRight, Sparkles, Terminal, Flame } from "lucide-react";
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

  return (
    <SpotlightCard
      glowColor={event.status === "active" ? "emerald" : "cyan"}
      className={`flex flex-col justify-between group ${
        featured ? "lg:col-span-2 bg-white dark:bg-navy-950/70 border-cyan-500/40 dark:border-cyan/40 shadow-md dark:shadow-[0_0_40px_rgba(0,229,255,0.15)]" : ""
      }`}
    >
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
          <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan/90 uppercase font-bold">
            [{event.category}]
          </span>
        </div>

        {/* Title & Tagline */}
        <Link href={`/events/${event.slug}`} className="group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display leading-snug">
            {event.title}
          </h3>
        </Link>
        <p className="mt-2 text-xs font-mono text-cyan-700 dark:text-cyan line-clamp-1 font-semibold">
          {event.tagline}
        </p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
          {event.description}
        </p>

        {/* Metadata Details with subtle glass separator */}
        <div className="mt-5 space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.06] pt-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan shrink-0" />
            <span>{formatDate(event.date)}</span>
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

        {/* Tech Glass Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {event.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] backdrop-blur-md border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
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
            className="text-xs"
          >
            Register Now
          </Button>
        ) : (
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
            {event.status === "concluded" ? "Concluded" : "Opening Soon"}
          </span>
        )}
      </div>
    </SpotlightCard>
  );
}
