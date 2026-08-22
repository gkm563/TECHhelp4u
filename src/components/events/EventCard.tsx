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
      className={`group relative rounded-3xl bg-navy-850/80 border border-slate-800 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-cyan/40 hover:bg-navy-800 ${
        featured ? "lg:col-span-2 bg-gradient-to-br from-navy-850 to-navy-900 border-cyan/30" : ""
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan/5 group-hover:bg-cyan/10 blur-[80px] rounded-full pointer-events-none transition-colors" />

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
        <p className="mt-3 text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Metadata Details */}
        <div className="mt-5 space-y-2 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
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

        {/* Tech Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {event.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 border border-slate-700/80 text-slate-300"
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
      <div className="mt-7 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
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
