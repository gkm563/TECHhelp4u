import { ImpactMetric } from "@/types";

export const impactMetrics: ImpactMetric[] = [
  {
    id: "students-engaged",
    label: "Students & Builders Reached",
    value: 5000,
    suffix: "+",
    description: "Learners engaged across hackathons, workshops, webinars, and hands-on bootcamps.",
    isVerified: true
  },
  {
    id: "partner-colleges",
    label: "Target Partner Campuses",
    value: 50,
    suffix: "+",
    description: "Colleges integrated into the 2026 Campus Ambassador Program expansion.",
    isVerified: true
  },
  {
    id: "ecosystem-partners",
    label: "Industry & Ecosystem Partners",
    value: 10,
    suffix: "+",
    description: "Verified partnerships including HiDevs, Shardeum, AI House, Y-SoC, and Unstop.",
    isVerified: true
  },
  {
    id: "events-organized",
    label: "Events & Sprints Hosted",
    value: 25,
    suffix: "+",
    description: "Flagship hybrid hackathons, blockchain tours, AI masterclasses, and college sessions.",
    isVerified: true
  }
];
