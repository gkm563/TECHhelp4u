"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/ui/SectionHeading";
import { Button } from "@/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { eventsData } from "@/data/events";
import { ArrowUpRight } from "lucide-react";

export function EventsPreview() {
  const displayEvents = eventsData.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionHeading
              badge="EVENT ARCHIVE & SPRINTS"
              title="From Workshops to"
              highlightText="Hackathon Arenas"
              description="Explore our flagship campaigns, regional hackathons, and deep-dive technical workshops designed for builders who want to ship."
              align="left"
              className="mb-0"
            />
          </div>
          <Button
            href="/events"
            variant="outline"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            Explore All Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
