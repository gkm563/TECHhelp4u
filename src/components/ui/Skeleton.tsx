"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "rounded" | "circular" | "rectangular" | "pill";
}

export function Skeleton({
  className,
  variant = "rounded",
  ...props
}: SkeletonProps) {
  const variantClasses = {
    rounded: "rounded-2xl",
    circular: "rounded-full",
    rectangular: "rounded-none",
    pill: "rounded-full",
  };

  return (
    <div
      className={cn(
        "skeleton-shimmer bg-slate-200/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)]">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-20 h-6 rounded-full" />
            <Skeleton className="w-24 h-6 rounded-full" />
          </div>
          <Skeleton className="w-16 h-4 rounded-md" />
        </div>

        {/* Title & Tagline */}
        <Skeleton className="w-3/4 h-7 rounded-xl mb-2" />
        <Skeleton className="w-1/2 h-4 rounded-md mb-4" />
        <Skeleton className="w-full h-12 rounded-xl mb-4" />

        {/* Metadata Details */}
        <div className="mt-5 space-y-2 border-t border-slate-200 dark:border-white/[0.06] pt-4">
          <Skeleton className="w-1/2 h-4 rounded-md" />
          <Skeleton className="w-2/3 h-4 rounded-md" />
          <Skeleton className="w-1/3 h-4 rounded-md" />
        </div>

        {/* Tech Glass Chips */}
        <div className="mt-5 flex gap-1.5">
          <Skeleton className="w-14 h-5 rounded-lg" />
          <Skeleton className="w-16 h-5 rounded-lg" />
          <Skeleton className="w-12 h-5 rounded-lg" />
          <Skeleton className="w-14 h-5 rounded-lg" />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-7 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="w-24 h-4 rounded-md" />
        <Skeleton className="w-28 h-9 rounded-xl" />
      </div>
    </div>
  );
}

export function ResourceCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] p-7 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_15px_35px_-10px_rgba(0,0,0,0.5)]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="w-20 h-5 rounded-full" />
          <Skeleton className="w-16 h-5 rounded-full" />
        </div>
        <Skeleton className="w-3/4 h-6 rounded-xl mb-2" />
        <Skeleton className="w-full h-10 rounded-lg mb-6" />
        <div className="flex gap-1.5 mb-6">
          <Skeleton className="w-12 h-4 rounded-md" />
          <Skeleton className="w-14 h-4 rounded-md" />
          <Skeleton className="w-10 h-4 rounded-md" />
        </div>
      </div>
      <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="w-20 h-4 rounded-md" />
        <Skeleton className="w-24 h-4 rounded-md" />
      </div>
    </div>
  );
}

export function PartnerCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] p-7 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="w-12 h-12 rounded-2xl" />
          <Skeleton className="w-20 h-5 rounded-full" />
        </div>
        <Skeleton className="w-2/3 h-6 rounded-xl mb-1" />
        <Skeleton className="w-1/2 h-4 rounded-md mb-3" />
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="w-20 h-4 rounded-md" />
        <Skeleton className="w-20 h-4 rounded-md" />
      </div>
    </div>
  );
}

export function GalleryCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/45 border border-slate-200/80 dark:border-white/[0.08] overflow-hidden backdrop-blur-xl">
      <Skeleton className="h-64 sm:h-72 w-full rounded-none" />
      <div className="p-6 space-y-2 border-t border-slate-200 dark:border-white/[0.06]">
        <Skeleton className="w-1/3 h-3 rounded-md" />
        <Skeleton className="w-2/3 h-5 rounded-lg" />
        <Skeleton className="w-1/2 h-3 rounded-md" />
      </div>
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/50 border border-slate-200/80 dark:border-white/[0.08] p-8 sm:p-10 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="w-16 h-16 rounded-2xl" />
          <Skeleton className="w-28 h-6 rounded-full" />
        </div>
        <Skeleton className="w-1/2 h-7 rounded-xl mb-1" />
        <Skeleton className="w-1/3 h-4 rounded-md mb-4" />
        <Skeleton className="w-full h-14 rounded-lg mb-6" />
        <div className="flex gap-1.5">
          <Skeleton className="w-14 h-6 rounded-xl" />
          <Skeleton className="w-16 h-6 rounded-xl" />
          <Skeleton className="w-12 h-6 rounded-xl" />
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="w-28 h-4 rounded-md" />
        <div className="flex gap-2">
          <Skeleton className="w-8 h-8 rounded-xl" />
          <Skeleton className="w-8 h-8 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function InitiativeCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white/80 dark:bg-navy-950/50 border border-slate-200/80 dark:border-white/[0.08] p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-12 rounded-2xl" />
          <div className="space-y-1.5">
            <Skeleton className="w-24 h-5 rounded-full" />
            <Skeleton className="w-48 h-7 rounded-xl" />
          </div>
        </div>
        <Skeleton className="w-32 h-6 rounded-2xl" />
      </div>
      <Skeleton className="w-full h-12 rounded-xl mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Skeleton className="h-28 rounded-3xl" />
        <Skeleton className="h-28 rounded-3xl" />
      </div>
      <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="w-36 h-4 rounded-md" />
        <Skeleton className="w-36 h-9 rounded-xl" />
      </div>
    </div>
  );
}
