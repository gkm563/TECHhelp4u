"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { 
  Brain, 
  Blocks, 
  Database, 
  ShieldAlert, 
  GitBranch, 
  Cloud, 
  Code2, 
  ArrowUpRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
  {
    id: "ai-agents",
    name: "Artificial Intelligence & Agents",
    icon: Brain,
    badge: "Active Focus",
    tagline: "Autonomous Agent Architectures & Local LLMs",
    description: "From prompt engineering to building real-world multi-agent decision pipelines with LangGraph, ChromaDB vector stores, and custom fine-tuning workflows.",
    initiatives: ["The Black-Box Protocol", "GenAI Masterclasses", "Autonomous Agent Sprints"],
    tech: ["Python", "LangChain", "PyTorch", "Ollama", "Vector DBs"],
    stats: "Regular Hands-on Workshops",
  },
  {
    id: "web3-blockchain",
    name: "Web3 & Distributed Ledgers",
    icon: Blocks,
    badge: "Ecosystem Partner",
    tagline: "Decentralized State Machines & Smart Contracts",
    description: "Deep-dive workshops into Solidity, EVM internals, gas optimization, and linearly scalable sharded networks with partners like Shardeum and Gwalior DAO.",
    initiatives: ["Shardeum Proof of Community", "Smart Contract Auditor Sprints"],
    tech: ["Solidity", "Hardhat", "Foundry", "EVM", "Shardeum"],
    stats: "Live Testnet Deployments",
  },
  {
    id: "data-science",
    name: "High-Performance Data Science",
    icon: Database,
    badge: "Core Track",
    tagline: "High-Throughput Analytics & Pipelines",
    description: "Scalable data ingestion engines, real-time analytics, feature engineering for ML models, and predictive systems.",
    initiatives: ["System Escalation Stage 01", "Data Analysis Masterclasses"],
    tech: ["Pandas", "Scikit-Learn", "Apache Kafka", "ClickHouse"],
    stats: "Interactive Datasets",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & OSINT",
    icon: ShieldAlert,
    badge: "Specialized Track",
    tagline: "Threat Modeling, Forensics & Defensive Ops",
    description: "Structured modules covering OSINT investigations, malware analysis foundations, digital forensics, and Capture-The-Flag (CTF) challenges.",
    initiatives: ["OSINT Handbooks", "Security Briefings"],
    tech: ["Wireshark", "Burp Suite", "Ghidra", "Linux", "SOC Tools"],
    stats: "Industry Mentors",
  },
  {
    id: "open-source",
    name: "Open Source & Systems",
    icon: GitBranch,
    badge: "Nationwide Sprint",
    tagline: "Production Git Workflows & Contribution Labs",
    description: "Partnering with Youth Season of Code (Y-SoC) to guide students through clean PRs, code reviews, Docker deployments, and repo maintainership.",
    initiatives: ["Open Sphere 2026", "Campus Open Source Labs"],
    tech: ["Git", "GitHub Actions", "Docker", "Linux", "TypeScript"],
    stats: "Production Codebases",
  },
  {
    id: "cloud-infra",
    name: "Cloud & Developer Tooling",
    icon: Cloud,
    badge: "Foundation",
    tagline: "Full-Stack Deployment & CI/CD Pipelines",
    description: "Deploying resilient web applications, mastering Next.js architectures, serverless computing, and database scaling.",
    initiatives: ["Hackathon Starter Blueprints", "Cloud Labs"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "AWS"],
    stats: "Full-Stack Templates",
  },
];

export function EcosystemExplorer() {
  const [selectedDomain, setSelectedDomain] = useState(DOMAINS[0]);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-850/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE DOMAIN MATRIX"
          title="Explore the"
          highlightText="TECHhelp4U Ecosystem"
          description="We do not limit students to a single narrow track. Dive into the core domains where TECHhelp4U conducts workshops, hackathons, and long-term project incubation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Domain Tabs List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {DOMAINS.map((domain) => {
              const Icon = domain.icon;
              const isSelected = selectedDomain.id === domain.id;

              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isSelected
                      ? "bg-navy-800 border-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)] translate-x-1"
                      : "bg-navy-900/80 border-slate-800 hover:border-slate-700 hover:bg-navy-850 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-cyan/10 border-cyan/40 text-cyan"
                          : "bg-navy-800 border-slate-700 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold font-display ${
                          isSelected ? "text-cyan" : "text-foreground"
                        }`}
                      >
                        {domain.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        {domain.tagline}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-cyan translate-x-0.5 -translate-y-0.5" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Domain Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl bg-navy-900 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/5 blur-[100px] rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Badge variant="cyan" dot size="md">
                      {selectedDomain.badge}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedDomain.stats}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                      <selectedDomain.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                        {selectedDomain.name}
                      </h3>
                      <p className="text-sm font-mono text-cyan">
                        {selectedDomain.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mt-4">
                    {selectedDomain.description}
                  </p>

                  {/* Related Initiatives */}
                  <div className="mt-8">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                      Connected Initiatives & Events
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedDomain.initiatives.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-xl bg-navy-800 border border-slate-700 text-xs font-medium text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Technologies */}
                  <div className="mt-6">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                      Core Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedDomain.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-cyan/5 border border-cyan/20 text-xs font-mono text-cyan"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-400">
                    Want to lead a workshop in this track?
                  </span>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Propose Track
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
