import React from "react";
import { Skeleton, TeamCardSkeleton } from "@/ui/Skeleton";

export default function TeamLoading() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="w-36 h-6 rounded-full mx-auto" />
          <Skeleton className="w-3/4 h-12 rounded-2xl mx-auto" />
          <Skeleton className="w-full h-14 rounded-xl mx-auto" />
        </div>

        {/* Leadership Tier Skeleton */}
        <div className="mb-16 space-y-8">
          <Skeleton className="w-56 h-5 rounded-md" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamCardSkeleton />
            <TeamCardSkeleton />
          </div>
        </div>

        {/* Network Tier Skeleton */}
        <div className="space-y-8">
          <Skeleton className="w-72 h-5 rounded-md" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamCardSkeleton />
            <TeamCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
