import { Initiative } from "@/types";

export const initiativesData: Initiative[] = [
  {
    id: "black-box-protocol-initiative",
    slug: "black-box-protocol",
    title: "The Black-Box Protocol",
    tagline: "9-City National Hackathon Series & 6–12 Month Incubation",
    description: "Our signature multi-city hackathon series launched at MITS Gwalior with a ₹2,00,000 prize pool. Unlike disposable 24-hour hackathons, projects carry forward into a 5-stage incubation pipeline with mentorship from HiDevs and Unstop.",
    problem: "Most student hackathon projects are abandoned right after demo day because teams lack ongoing technical mentorship, compute credits, and accelerator access.",
    objective: "Transform high-potential student hackathon projects into production-ready software and developer-led startups through structured post-event incubation.",
    howItWorks: [
      "Online Stage: Team registration, 6-slide system architecture blueprint, and mandatory technical assessment on HiDevs.",
      "Offline Grand Finale: Intensive 12-hour live build arena at MITS Gwalior with real-time judge office hours.",
      "Post-Event Incubation: 6–12 months of cloud credits, investor connections, and placement referrals for winning squads."
    ],
    targetAudience: "Ambitious college developers, AI builders, Web3 engineers, and student founders across India.",
    outcomes: [
      "500+ builders engaged across Stage 01 at MITS Gwalior",
      "₹2,00,000 prize pool and merit certificates awarded",
      "Winning squads (Shield Clan, Gradient Gang, Code Sena, NyaySetu) onboarded into incubation"
    ],
    badge: "SIGNATURE NATIONAL INITIATIVE",
    iconName: "Cpu",
    relatedEvents: ["system-escalation"]
  },
  {
    id: "skill-climax-initiative",
    slug: "skill-climax",
    title: "Skill Climax Hackathon & Masterclass Series",
    tagline: "36-Hour National Level Innovation Sprint on Unstop",
    description: "A fast-paced 36-hour online hackathon with ₹1,00,000 in cash prizes, combined with deep-dive technical webinars from industry leaders like Anand Mehta (Senior FinOps Specialist, Nasdaq).",
    problem: "College students often learn theory in isolation without testing their logic under time constraints or receiving feedback from working software engineers.",
    objective: "Provide an accessible competitive arena where learners build real MVPs and learn emerging paradigms like LLMs, RAG, and MCP directly from industry experts.",
    howItWorks: [
      "Pre-hackathon technical webinars on generative AI, enterprise software design, and modern dev stacks.",
      "36 hours of continuous build time evaluated by senior software engineers from SITA, Propvivo, and Salesforce.",
      "Official merit certificates, prize rewards, and internship interview opportunities."
    ],
    targetAudience: "Engineering students eager to showcase their problem-solving skills and learn cutting-edge tools.",
    outcomes: [
      "500+ student teams competed across India on Unstop",
      "₹1,00,000 prize pool distributed to top innovators",
      "Direct guidance from Nasdaq, SITA, and Propvivo engineers"
    ],
    badge: "COMPETITIVE ARENA",
    iconName: "Trophy",
    relatedEvents: ["skill-climax-v1", "ai-masterclass-rag-mcp"]
  },
  {
    id: "campus-ambassador-program-2026",
    slug: "campus-ambassador-program",
    title: "Campus Ambassador Program (CAP 2026)",
    tagline: "Empowering Student Leaders Across 100+ Partner Communities",
    description: "A structured 6-month leadership progression ladder for passionate student developers to lead on-ground tech workshops, organize campus hackathons, and represent TECHhelp4U.",
    problem: "Individual colleges often lack direct pipelines to national hackathons, developer grants, and industry speakers without dedicated campus-level student leaders.",
    objective: "Nurture student coordinators into confident community organizers with official Letters of Recommendation, swags, and leadership experience.",
    howItWorks: [
      "Tiered ambassador roles (Chapter Lead, Event Coordinator, Outreach Performer) with flexible 2-6 hrs/week.",
      "Monthly milestone tracking for campus workshops hosted and hackathon squads onboarded.",
      "Direct recognition via official Letters of Recommendation, verified certificates, and core team promotions."
    ],
    targetAudience: "Passionate college students who want to build leadership, communication, and event management experience.",
    outcomes: [
      "Active reach across 100+ partner communities and college chapters",
      "10,000+ students engaged in grassroots learning",
      "Top performers promoted to TECHhelp4U Core Leadership Team"
    ],
    badge: "STUDENT LEADERSHIP",
    iconName: "Users",
    relatedEvents: ["skill-showdown-v1"]
  }
];
