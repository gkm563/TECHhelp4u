"use client";

import React, { useState } from "react";
import { Terminal, Play, Copy, Check, Sparkles, ChevronRight, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandOption {
  id: string;
  command: string;
  label: string;
  output: string[];
  link?: { text: string; href: string };
  badge?: string;
}

const COMMANDS: CommandOption[] = [
  {
    id: "init",
    command: "techhelp4u ecosystem --status",
    label: "Check Ecosystem Status",
    badge: "LIVE TELEMETRY",
    output: [
      "⚡ CONNECTING TO TECHHELP4U NODE CLUSTER...",
      "✓ STATUS: OPERATIONAL [CENTRAL INDIA & NATIONWIDE]",
      "✓ NODES ACTIVE: 6 (AI, Web3, Systems, Data, Security, Cloud)",
      "✓ PARTNER PROTOCOLS: HiDevs, AI House, Shardeum, Y-SoC",
      "✓ UPCOMING CAMPAIGN: The Black-Box Protocol Stage 01",
      "✓ CAMPUS NETWORK: 50+ Target Colleges for CAP 2026",
    ],
    link: { text: "View Active Events", href: "/events" },
  },
  {
    id: "blackbox",
    command: "techhelp4u protocol --run system-escalation",
    label: "The Black-Box Protocol",
    badge: "STAGE 01",
    output: [
      "🔒 INITIALIZING PROTOCOL: SYSTEM_ESCALATION::STAGE_01",
      "📍 ARENA: GWALIOR, MADHYA PRADESH (HYBRID)",
      "⚡ TRACKS: Autonomous AI Agents | Decentralized Web3 | Scalable ML",
      "🏆 POOL & PERKS: ₹90,000+ Incubation, HiDevs Compute, Venture Access",
      "⏳ ROUND 01: Architecture Screening & 60-min Assessment",
      "🔥 ROUND 02: 12-Hour Continuous Offline Sprint",
    ],
    link: { text: "Register on Unstop", href: "/events/system-escalation" },
  },
  {
    id: "cap",
    command: "techhelp4u cap --apply --tier gold",
    label: "Campus Ambassador (CAP)",
    badge: "2026 PROGRAM",
    output: [
      "🎓 FETCHING 2026 CAMPUS AMBASSADOR PROGRAM BLUEPRINT...",
      "⭐ TIER: GOLD AMBASSADOR [CHAPTER LEAD]",
      "📜 PERKS: Formal Founder LOR, Direct Internship Referrals",
      "💰 INCENTIVES: Cash Awards & Performance Stipends",
      "🤝 COMMITMENT: 6-8 hrs/week leading campus chapter hackathons",
      "🚀 ENROLLMENT STATUS: OPEN FOR 50+ INDIAN UNIVERSITIES",
    ],
    link: { text: "Apply For CAP 2026", href: "/community" },
  },
  {
    id: "web3",
    command: "techhelp4u shardeum --testnet deploy",
    label: "Web3 & Shardeum Sprint",
    badge: "POC TOUR",
    output: [
      "🌐 CONNECTING TO SHARDEUM EVM TESTNET...",
      "🔗 STATE SHARDING: LINEAR SCALABILITY VERIFIED",
      "📦 SMART CONTRACT SUITE: Solidity 0.8.24 + Foundry Tests",
      "🛡️ AUDIT PROTOCOL: Gas Optimization & Reentrancy Guards",
      "🤝 PARTNER ECOSYSTEM: Shardeum × Gwalior DAO",
      "✨ PROOF OF COMMUNITY TOUR: Live workshops completed",
    ],
    link: { text: "Explore Collaborations", href: "/collaborations" },
  },
];

export function InteractiveTerminal() {
  const [activeCmdId, setActiveCmdId] = useState<string>("init");
  const [copied, setCopied] = useState(false);

  const activeCmd = COMMANDS.find((c) => c.id === activeCmdId) || COMMANDS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCmd.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-navy-950/70 border border-white/[0.12] p-6 sm:p-8 backdrop-blur-3xl shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.15),0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.1)] relative overflow-hidden">
      {/* Specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent pointer-events-none" />

      {/* Terminal Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 ml-2 font-medium">
            <Terminal className="w-3.5 h-3.5 text-cyan" />
            terminal@techhelp4u-cloud:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
            {activeCmd.badge}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan hover:border-cyan/30 transition-all text-xs"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Preset Command Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {COMMANDS.map((c) => {
          const isSelected = activeCmdId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCmdId(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md ${
                isSelected
                  ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                  : "bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-cyan/40 hover:bg-white/[0.08]"
              }`}
            >
              <ChevronRight className={`w-3 h-3 ${isSelected ? "text-navy-900" : "text-cyan"}`} />
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Screen Console */}
      <div className="rounded-2xl bg-navy-950/90 border border-white/[0.06] p-5 font-mono text-xs shadow-inner min-h-[220px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCmd.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            {/* User prompt line */}
            <div className="flex items-center gap-2 text-cyan font-bold pb-2 border-b border-white/[0.06]">
              <span className="text-emerald-400">builder@techhelp4u</span>
              <span className="text-slate-500">:</span>
              <span className="text-electric-violet">~/ecosystem</span>
              <span className="text-slate-400">$</span>
              <span className="text-foreground">{activeCmd.command}</span>
            </div>

            {/* Output lines */}
            <div className="pt-2 space-y-1.5 text-slate-300">
              {activeCmd.output.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-slate-500 select-none">›</span>
                  <span className={line.includes("✓") || line.includes("⚡") ? "text-cyan font-medium" : "text-slate-300"}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Link below output */}
        {activeCmd.link && (
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">COMMAND_OUTPUT_RETURN::0</span>
            <a
              href={activeCmd.link.href}
              className="text-cyan font-bold hover:underline flex items-center gap-1.5 bg-cyan/10 px-3 py-1 rounded-lg border border-cyan/30 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
            >
              <span>{activeCmd.link.text}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
