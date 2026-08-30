export interface CommunityEventArchive {
  id: string;
  title: string;
  event: string;
  year: string;
  location: string;
  category: "hackathon" | "workshop" | "community" | "speaker";
  attendees: string;
  partnerOrHost: string;
  description: string;
  tags: string[];
}

export const galleryArchiveData: CommunityEventArchive[] = [
  {
    id: "g-1",
    title: "Skill Climax V1.0 & Black-Box Protocol",
    event: "National Hackathon",
    year: "2025–2026",
    location: "MITS Gwalior & Online",
    category: "hackathon",
    attendees: "500+ Builders",
    partnerOrHost: "MITS Gwalior × HiDevs × Unstop",
    description: "Central India's largest student-driven hackathon with teams building production MVPs in AI, Web3, and Full-Stack Engineering across 40+ colleges.",
    tags: ["Hackathon", "₹2,00,000 Prizes", "40+ Colleges"],
  },
  {
    id: "g-2",
    title: "Skill Showdown v1.0 Live Workshop",
    event: "Hands-on Masterclass",
    year: "2025",
    location: "OIST Bhopal",
    category: "workshop",
    attendees: "200+ Students",
    partnerOrHost: "Oriental Institute of Science & Technology",
    description: "Hands-on masterclass on modern full-stack development, developer tooling, open source workflows, and technical freelancing.",
    tags: ["Full-Stack", "Web Dev", "Bhopal Hub"],
  },
  {
    id: "g-3",
    title: "TECHhelp4U × Shardeum Web3 Builder Tour",
    event: "EVM Smart Contract Workshop",
    year: "2025",
    location: "Gwalior / Hybrid Hub",
    category: "community",
    attendees: "150+ Developers",
    partnerOrHost: "Shardeum Blockchain",
    description: "Live testnet smart contract deployment session and decentralized architecture walkthrough with Shardeum contributors.",
    tags: ["Web3", "Smart Contracts", "EVM"],
  },
  {
    id: "g-4",
    title: "Open Sphere (Youth Season of Code)",
    event: "Open-Source Mentorship Drive",
    year: "2026",
    location: "Online / Pan-India",
    category: "workshop",
    attendees: "300+ Contributors",
    partnerOrHost: "Youth Season of Code (Y-SoC)",
    description: "Collaborative Git debugging, pull request reviews, and open source mentorship pairing student contributors with maintainers.",
    tags: ["Open Source", "Git & GitHub", "Mentorship"],
  },
  {
    id: "g-5",
    title: "Campus Ambassador Program (CAP) Leadership Meet",
    event: "Leadership & Chapter Strategy",
    year: "2026",
    location: "Bhopal & Gwalior Hubs",
    category: "community",
    attendees: "50+ Campus Leads",
    partnerOrHost: "50+ College Chapters",
    description: "Quarterly strategy meet with student campus ambassadors across 50 colleges to coordinate local workshops and hackathon leagues.",
    tags: ["Leadership", "CAP 2026", "Campus Chapters"],
  },
  {
    id: "g-6",
    title: "TECHhack 2026 Grand Finale",
    event: "Multi-Track Hackathon",
    year: "2026",
    location: "Bhopal & Hybrid",
    category: "hackathon",
    attendees: "Pan-India Registrations",
    partnerOrHost: "TECHhelp4U × Ecosystem Partners",
    description: "Annual grand finale featuring multi-track software sprints, live jury evaluations, cash grants, and internship referrals.",
    tags: ["Grand Finale", "Incubation", "Internships"],
  },
];
