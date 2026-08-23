"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/ui/SectionHeading";
import { Badge } from "@/ui/Badge";
import { galleryData } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "hackathon", label: "Hackathons" },
    { id: "workshop", label: "Workshops" },
    { id: "community", label: "Community & Chapters" },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const currentIndex = selectedImage
    ? filteredItems.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setSelectedImage(filteredItems[0]);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Ambient background refraction glows */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="md" className="mb-4">
            VISUAL ARCHIVE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground font-display tracking-tight">
            Event Moments & <span className="text-gradient-cyan">Memories</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Moments captured across our hackathons, offline workshops, auditoriums, and community assemblies.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all backdrop-blur-xl ${
                selectedCategory === cat.id
                  ? "bg-cyan text-navy-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan"
                  : "bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-white/[0.2] hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl bg-navy-950/45 border border-white/[0.08] overflow-hidden cursor-pointer hover:border-cyan/50 transition-all duration-300 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_-10px_rgba(0,229,255,0.2)] hover:-translate-y-1.5 backdrop-blur-xl"
              data-cursor="VIEW"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-navy-950/40 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block mb-1">
                  {item.event} • {item.year}
                </span>
                <h3 className="text-base font-bold text-foreground font-display leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-mono">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Frosted Glass Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] bg-navy-950/85 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-navy-950/90 border border-white/[0.12] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(0,229,255,0.15)] backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Specular top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/80 border border-white/[0.15] text-slate-200 hover:text-cyan focus:outline-none backdrop-blur-md"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-950/80 border border-white/[0.15] text-slate-200 hover:text-cyan backdrop-blur-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-950/80 border border-white/[0.15] text-slate-200 hover:text-cyan backdrop-blur-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image View */}
              <div className="relative h-[360px] sm:h-[480px] w-full bg-black/60">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 bg-navy-950/80 border-t border-white/[0.08] backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan font-semibold">
                    {selectedImage.event}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedImage.location} • {selectedImage.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground font-display">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
