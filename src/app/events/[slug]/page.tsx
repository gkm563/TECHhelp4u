import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { eventsData } from "@/data/events";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { formatDate } from "@/lib/utils";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowUpRight, 
  ArrowLeft, 
  Trophy, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    return {
      title: "Event Not Found | TECHhelp4U",
    };
  }

  return {
    title: event.seoTitle,
    description: event.seoDescription,
    openGraph: {
      title: event.seoTitle,
      description: event.seoDescription,
      images: [{ url: event.coverImage, width: 1200, height: 630, alt: event.title }],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "endDate": event.endDate || event.date,
    "eventAttendanceMode":
      event.mode === "online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.mode === "offline"
        ? "https://schema.org/OfflineEventAttendanceMode"
        : "https://schema.org/MixedEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.location,
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "TECHhelp4U",
      "url": "https://techhelp4u.in"
    }
  };

  const statusVariants: Record<string, "cyan" | "emerald" | "neutral"> = {
    upcoming: "cyan",
    active: "emerald",
    concluded: "neutral",
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Event Archive
        </Link>

        {/* Hero Banner Card */}
        <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden mb-12 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant={statusVariants[event.status] || "cyan"} dot size="sm">
                {event.status}
              </Badge>
              {event.featuredBadge && (
                <Badge variant="violet" size="sm">
                  {event.featuredBadge}
                </Badge>
              )}
              <span className="text-xs font-mono text-slate-400 uppercase">
                [{event.category}]
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-display tracking-tight leading-[1.1]">
              {event.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-cyan/90 font-mono font-medium max-w-3xl">
              {event.tagline}
            </p>

            {/* Meta Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">DATE</span>
                  <span>{formatDate(event.date)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">TIME</span>
                  <span>{event.time || "Full Day"}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">VENUE</span>
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">TEAM SIZE</span>
                  <span>{event.teamSize || "Individual / Squad"}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {event.registrationUrl && event.status !== "concluded" ? (
                <Button
                  href={event.registrationUrl}
                  isExternal
                  variant="cyan-glow"
                  size="lg"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Register on Official Portal
                </Button>
              ) : (
                <span className="px-4 py-2 rounded-xl bg-navy-800 border border-slate-700 text-xs font-mono text-slate-400">
                  {event.registrationStatusText || "Event Concluded"}
                </span>
              )}

              {event.eventUrl && (
                <Button
                  href={event.eventUrl}
                  isExternal
                  variant="outline"
                  size="lg"
                >
                  Commudle Hub
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Deep Dive */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-foreground font-display mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan" /> Event Overview
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {event.fullDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              {event.highlights && (
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Schedule / Timeline */}
            {event.schedule && event.schedule.length > 0 && (
              <section className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-foreground font-display mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan" /> Multi-Stage Timeline & Agenda
                </h2>
                <div className="space-y-6">
                  {event.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-navy-900 border border-slate-800 hover:border-cyan/30 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono text-cyan font-bold">
                          {item.timeOrPhase}
                        </span>
                        {item.location && (
                          <span className="text-[10px] font-mono text-slate-500 bg-navy-800 px-2 py-0.5 rounded">
                            {item.location}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-foreground font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tracks */}
            {event.tracks && event.tracks.length > 0 && (
              <section className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-foreground font-display mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan" /> Challenge Tracks & Themes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.tracks.map((track, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-navy-900 border border-slate-800"
                    >
                      <h4 className="text-base font-bold text-foreground font-display mb-2">
                        {track.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                        {track.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {track.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 border border-slate-700 text-cyan"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {event.faqs && event.faqs.length > 0 && (
              <section className="rounded-3xl bg-navy-850/80 border border-slate-800 p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-foreground font-display mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {event.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-navy-900 border border-slate-800"
                    >
                      <h4 className="text-sm font-bold text-foreground mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sidebar Specs */}
          <div className="lg:col-span-4 space-y-8">
            {/* Prizes / Rewards */}
            {event.prizes && event.prizes.length > 0 && (
              <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-md">
                <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2 font-bold">
                  <Trophy className="w-4 h-4 text-amber-400" /> Prizes & Recognition
                </h3>
                <div className="space-y-3">
                  {event.prizes.map((prize, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-navy-900 border border-slate-800"
                    >
                      <span className="text-[11px] font-mono text-amber-400 font-bold block">
                        {prize.title}
                      </span>
                      <h5 className="text-sm font-bold text-foreground font-display mt-0.5">
                        {prize.reward}
                      </h5>
                      {prize.description && (
                        <p className="text-xs text-slate-400 mt-1">
                          {prize.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strategic Partners */}
            {event.partners && event.partners.length > 0 && (
              <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-md">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
                  Event Partners
                </h3>
                <div className="space-y-3">
                  {event.partners.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <h5 className="text-xs font-bold text-foreground">
                          {p.name}
                        </h5>
                        <span className="text-[10px] font-mono text-cyan block">
                          {p.role}
                        </span>
                      </div>
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-cyan"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers / Mentors */}
            {event.speakersAndMentors && event.speakersAndMentors.length > 0 && (
              <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-md">
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
                  Mentors & Evaluators
                </h3>
                <div className="space-y-3">
                  {event.speakersAndMentors.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <h5 className="text-xs font-bold text-foreground">
                          {s.name}
                        </h5>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {s.role} • {s.companyOrOrg}
                        </span>
                      </div>
                      {s.linkedin && (
                        <a
                          href={s.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-cyan"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="rounded-3xl bg-navy-850/90 border border-slate-800 p-6 backdrop-blur-md">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-bold">
                Technologies Involved
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {event.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan/5 border border-cyan/20 text-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
