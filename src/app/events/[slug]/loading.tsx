import React from "react";
import { Skeleton } from "@/ui/Skeleton";

export default function EventDetailLoading() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link Skeleton */}
        <Skeleton className="w-36 h-4 rounded-md mb-8" />

        {/* Hero Banner Card Skeleton */}
        <div className="rounded-3xl bg-navy-950/65 border border-white/[0.1] p-8 sm:p-12 backdrop-blur-3xl mb-12 space-y-6">
          <div className="flex gap-2">
            <Skeleton className="w-24 h-6 rounded-full" />
            <Skeleton className="w-32 h-6 rounded-full" />
          </div>
          <Skeleton className="w-3/4 h-12 rounded-2xl" />
          <Skeleton className="w-1/2 h-6 rounded-lg" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
          </div>
        </div>

        {/* Content Layout Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 backdrop-blur-2xl space-y-4">
              <Skeleton className="w-48 h-7 rounded-xl" />
              <Skeleton className="w-full h-24 rounded-xl" />
            </div>
            <div className="rounded-3xl bg-navy-950/50 border border-white/[0.08] p-8 backdrop-blur-2xl space-y-4">
              <Skeleton className="w-56 h-7 rounded-xl" />
              <Skeleton className="w-full h-36 rounded-xl" />
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-6 backdrop-blur-2xl space-y-4">
              <Skeleton className="w-36 h-5 rounded-md" />
              <Skeleton className="w-full h-28 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
