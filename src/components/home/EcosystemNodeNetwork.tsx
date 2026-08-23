"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Blocks, 
  ShieldAlert, 
  Terminal, 
  GitBranch, 
  Cloud, 
  Sparkles,
  Database,
  Cpu,
  Layers,
  Radio,
  Activity
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  category: string;
  icon: any;
  x: number; // percentage
  y: number; // percentage
  connections: string[];
  description: string;
  stats: string;
  color: string;
  telemetry: string;
}

const NODES: NodeItem[] = [
  {
    id: "ai",
    name: "Autonomous AI & Agents",
    category: "Machine Intelligence",
    icon: Brain,
    x: 50,
    y: 18,
    connections: ["web3", "data", "opensource", "cloud"],
    description: "Multi-agent systems, RAG workflows, LangGraph pipelines, and local LLM engineering.",
    stats: "Active Workshops & Hackathons",
    color: "#00E5FF",
    telemetry: "STATUS: AGENT_PIPELINE_ACTIVE",
  },
  {
    id: "web3",
    name: "Web3 & Sharded Ledgers",
    category: "Decentralized Systems",
    icon: Blocks,
    x: 22,
    y: 44,
    connections: ["ai", "security", "opensource"],
    description: "EVM smart contracts, dynamic state sharding with Shardeum, and verifiable state machines.",
    stats: "Live Partner Labs",
    color: "#8B5CF6",
    telemetry: "STATUS: SHARDEUM_NODE_SYNC",
  },
  {
    id: "data",
    name: "High-Velocity Data Science",
    category: "Analytics & ML",
    icon: Database,
    x: 78,
    y: 44,
    connections: ["ai", "cloud"],
    description: "Distributed data pipelines, real-time analytics, vector embeddings, and anomaly detection.",
    stats: "Curated Roadmaps",
    color: "#10B981",
    telemetry: "STATUS: STREAM_INGEST_READY",
  },
  {
    id: "security",
    name: "Cybersecurity & OSINT",
    category: "Defensive & Offensive Ops",
    icon: ShieldAlert,
    x: 18,
    y: 76,
    connections: ["web3", "opensource"],
    description: "SOC operations, malware analysis fundamentals, CTFs, and digital forensics.",
    stats: "Specialized Masterclasses",
    color: "#F59E0B",
    telemetry: "STATUS: FIREWALL_SOC_MONITOR",
  },
  {
    id: "opensource",
    name: "Open Source & Systems",
    category: "Engineering Craft",
    icon: GitBranch,
    x: 50,
    y: 82,
    connections: ["ai", "web3", "security", "cloud"],
    description: "Production Git workflows, code reviews, and student open-source contribution drives with Y-SoC.",
    stats: "Pan-India Sprints",
    color: "#00E5FF",
    telemetry: "STATUS: Y-SOC_SPRINT_ONLINE",
  },
  {
    id: "cloud",
    name: "Cloud & Distributed Infra",
    category: "Scalable Infrastructure",
    icon: Cloud,
    x: 82,
    y: 76,
    connections: ["ai", "data", "opensource"],
    description: "Containerization, Kubernetes, CI/CD orchestration, and serverless compute primitives.",
    stats: "Deployment Blueprints",
    color: "#38BDF8",
    telemetry: "STATUS: K8S_CLUSTER_HEALTHY",
  },
];

export function EcosystemNodeNetwork() {
  const [activeNodeId, setActiveNodeId] = useState<string>("ai");
  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[0];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] sm:h-[560px] rounded-3xl bg-navy-950/75 border border-white/[0.12] p-6 backdrop-blur-3xl overflow-hidden shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.18),0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(0,229,255,0.1)] flex flex-col justify-between group">
      {/* Specular top glare line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent pointer-events-none" />

      {/* Cyber Corner Markers */}
      <span className="absolute top-3 left-3 text-[10px] font-mono text-cyan/40 select-none">+</span>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-cyan/40 select-none">+</span>
      <span className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan/40 select-none">+</span>
      <span className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan/40 select-none">+</span>

      {/* Ambient background refraction glows & radar grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-electric-violet/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Concentric Radar Rings in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-cyan/10 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.04] pointer-events-none" />

      {/* Header bar within visualizer */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyan" />
            TECHHELP4U_TOPOLOGY::RADAR_2.6
          </span>
        </div>
        <span className="text-[11px] font-mono text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/30 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
          LIVE TOPOLOGY
        </span>
      </div>

      {/* SVG Connecting Lines with Pulsing Data Streams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {NODES.map((node) =>
          node.connections.map((targetId) => {
            const targetNode = NODES.find((n) => n.id === targetId);
            if (!targetNode || node.id > targetId) return null;
            
            const isConnectedToActive =
              activeNodeId === node.id || activeNodeId === targetId;

            return (
              <g key={`${node.id}-${targetId}`}>
                <line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke={isConnectedToActive ? "url(#activeLineGrad)" : "url(#lineGrad)"}
                  strokeWidth={isConnectedToActive ? 2.5 : 1}
                  strokeDasharray={isConnectedToActive ? "6 3" : "none"}
                  className={isConnectedToActive ? "transition-all duration-300 animate-pulse" : ""}
                />
              </g>
            );
          })
        )}
      </svg>

      {/* Nodes */}
      <div className="relative w-full h-full z-10">
        {NODES.map((node) => {
          const Icon = node.icon;
          const isActive = activeNodeId === node.id;

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              onClick={() => setActiveNodeId(node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
            >
              <div
                className={`relative flex items-center justify-center rounded-2xl p-3.5 transition-all duration-300 backdrop-blur-2xl ${
                  isActive
                    ? "bg-navy-850/95 border-2 border-cyan shadow-[0_0_35px_rgba(0,229,255,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.4)] scale-110"
                    : "bg-white/[0.06] border border-white/[0.12] hover:border-white/[0.3] hover:bg-white/[0.12] hover:scale-105 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
                }`}
              >
                <Icon
                  className="w-5 h-5 transition-colors"
                  style={{ color: isActive ? node.color : "#E2E8F0" }}
                />
                
                {isActive && (
                  <motion.div
                    layoutId="nodePulse"
                    className="absolute -inset-2 rounded-2xl border-2 border-cyan/50 animate-ping pointer-events-none"
                  />
                )}
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-center">
                <span
                  className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full backdrop-blur-md transition-colors ${
                    isActive
                      ? "text-cyan bg-navy-900/95 border border-cyan/50 shadow-[0_0_15px_rgba(0,229,255,0.3)] font-bold"
                      : "text-slate-300 group-hover:text-cyan bg-navy-950/60 border border-white/[0.08]"
                  }`}
                >
                  {node.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Glass Card at Bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 bg-navy-900/80 border border-white/[0.12] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18),0_15px_30px_-5px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              style={{
                backgroundColor: `${activeNode.color}20`,
                borderColor: `${activeNode.color}50`,
              }}
            >
              <activeNode.icon className="w-5 h-5" style={{ color: activeNode.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-foreground font-display">
                  {activeNode.name}
                </h4>
                <span className="text-[10px] font-mono text-cyan uppercase font-semibold">
                  [{activeNode.category}]
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 sm:line-clamp-none">
                {activeNode.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
            <span className="text-[11px] font-mono text-cyan bg-cyan/10 px-3 py-1 rounded-xl border border-cyan/30 shadow-[0_0_12px_rgba(0,229,255,0.2)] font-semibold">
              {activeNode.stats}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
