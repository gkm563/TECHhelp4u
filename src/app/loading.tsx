import React from "react";
import { Skeleton } from "@/ui/Skeleton";
import { Terminal } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Skeleton className="w-36 h-6 rounded-full mx-auto" />
          <Skeleton className="w-3/4 h-12 rounded-2xl mx-auto" />
          <Skeleton className="w-full h-16 rounded-xl mx-auto" />
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-3xl bg-navy-950/45 border border-white/[0.08] p-7 backdrop-blur-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="w-20 h-6 rounded-full" />
                <Skeleton className="w-16 h-4 rounded-md" />
              </div>
              <Skeleton className="w-3/4 h-7 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-lg" />
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Skeleton className="w-24 h-4 rounded-md" />
                <Skeleton className="w-20 h-8 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
