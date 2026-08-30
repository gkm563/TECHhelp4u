import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cyan" | "violet" | "emerald" | "amber" | "neutral";
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "cyan",
  title,
  highlightText,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} dot size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
        {title}{" "}
        {highlightText && (
          <span className="text-gradient-cyan">{highlightText}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
