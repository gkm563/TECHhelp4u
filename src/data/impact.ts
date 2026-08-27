import { ImpactMetric } from "@/types";

export const impactMetrics: ImpactMetric[] = [
  {
    id: "active-learners",
    label: "Active Student Learners",
    value: 10000,
    suffix: "+",
    description: "Learners empowered through hands-on workshops, hackathons, Discord forums, and WhatsApp communities.",
    isVerified: true
  },
  {
    id: "partner-communities",
    label: "Partner Tech Communities",
    value: 100,
    suffix: "+",
    description: "Academic reach through collegiate developer clubs, tech societies, and national partner DAOs.",
    isVerified: true
  },
  {
    id: "prize-pool",
    label: "Hackathon Prizes Distributed",
    value: 200000,
    suffix: "₹+",
    description: "Awarded across The Black-Box Protocol System Escalation and Skill Climax hackathon series.",
    isVerified: true
  },
  {
    id: "events-hosted",
    label: "Hands-on Events & Sprints",
    value: 25,
    suffix: "+",
    description: "Flagship multi-city hackathons, AI masterclasses with Nasdaq specialists, and campus workshops.",
    isVerified: true
  }
];
