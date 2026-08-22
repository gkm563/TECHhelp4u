"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { Button } from "@/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-navy-900/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="TECHhelp4U Home"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-800 border border-cyan/40 flex items-center justify-center relative overflow-hidden group-hover:border-cyan transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <div className="absolute inset-0 bg-cyan/10 group-hover:bg-cyan/20 transition-colors" />
              <Terminal className="w-5 h-5 text-cyan relative z-10 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-foreground flex items-center gap-1">
                TECH<span className="text-cyan font-mono">help4U</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-850/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navItems.slice(0, 7).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative",
                    isActive
                      ? "text-navy-900 font-semibold"
                      : "text-slate-300 hover:text-cyan hover:bg-slate-800/40"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-cyan rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.title}
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-red-500/20 text-red-400 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/events"
              variant="ghost"
              size="sm"
              className="text-xs font-medium"
            >
              Explore Events
            </Button>
            <Button
              href="/community"
              variant="cyan-glow"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              data-cursor="JOIN"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/community"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Join
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-800/80 border border-slate-700 text-slate-200 hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 px-3">
                Navigation
              </span>
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-cyan/10 text-cyan border border-cyan/30"
                          : "text-slate-300 hover:bg-navy-800 hover:text-foreground"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.title}
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-red-500/20 text-red-400 font-mono">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-60" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-3">
              <Button
                href="/community"
                variant="cyan-glow"
                size="lg"
                className="w-full justify-center"
              >
                Join Community & CAP 2026
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full justify-center"
              >
                Partner With Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
