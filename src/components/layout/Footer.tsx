import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MapPin, Mail } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-950/80 border-t border-white/[0.08] backdrop-blur-2xl relative overflow-hidden">
      {/* Specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent pointer-events-none" />

      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-11 h-11 rounded-2xl bg-navy-950/80 border border-white/[0.15] flex items-center justify-center relative overflow-hidden group-hover:border-cyan/50 transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_0_15px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                <Image
                  src="/logo.png"
                  alt="TECHhelp4U Official Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-foreground flex items-center gap-1">
                  TECH<span className="text-cyan font-mono">help4U</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
                  Where Passion Meets Possibility
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-4 font-normal">
              A student-driven tech community built by students, for students. Bridging the gap between learning and real-world application through hands-on opportunities in technology, innovation, and personal development.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>Bhopal, Madhya Pradesh 462042, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan shrink-0" />
                <a href="tel:+919238253996" className="hover:text-cyan transition-colors">
                  +91 9238253996
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan bg-cyan/10 px-3.5 py-1.5 rounded-full border border-cyan/25 backdrop-blur-md shadow-[0_0_12px_rgba(0,229,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>Founded 2025 • Open for Partnerships</span>
            </div>
          </div>

          {/* Column 1: Ecosystem */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              Events & Tracks
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/events" className="text-slate-300 hover:text-cyan transition-colors">
                  All Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/events/techhack-2026" className="text-slate-300 hover:text-cyan transition-colors flex items-center gap-1">
                  TECHhack 2026
                  <span className="text-[10px] text-cyan font-mono bg-cyan/10 px-1.5 py-0.2 rounded-full border border-cyan/20">Flagship</span>
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-slate-300 hover:text-cyan transition-colors">
                  Flagship Initiatives
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-300 hover:text-cyan transition-colors">
                  Campus Ambassador (CAP)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-cyan transition-colors">
                  Developer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Community */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              Community
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-cyan transition-colors">
                  About TECHhelp4U
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-cyan transition-colors font-medium">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="text-slate-300 hover:text-cyan transition-colors">
                  Partners & Alliances
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-cyan transition-colors">
                  Event Photo Archive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-cyan transition-colors">
                  Partner / Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Platforms */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
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
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} TECHhelp4U Community. Built by Students, For Students.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Bhopal, Madhya Pradesh 462042, India</span>
            <span>•</span>
            <a href="tel:+919238253996" className="text-cyan hover:underline">
              +91 9238253996
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
