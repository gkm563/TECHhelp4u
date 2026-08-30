"use client";

import React from "react";
import { MessageSquare, ArrowUpRight, Users, Sparkles, Globe, Video, Instagram, Linkedin, Send, Radio } from "lucide-react";
import { SectionHeading } from "@/ui/SectionHeading";

export function CommunityChannelsSection() {
  const channels = [
    {
      name: "WhatsApp Community",
      desc: "Instant announcements, daily tech updates, and active discussion groups for student developers.",
      link: "https://linktr.ee/techhelpu",
      btnText: "Join WhatsApp Group",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/25",
      btnStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20",
      badge: "Fastest Updates",
      glow: "hover:border-emerald-400 hover:shadow-emerald-500/15",
    },
    {
      name: "Discord Server",
      desc: "Live voice coding lounges, hackathon squad formation, code review channels, and doubt help.",
      link: "https://linktr.ee/techhelpu",
      btnText: "Join Discord Server",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/25",
      btnStyle: "bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20",
      badge: "Active Coding Lounge",
      glow: "hover:border-indigo-400 hover:shadow-indigo-500/15",
    },
    {
      name: "Commudle Platform",
      desc: "Official registration hub for TECHhelp4U meetups, workshops, and verifiable event certificates.",
      link: "https://www.commudle.com/communities/techhelp4u",
      btnText: "Join on Commudle",
      color: "text-sky-600 dark:text-cyan",
      bg: "bg-sky-500/10 border-sky-500/25",
      btnStyle: "bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-cyan hover:bg-sky-500/20",
      badge: "Official RSVPs",
      glow: "hover:border-sky-400 hover:shadow-sky-500/15",
    },
    {
      name: "LinkedIn Network",
      desc: "Internship referrals, hackathon winner announcements, campus chapter leads, and professional growth.",
      link: "https://www.linkedin.com/company/techhelp4u/",
      btnText: "Follow on LinkedIn",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/25",
      btnStyle: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20",
      badge: "Career & Internships",
      glow: "hover:border-blue-400 hover:shadow-blue-500/15",
    },
    {
      name: "Instagram",
      desc: "Behind the scenes of our hackathons, speaker reels, event photo drops, and student spotlights.",
      link: "https://www.instagram.com/techhelp4u/",
      btnText: "Follow @techhelp4u",
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/25",
      btnStyle: "bg-pink-500/10 border-pink-500/30 text-pink-700 dark:text-pink-300 hover:bg-pink-500/20",
      badge: "Event Highlights",
      glow: "hover:border-pink-400 hover:shadow-pink-500/15",
    },
    {
      name: "YouTube Channel",
      desc: "Full session replays, project teardowns, coding tutorials, and guest masterclasses.",
      link: "https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos",
      btnText: "Watch Recordings",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-500/10 border-red-500/25",
      btnStyle: "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300 hover:bg-red-500/20",
      badge: "Free Masterclasses",
      glow: "hover:border-red-400 hover:shadow-red-500/15",
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/80 dark:bg-navy-950/40 border-y border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300">
      {/* Ambient gradient mesh */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CONNECT WITH 10,000+ BUILDERS"
          title="Join Our Community"
          highlightText="Channels"
          description="Whether you want to discuss code, find hackathon teammates, or attend free masterclasses, our channels are welcoming to all skill levels."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((c) => (
            <div
              key={c.name}
              className={`rounded-3xl bg-white/95 dark:bg-navy-950/70 border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group ${c.glow}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-bold uppercase backdrop-blur-md ${c.bg} ${c.color}`}>
                    {c.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground font-display mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan transition-colors">
                  {c.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${c.btnStyle}`}
                >
                  <span>{c.btnText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
