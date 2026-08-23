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

  return (
    <div
      className={`group relative rounded-3xl bg-navy-950/45 border border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:border-cyan/40 hover:bg-white/[0.04] hover:shadow-[inset_0_1px_2px_0_rgba(0,229,255,0.25),0_20px_45px_-10px_rgba(0,229,255,0.18)] hover:-translate-y-1.5 ${
        featured ? "lg:col-span-2 bg-navy-900/60 border-cyan/30" : ""
      }`}
    >
      {/* Specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

      {/* Internal ambient chromatic glow on hover */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan/10 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 duration-500" />

      <div className="relative z-10">
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
          <span className="text-[11px] font-mono text-slate-400 uppercase">
            [{event.category}]
          </span>
        </div>

        {/* Title & Tagline */}
        <Link href={`/events/${event.slug}`} className="group-hover:text-cyan transition-colors">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display leading-snug">
            {event.title}
          </h3>
        </Link>
        <p className="mt-2 text-xs font-mono text-cyan/90 line-clamp-1">
          {event.tagline}
        </p>
        <p className="mt-3 text-sm text-slate-300 line-clamp-2 leading-relaxed font-normal">
          {event.description}
        </p>

        {/* Metadata Details with subtle glass separator */}
        <div className="mt-5 space-y-2 text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan shrink-0" />
            <span>{formatDate(event.date)}</span>
            {event.time && <span className="text-slate-500">• {event.time}</span>}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
            <span className="truncate">{event.location} ({event.mode})</span>
          </div>
          {event.teamSize && (
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-cyan shrink-0" />
              <span>{event.teamSize}</span>
            </div>
          )}
        </div>

        {/* Tech Glass Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {event.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/[0.04] backdrop-blur-md border border-white/[0.07] text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
            >
              {tech}
            </span>
          ))}
          {event.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500">
              +{event.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 relative z-10">
        <Link
          href={`/events/${event.slug}`}
          className="text-xs font-mono text-cyan hover:underline flex items-center gap-1 font-semibold"
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
          <span className="text-[11px] font-mono text-slate-500">
            {event.status === "concluded" ? "Concluded" : "Opening Soon"}
          </span>
        )}
      </div>
    </div>
  );
}
