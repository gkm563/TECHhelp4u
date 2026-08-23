import React from "react";
import { Skeleton, GalleryCardSkeleton } from "@/ui/Skeleton";

export default function GalleryLoading() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="w-40 h-6 rounded-full mx-auto" />
          <Skeleton className="w-3/4 h-12 rounded-2xl mx-auto" />
          <Skeleton className="w-full h-14 rounded-xl mx-auto" />
        </div>

        {/* Category Pills Skeleton */}
        <div className="flex justify-center gap-2 mb-12">
          <Skeleton className="w-24 h-9 rounded-2xl" />
          <Skeleton className="w-28 h-9 rounded-2xl" />
          <Skeleton className="w-28 h-9 rounded-2xl" />
          <Skeleton className="w-36 h-9 rounded-2xl" />
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <GalleryCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
