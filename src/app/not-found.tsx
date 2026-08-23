import React from "react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center rounded-3xl bg-navy-950/70 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-3xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15),0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Specular top glare line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan mx-auto mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.25)]">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-cyan font-bold block mb-2">
          ERROR_CODE::404_NODE_NOT_FOUND
        </span>

        <h1 className="text-3xl font-extrabold text-foreground font-display mb-3">
          Node Does Not Exist
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8 font-normal">
          The requested route or system node could not be resolved in the TECHhelp4U topology. It may have been relocated or deprecated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="cyan-glow" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/events" variant="glass" size="md">
            Explore Events
          </Button>
        </div>
      </div>
    </div>
  );
}
