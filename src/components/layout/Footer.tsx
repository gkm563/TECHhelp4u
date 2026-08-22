import React from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-navy-800 border border-cyan/40 flex items-center justify-center relative overflow-hidden group-hover:border-cyan transition-colors">
                <Terminal className="w-5 h-5 text-cyan" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                TECH<span className="text-cyan font-mono">help4U</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Where Passion Meets Possibility. A student-driven technology community and builder ecosystem empowering engineers across India through real-world projects, hackathons, and mentorship.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan bg-cyan/10 px-3 py-1.5 rounded-lg border border-cyan/20">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>Building Pan-India Chapters (2026–2031)</span>
            </div>
          </div>

          {/* Column 1: Ecosystem */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/events" className="text-slate-300 hover:text-cyan transition-colors">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link href="/events/system-escalation" className="text-slate-300 hover:text-cyan transition-colors flex items-center gap-1">
                  The Black-Box Protocol
                  <span className="text-[10px] text-cyan font-mono bg-cyan/10 px-1 rounded">Stage 01</span>
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-slate-300 hover:text-cyan transition-colors">
                  Flagship Initiatives
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-300 hover:text-cyan transition-colors">
                  Campus Ambassador Program
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-cyan transition-colors">
                  Developer Roadmaps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Community */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Community
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-cyan transition-colors">
                  About TECHhelp4U
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="text-slate-300 hover:text-cyan transition-colors">
                  Partners & Collaborations
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-cyan transition-colors">
                  Leadership & Core Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-cyan transition-colors">
                  Event Photo Archive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-cyan transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Platforms */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Official Hubs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} TECHhelp4U Community. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed & Engineered for Builders</span>
            <span>•</span>
            <span>Gwalior, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
