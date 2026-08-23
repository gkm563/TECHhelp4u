import React from "react";
import { Skeleton, ResourceCardSkeleton } from "@/ui/Skeleton";

export default function ResourcesLoading() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="w-52 h-6 rounded-full mx-auto" />
          <Skeleton className="w-3/4 h-12 rounded-2xl mx-auto" />
          <Skeleton className="w-full h-14 rounded-xl mx-auto" />
        </div>

        {/* Search & Filter Bar Skeleton */}
        <div className="rounded-3xl bg-navy-950/60 border border-white/[0.1] p-6 sm:p-8 backdrop-blur-2xl mb-12 space-y-4">
          <Skeleton className="w-full h-12 rounded-2xl" />
          <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
            <Skeleton className="w-28 h-8 rounded-2xl" />
            <Skeleton className="w-36 h-8 rounded-2xl" />
            <Skeleton className="w-32 h-8 rounded-2xl" />
            <Skeleton className="w-32 h-8 rounded-2xl" />
          </div>
        </div>

        {/* Resources Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <ResourceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
