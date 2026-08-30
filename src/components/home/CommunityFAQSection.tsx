"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommunityFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is TECHhelp4U completely free for students?",
      a: "Yes, 100%! All our webinars, workshops, study tracks, community channels, and open hackathons are completely free to attend for all students and young developers.",
    },
    {
      q: "Who can join the TECHhelp4U community?",
      a: "Anyone passionate about technology! Whether you are a 1st-year student who just wrote your first 'Hello World', a competitive coder, an AI enthusiast, a designer, or an experienced builder, you are welcome here.",
    },
    {
      q: "How do I find teammates for hackathons?",
      a: "We have dedicated '#team-formation' channels on our Discord and WhatsApp groups. You can post your tech stack, share project ideas, and connect with peers from other colleges to form a squad.",
    },
    {
      q: "What is the Campus Ambassador Program (CAP)?",
      a: "CAP is our 6-month student leadership initiative. Campus Leads represent TECHhelp4U in their colleges, organize local workshops, and receive exclusive letters of recommendation, mentorship, and merchandise.",
    },
    {
      q: "Can our college tech club partner with TECHhelp4U?",
      a: "Absolutely! We love collaborating with college clubs and societies. We can co-host hackathons, provide speakers, or cross-promote events. Simply reach out via our Contact or Partner page.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions?"
          highlightText="We've Got Answers."
          description="Everything you need to know about joining TECHhelp4U, attending events, and getting involved."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/90 dark:bg-navy-950/60 border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-foreground flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-600 dark:text-cyan" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-white/[0.04]">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
