"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { SpotlightCard } from "@/ui/SpotlightCard";
import { 
  Code2, 
  Brain, 
  GitBranch, 
  Cloud, 
  Blocks, 
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Layers,
  Terminal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
  {
    id: "web-dev",
    name: "Modern Full-Stack Web Development",
    icon: Code2,
    badge: "Most Popular Track",
    tagline: "React, Next.js, Node.js & Production Deployments",
    description: "Learn how to build responsive, performant full-stack web applications from idea to live deployment on Vercel. We cover modern frontend architectures, REST/GraphQL APIs, database modeling, and authentication.",
    skillsGained: ["Next.js App Router", "TypeScript", "Tailwind CSS", "PostgreSQL / Supabase", "REST & Server Actions"],
    curriculum: [
      "Building responsive user interfaces with Tailwind CSS",
      "Server-side rendering, APIs & database integration",
      "Deploying production-ready apps with CI/CD & custom domains"
    ],
    sampleProject: "Interactive Real-Time Campus Collaboration Portal",
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Applied ML",
    icon: Brain,
    badge: "High Growth Track",
    tagline: "Python, AI APIs, LangChain & LLM Applications",
    description: "Go beyond basic prompts. Learn how to integrate generative AI models into real software products, build intelligent search with vector databases, and develop practical AI automation tools.",
    skillsGained: ["Python", "LangChain", "OpenAI & Open-Source LLMs", "Vector Embeddings", "FastAPI"],
    curriculum: [
      "Prompt engineering and API integration fundamentals",
      "Building Retrieval-Augmented Generation (RAG) search engines",
      "Deploying lightweight AI backend services with FastAPI"
    ],
    sampleProject: "AI-Powered Course Assistant & Document Search",
  },
  {
    id: "open-source",
    name: "Open Source & GitHub Workflows",
    icon: GitBranch,
    badge: "Community Initiative",
    tagline: "Git, Collaboration, Code Reviews & Public Contributions",
    description: "Master the engineering craft that top tech companies look for. Learn Git branching strategies, write clean pull requests, participate in code reviews, and contribute to public open-source software.",
    skillsGained: ["Git CLI & GitHub", "Pull Request Workflows", "Open Source Licensing", "Issue Triage & Code Reviews"],
    curriculum: [
      "Setting up local dev environments and Git branching best practices",
      "Finding beginner-friendly 'good first issues' on GitHub",
      "Contributing to live projects during Open Sphere & Y-SoC"
    ],
    sampleProject: "Contributing to Developer Tooling & Community Repos",
  },
  {
    id: "cloud-devops",
    name: "Cloud Computing & DevOps",
    icon: Cloud,
    badge: "Core Engineering",
    tagline: "Docker, Linux, Cloud Hosting & Scalable Infrastructure",
    description: "Understand how modern applications run in production. Learn containerization with Docker, basic Linux server administration, cloud hosting providers, and monitoring.",
    skillsGained: ["Docker", "Linux CLI", "AWS / Vercel Cloud", "GitHub Actions CI/CD"],
    curriculum: [
      "Containerizing applications with Docker and Docker Compose",
      "Automating tests and builds with GitHub Actions CI/CD",
      "Setting up serverless backend infrastructure and databases"
    ],
    sampleProject: "Automated Multi-Environment Deployment Pipeline",
  },
  {
    id: "web3",
    name: "Web3 & Decentralized Apps",
    icon: Blocks,
    badge: "Partner Ecosystem",
    tagline: "Smart Contracts, Solidity & Blockchain Fundamentals",
    description: "Hands-on workshops in partnership with Web3 ecosystems like Shardeum. Learn smart contract development, testnet deployment, and building decentralized user interfaces.",
    skillsGained: ["Solidity", "EVM Basics", "MetaMask / Web3.js", "Smart Contract Testing"],
    curriculum: [
      "Writing and deploying verified smart contracts on testnets",
      "Connecting frontend apps to decentralized wallets",
      "Participating in Web3 hackathons and bounty tracks"
    ],
    sampleProject: "Decentralized Event Ticketing & Certificate DApp",
  },
];

export function EcosystemExplorer() {
  const [selectedDomain, setSelectedDomain] = useState(DOMAINS[0]);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40">
      {/* Background ambient refraction */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="HANDS-ON LEARNING TRACKS"
          title="What We Learn &"
          highlightText="Build Together"
          description="We focus on practical, industry-relevant technologies that empower students to build real portfolio projects and land engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Domain Tabs List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {DOMAINS.map((domain) => {
              const Icon = domain.icon;
              const isSelected = selectedDomain.id === domain.id;

              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className={`w-full flex items-center justify-between p-4 rounded-3xl border text-left transition-all duration-300 backdrop-blur-xl ${
                    isSelected
                      ? "bg-navy-850/95 border-cyan shadow-[0_0_30px_rgba(0,229,255,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.2)] translate-x-1.5"
                      : "bg-white/[0.03] border-white/[0.07] hover:border-white/[0.2] hover:bg-white/[0.06] text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${
                        isSelected
                          ? "bg-cyan/15 border-cyan/50 text-cyan shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                          : "bg-white/[0.05] border-white/[0.08] text-slate-400"
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

          {/* Detailed Domain Showcase Bento Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl bg-navy-950/75 border border-white/[0.12] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-3xl shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.15),0_25px_60px_-15px_rgba(0,0,0,0.7)]"
              >
                {/* Specular top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <Badge variant="cyan" size="md">
                      {selectedDomain.badge}
                    </Badge>
                    <span className="text-xs font-mono text-cyan font-semibold">
                      Hands-on Workshops
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                      <selectedDomain.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                        {selectedDomain.name}
                      </h3>
                      <p className="text-sm font-mono text-slate-400 mt-0.5">
                        {selectedDomain.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mt-4 font-normal">
                    {selectedDomain.description}
                  </p>

                  {/* Curriculum & Key Topics */}
                  <div className="mt-6 p-5 rounded-2xl bg-navy-950/80 border border-white/[0.08] space-y-2.5">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-cyan font-bold flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-cyan" />
                      What We Cover in Workshops
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {selectedDomain.curriculum.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Tech Stack */}
                  <div className="mt-6">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5 font-semibold">
                      Core Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedDomain.skillsGained.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-xl bg-cyan/10 border border-cyan/20 text-xs font-mono text-cyan shadow-[0_0_10px_rgba(0,229,255,0.12)] font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">CAPSTONE PROJECT EXAMPLE</span>
                    <span className="text-xs font-bold text-slate-200">{selectedDomain.sampleProject}</span>
                  </div>
                  <Button
                    href="/events"
                    variant="glass"
                    size="sm"
                    rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    View Upcoming Workshops
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
