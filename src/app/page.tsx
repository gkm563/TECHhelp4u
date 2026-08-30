import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { CommunityChannelsSection } from "@/components/home/CommunityChannelsSection";
import { FlagshipHackathonSection } from "@/components/home/FlagshipHackathonSection";
import { EventsPreview } from "@/components/home/EventsPreview";
import { BuilderStoriesSection } from "@/components/home/BuilderStoriesSection";
import { CommunityFAQSection } from "@/components/home/CommunityFAQSection";
import { CommunityCTA } from "@/components/home/CommunityCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustMarquee />
      <CommunityChannelsSection />
      <FlagshipHackathonSection />
      <EventsPreview />
      <BuilderStoriesSection />
      <CommunityFAQSection />
      <CommunityCTA />
    </div>
  );
}
