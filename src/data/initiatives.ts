import { Initiative } from "@/types";

export const initiativesData: Initiative[] = [
  {
    id: "campus-ambassador-program-2026",
    slug: "campus-ambassador-program",
    title: "Campus Ambassador Program (CAP 2026)",
    tagline: "Building India's Largest Student Technology Leadership Ecosystem",
    description: "A structured, 6-month student leadership initiative designed to establish 100 trained ambassadors across 50 colleges with measurable career pathways, letters of recommendation, and internship pipelines.",
    problem: "Most engineering colleges lack direct access to cutting-edge tech mentorship, hackathons, and industry tooling pipelines. Central community teams alone cannot scale local presence to hundreds of campuses without localized leadership.",
    objective: "Create a scalable, transparent 7-tier operating system (Recruitment → Training → Execution → Reporting → Recognition) that nurtures college leads into regional coordinators and core team leaders.",
    howItWorks: [
      "Tiered ambassador roles (Gold Lead, Silver Performer, Volunteer Apprentice) with calibrated weekly commitments (2-8 hrs/week).",
      "Comprehensive 4-week onboarding curriculum covering community ops, technical workshop facilitation, and brand execution.",
      "Monthly KPI scorecards tracking workshops conducted, student reach, and project incubator handoffs.",
      "Direct recognition via official Letters of Recommendation, verified certificates, and merit-based stipends."
    ],
    targetAudience: "First to third-year engineering and tech students passionate about community building and technical leadership.",
    outcomes: [
      "50+ Partner College Chapters established",
      "10,000+ Students engaged through campus-level workshops",
      "15-20 Top Ambassadors promoted to Regional Leads & Core Team",
      "Guaranteed internship and mentorship referrals for high-performing ambassadors"
    ],
    badge: "FLAGSHIP LEADERSHIP PROGRAM",
    iconName: "Users",
    relatedEvents: ["The Black-Box Protocol: Stage 01", "Skill Showdown v1.0"]
  },
  {
    id: "the-black-box-protocol-initiative",
    slug: "black-box-protocol",
    title: "The Black-Box Protocol Initiative",
    tagline: "Multi-Stage Talent & Project Incubation Engine",
    description: "An intensive engineering universe moving beyond conventional weekend hackathons into long-term prototyping, seed grants, and venture incubation.",
    problem: "95% of hackathon projects die the day after the closing ceremony. Builders lack structured post-hackathon incubation, compute credits, and investor intros to ship production software.",
    objective: "Provide a multi-round pipeline starting with system architecture screening, advancing to a 12-hour offline sprint, and culminating in dedicated mentorship with venture partners like HiDevs.",
    howItWorks: [
      "Online system architecture evaluation & technical problem solving.",
      "Offline 12-hour high-pressure MVP building marathon in Central India.",
      "6-month incubation roadmap with cloud compute, API subsidies, and technical reviews."
    ],
    targetAudience: "AI engineers, smart contract developers, systems programmers, and full-stack builders.",
    outcomes: [
      "Production-grade MVPs deployed on live testnets/cloud",
      "Direct seed-grant evaluations with incubation networks",
      "High-calibre peer network of Central India's top 1% student builders"
    ],
    badge: "INCUBATION & HACKATHON",
    iconName: "Cpu",
    relatedEvents: ["system-escalation"]
  },
  {
    id: "skill-climax-universe",
    slug: "skill-climax",
    title: "Skill Climax Hackathon Series",
    tagline: "Central India's Premier Prototyping & Strategy Hackathons",
    description: "Regional and national hybrid hackathons hosted on premier platforms (Devfolio, Unstop) challenging developers to build solutions for real-world enterprise and public goods challenges.",
    problem: "Tier-2 and Tier-3 city developers often lack access to major national hackathons and platform visibility.",
    objective: "Bring tier-1 hackathon standards, top sponsor tracks, and industry evaluations directly to Central India's engineering student ecosystem.",
    howItWorks: [
      "Curated problem statements from industry sponsors and civic challenges.",
      "Live mentorship checkpoints with engineering leaders.",
      "Fair, transparent multi-tier evaluation rubrics."
    ],
    targetAudience: "College developers, designers, product thinkers, and problem solvers.",
    outcomes: [
      "Hundreds of projects submitted and open-sourced",
      "Thousands of developer hours invested in hands-on building",
      "Recognition on platforms like Devfolio and Unstop"
    ],
    badge: "COMPETITIVE BUILDING",
    iconName: "Trophy",
    relatedEvents: ["skill-climax-v1"]
  },
  {
    id: "open-source-builder-labs",
    slug: "open-source-builder-labs",
    title: "Open Source & Web3 Builder Labs",
    tagline: "Bridging Academic Learning to Production Open-Source Codebases",
    description: "Collaborative workshops and sprints co-hosted with partners like Shardeum and Youth Season of Code (Y-SoC) to train students in production Git workflows, Solidity, and Linux systems.",
    problem: "Classrooms focus almost exclusively on textbook theory, leaving students unprepared for actual production Git flows, code reviews, and distributed state machines.",
    objective: "Democratize practical systems education through interactive code walkthroughs, live deployment sessions, and open-source contribution drives.",
    howItWorks: [
      "Step-by-step masterclasses on Git, Docker, Smart Contracts, and CI/CD.",
      "Hands-on testnet deployments and smart contract verifications.",
      "Direct contribution guidance to real open source repositories."
    ],
    targetAudience: "Students seeking practical developer experience and real portfolio contributions.",
    outcomes: [
      "First pull requests merged into active repositories",
      "Solid understanding of decentralized infrastructure and cloud deployments",
      "Verified digital credentials and community recognition"
    ],
    badge: "PRACTICAL LEARNING",
    iconName: "Code",
    relatedEvents: ["open-sphere-2026", "shardeum-proof-of-community"]
  }
];
