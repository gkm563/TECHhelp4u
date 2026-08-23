import React from "react";
import { Skeleton, InitiativeCardSkeleton } from "@/ui/Skeleton";

export default function InitiativesLoading() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="w-56 h-6 rounded-full mx-auto" />
          <Skeleton className="w-3/4 h-12 rounded-2xl mx-auto" />
          <Skeleton className="w-full h-14 rounded-xl mx-auto" />
        </div>

        {/* Initiatives List Skeletons */}
        <div className="space-y-12">
          {[...Array(4)].map((_, i) => (
            <InitiativeCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
