export type EventCategory = 
  | "hackathon" 
  | "workshop" 
  | "webinar" 
  | "meetup" 
  | "sprint" 
  | "collaboration";

export type EventMode = "offline" | "online" | "hybrid";

export type EventStatus = "upcoming" | "active" | "concluded";

export interface EventSpeakerOrMentor {
  name: string;
  role: string;
  companyOrOrg: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
}

export interface EventScheduleItem {
  timeOrPhase: string;
  title: string;
  description: string;
  location?: string;
}

export interface EventTrack {
  title: string;
  description: string;
  technologies: string[];
}

export interface EventPartner {
  name: string;
  role: string; // e.g. "Incubation Partner", "Co-host", "Platform Partner"
  logo?: string;
  website?: string;
}

export interface EventPrize {
  title: string;
  reward: string;
  description?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  venueDetails?: string;
  mode: EventMode;
  category: EventCategory;
  status: EventStatus;
  isFeatured?: boolean;
  featuredBadge?: string;
  coverImage: string;
  galleryImages?: string[];
  registrationUrl?: string;
  registrationStatusText?: string;
  eventUrl?: string;
  tags: string[];
  technologies: string[];
  eligibility?: string;
  teamSize?: string;
  organizers: string[];
  partners: EventPartner[];
  speakersAndMentors?: EventSpeakerOrMentor[];
  schedule?: EventScheduleItem[];
  tracks?: EventTrack[];
  prizes?: EventPrize[];
  highlights?: string[];
  faqs?: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
}

export type PartnerCategory = 
  | "community" 
  | "technology" 
  | "education" 
  | "platform" 
  | "ecosystem" 
  | "sponsor";

export interface Partner {
  id: string;
  name: string;
  category: PartnerCategory;
  logo: string;
  description: string;
  collaborationType: string;
  website: string;
  jointEvents?: string[];
  featured?: boolean;
}

export type TeamTier = 
  | "leadership" 
  | "core" 
  | "technical" 
  | "operations" 
  | "community" 
  | "creative" 
  | "ambassador_lead";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tier: TeamTier;
  department: string;
  bio: string;
  avatar?: string;
  initials?: string;
  gradient?: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;
  featured?: boolean;
}

export interface Initiative {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  objective: string;
  howItWorks: string[];
  targetAudience: string;
  outcomes: string[];
  badge: string;
  iconName: string;
  relatedEvents?: string[];
}

export interface Resource {
  id: string;
  title: string;
  category: "roadmap" | "repository" | "recording" | "guide" | "toolkit";
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  tags: string[];
  link: string;
  isExternal: boolean;
  authorOrOrg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  year: string;
  location: string;
  category: "hackathon" | "workshop" | "community" | "speaker";
  imageUrl: string;
  caption: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  isVerified: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institutionOrCompany: string;
  event: string;
  avatar?: string;
  profileUrl?: string;
}
