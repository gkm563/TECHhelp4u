"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { Button } from "@/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const desktopNavItems = [
    { title: "About", href: "/about" },
    { title: "Events", href: "/events", badge: "Live" },
    { title: "Campus Leads (CAP)", href: "/community" },
    { title: "Resources", href: "/resources" },
    { title: "Team", href: "/team" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          "fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center",
          isScrolled
            ? "top-2 sm:top-4 px-3 sm:px-6"
            : "top-0 w-full px-4 sm:px-6 lg:px-8 py-5 bg-transparent"
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between transition-all duration-300",
            isScrolled
              ? "max-w-6xl py-2.5 px-4 sm:px-6 rounded-full bg-white/90 dark:bg-navy-950/85 backdrop-blur-2xl border border-slate-200/90 dark:border-white/[0.12] shadow-lg dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              : "max-w-7xl mx-auto"
          )}
        >
          {/* Logo with official emblem image */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none shrink-0"
            aria-label="TECHhelp4U Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-navy-950/80 border border-slate-200 dark:border-white/[0.15] flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/60 dark:group-hover:border-cyan/60 transition-all duration-300 shadow-sm">
              <Image
                src="/logo.png"
                alt="TECHhelp4U Official Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-foreground flex items-center gap-1.5">
                TECH<span className="text-cyan-700 dark:text-cyan font-mono">help4U</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan animate-pulse" />
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Student Tech Community
              </span>
            </div>
          </Link>

          {/* Desktop Frosted Glass Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.04] backdrop-blur-2xl px-3.5 py-1.5 rounded-full border border-slate-200/90 dark:border-white/[0.09] shadow-sm">
            {desktopNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative",
                    isActive
                      ? "text-navy-900 font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan hover:bg-slate-200/60 dark:hover:bg-white/[0.05]"
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
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-red-500/15 text-red-600 dark:text-red-400 font-mono font-bold">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Button
              href="https://linktr.ee/techhelpu"
              isExternal
              variant="cyan-glow"
              size="sm"
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              href="https://linktr.ee/techhelpu"
              isExternal
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Join
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white/90 dark:bg-white/[0.05] backdrop-blur-xl border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-200 hover:text-cyan focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Frosted Glass Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-3xl flex flex-col pt-24 pb-8 px-6 lg:hidden overflow-y-auto border-b border-slate-200 dark:border-white/[0.08]"
          >
            {/* Ambient background glow inside mobile menu */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between px-3 mb-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Menu & Pages
              </span>
              <ThemeToggle showLabel />
            </div>

            <div className="flex flex-col gap-2 mb-8 relative z-10">
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
                        "flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-all",
                        isActive
                          ? "bg-cyan/15 text-cyan-700 dark:text-cyan border border-cyan/40 shadow-sm"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-foreground border border-transparent"
                      )}
                    >
                      <span className="flex items-center gap-2 font-medium">
                        {item.title}
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-red-500/15 text-red-600 dark:text-red-400 font-mono font-bold">
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

            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-col gap-3 relative z-10">
              <Button
                href="https://linktr.ee/techhelpu"
                isExternal
                variant="cyan-glow"
                size="lg"
                className="w-full justify-center"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Join WhatsApp & Discord
              </Button>
              <Button
                href="/community"
                variant="glass"
                size="lg"
                className="w-full justify-center"
              >
                Campus Ambassador (CAP)
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
