import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center rounded-3xl bg-navy-850 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mx-auto mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-cyan font-bold block mb-2">
          ERROR_CODE::404_NODE_NOT_FOUND
        </span>

        <h1 className="text-3xl font-extrabold text-foreground font-display mb-3">
          Node Does Not Exist
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The requested route or system node could not be resolved in the TECHhelp4U topology. It may have been relocated or deprecated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="cyan-glow" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/events" variant="outline" size="md">
            Explore Events
          </Button>
        </div>
      </div>
    </div>
  );
}
