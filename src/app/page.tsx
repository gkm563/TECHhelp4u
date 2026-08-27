import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { StorytellingNarrative } from "@/components/home/StorytellingNarrative";
import { EcosystemExplorer } from "@/components/home/EcosystemExplorer";
import { FlagshipHackathonSection } from "@/components/home/FlagshipHackathonSection";
import { EventsPreview } from "@/components/home/EventsPreview";
import { ImpactSection } from "@/components/home/ImpactSection";
import { BuilderStoriesSection } from "@/components/home/BuilderStoriesSection";
import { CommunityCTA } from "@/components/home/CommunityCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustMarquee />
      <StorytellingNarrative />
      <EcosystemExplorer />
      <FlagshipHackathonSection />
      <EventsPreview />
      <ImpactSection />
      <BuilderStoriesSection />
      <CommunityCTA />
    </div>
  );
}
