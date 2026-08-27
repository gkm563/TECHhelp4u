import { Initiative } from "@/types";

export const initiativesData: Initiative[] = [
  {
    id: "campus-ambassador-program-2026",
    slug: "campus-ambassador-program",
    title: "Campus Ambassador Program (CAP 2026)",
    tagline: "Empowering Student Leaders Across 50+ Indian Colleges",
    description: "A structured 6-month leadership initiative designed to establish on-campus student coordinators across 50 universities with real leadership roles, letters of recommendation, and internship pipelines.",
    problem: "Most engineering colleges lack direct access to cutting-edge tech mentorship, hackathons, and industry tooling pipelines. Central community teams alone cannot scale local presence to hundreds of campuses without localized leadership.",
    objective: "Create a transparent, structured system that nurtures student leads into confident community organizers, workshop hosts, and core team leaders.",
    howItWorks: [
      "Tiered ambassador roles (Chapter Lead, Performer, Volunteer) with flexible 2-6 hrs/week commitments.",
      "Hands-on training covering event management, workshop facilitation, and student outreach.",
      "Monthly milestones tracking workshops conducted, student participation, and hackathon teams onboarded.",
      "Direct recognition via official Letters of Recommendation from founders, verified merit certificates, and performance rewards."
    ],
    targetAudience: "First to third-year engineering and tech students passionate about community building, technology, and leadership.",
    outcomes: [
      "50+ Partner College Chapters established across India",
      "5,000+ Students engaged through campus-level workshops",
      "Top Ambassadors promoted to Core Leadership Team",
      "Direct internship and career mentorship referrals"
    ],
    badge: "FLAGSHIP LEADERSHIP PROGRAM",
    iconName: "Users",
    relatedEvents: ["techhack-2026", "skill-showdown-v1"]
  },
  {
    id: "techhack-annual-hackathon",
    slug: "techhack-initiative",
    title: "TECHhack Annual Hackathon Series",
    tagline: "Central India's Premier 36-Hour Hackathon & Prototyping Incubator",
    description: "Our flagship hybrid hackathon series on Unstop & Devfolio, connecting student developers with real-world problem statements, 1-on-1 industry mentors, and cash prizes.",
    problem: "Many student hackathon prototypes are abandoned right after the closing ceremony because teams lack post-event mentorship, guidance, and project feedback.",
    objective: "Provide an end-to-end hackathon experience with pre-event ideation workshops, 36 hours of continuous building, live jury reviews, and post-hackathon incubation support.",
    howItWorks: [
      "Open problem tracks covering AI, Full-Stack Web, Open Source, and Social Innovation.",
      "Continuous mentor office hours throughout the 36-hour build marathon.",
      "Fair, transparent multi-point evaluation rubrics focused on code quality and MVP usability."
    ],
    targetAudience: "College developers, UI/UX designers, product thinkers, and problem solvers.",
    outcomes: [
      "Over 100+ working software projects built and published",
      "₹1,00,000+ Cash prizes and merit certificates awarded",
      "Direct showcase to hiring startups and incubation networks"
    ],
    badge: "ANNUAL FLAGSHIP",
    iconName: "Trophy",
    relatedEvents: ["techhack-2026", "skill-climax-v1"]
  },
  {
    id: "open-source-builder-labs",
    slug: "open-source-builder-labs",
    title: "Open Source & Developer Labs",
    tagline: "Hands-on Codebases, Git Workflows & Real-World Contributions",
    description: "Collaborative workshops and sprints co-hosted with partners like Youth Season of Code (Y-SoC) to train students in production Git workflows, code reviews, and public contributions.",
    problem: "University classrooms focus heavily on textbook theory, leaving students unprepared for actual Git branching, pull requests, and collaborative code reviews.",
    objective: "Democratize practical engineering education through interactive live-coding walkthroughs, project scaffolding, and open-source contribution drives.",
    howItWorks: [
      "Step-by-step interactive workshops on Git, GitHub Actions, Docker, and full-stack development.",
      "Live pull request walkthroughs and code review sessions with experienced mentors.",
      "Direct contribution guidance during nationwide sprints like Open Sphere."
    ],
    targetAudience: "Students seeking practical developer experience and real portfolio contributions.",
    outcomes: [
      "First pull requests merged into public repositories",
      "Solid understanding of collaborative software development workflows",
      "Verified digital credentials and community recognition"
    ],
    badge: "PRACTICAL LEARNING",
    iconName: "Code",
    relatedEvents: ["open-sphere-2026", "shardeum-builder-tour"]
  }
];
