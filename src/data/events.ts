import { Event } from "@/types";

export const eventsData: Event[] = [
  {
    id: "techhack-2026",
    slug: "techhack-2026",
    title: "TECHhack 2026 — Annual Flagship Hackathon",
    tagline: "Central India's Premier Student Innovation Hackathon & Project Incubator",
    description: "A 36-hour hybrid hackathon bringing together over 500+ student developers across India to build scalable software prototypes across AI, Full-Stack Web, Open Source, and Web3.",
    fullDescription: [
      "TECHhack 2026 is the annual flagship hackathon organized by TECHhelp4U in partnership with Devfolio and Unstop. Built by students for students, this hackathon provides a platform to turn bold ideas into working software prototypes within 36 hours.",
      "Participants receive 1-on-1 mentorship from industry software engineers, attend live tech checkpoints, and compete for cash prizes, internship opportunities, and cloud compute credits.",
      "Whether you are building your first web application or developing advanced AI workflows, TECHhack provides dedicated tracks, beginner workshops, and an inclusive community environment."
    ],
    date: "2026-07-18",
    endDate: "2026-07-20",
    time: "36 Hours Continuous (Hybrid)",
    location: "Gwalior, Madhya Pradesh & Virtual",
    venueDetails: "Gwalior Tech Auditorium / Unstop & Devfolio Virtual Stage",
    mode: "hybrid",
    category: "hackathon",
    status: "upcoming",
    isFeatured: true,
    featuredBadge: "FLAGSHIP HACKATHON",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
    ],
    registrationUrl: "https://unstop.com",
    registrationStatusText: "Registrations Opening Soon",
    eventUrl: "https://commudle.com/communities/techhelp4u",
    tags: ["Hackathon", "AI & Web", "Open Innovation", "Mentorship", "Cash Prizes"],
    technologies: ["React / Next.js", "Python", "Node.js", "Solidity", "FastAPI", "Tailwind CSS"],
    eligibility: "Open to all university students, beginners, and early-career developers across India.",
    teamSize: "2 - 4 Members per Team",
    organizers: ["TECHhelp4U Core Team"],
    partners: [
      { name: "Unstop", role: "Official Platform Partner", website: "https://unstop.com" },
      { name: "Devfolio", role: "Platform Partner", website: "https://devfolio.co" },
      { name: "Commudle", role: "Community Partner", website: "https://commudle.com" },
      { name: "HiDevs", role: "Incubation & Mentorship Partner", website: "https://hidevs.community" }
    ],
    speakersAndMentors: [
      {
        name: "Vedansh Goyal",
        role: "Founder & Community Lead",
        companyOrOrg: "TECHhelp4U",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Monika Jha",
        role: "Co-Founder & Operations Lead",
        companyOrOrg: "TECHhelp4U",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Gautam Kumar Maurya",
        role: "Head of Tech & Hackathons",
        companyOrOrg: "TECHhelp4U",
        linkedin: "https://linkedin.com"
      }
    ],
    schedule: [
      {
        timeOrPhase: "Day 1 - 09:00 AM",
        title: "Opening Ceremony & Track Briefing",
        description: "Welcome keynote, team registrations, problem statement release, and mentor matchmaking.",
        location: "Main Stage & Live Stream"
      },
      {
        timeOrPhase: "Day 1 - 02:00 PM",
        title: "Mentorship Round 1: Ideation Review",
        description: "1-on-1 mentor check-in to refine architecture and feature scope.",
        location: "Mentor Breakout Rooms"
      },
      {
        timeOrPhase: "Day 2 - 10:00 AM",
        title: "Mentorship Round 2: Code & MVP Review",
        description: "Reviewing working features, UI/UX polish, and debugging.",
        location: "Hacking Arena"
      },
      {
        timeOrPhase: "Day 2 - 04:00 PM",
        title: "Final Project Submissions & Demos",
        description: "Live 3-minute project demo to jury panel, followed by prize distribution.",
        location: "Auditorium & Live Stream"
      }
    ],
    tracks: [
      {
        title: "AI & Smart Automation",
        description: "Build practical AI tools, intelligent chatbots, computer vision apps, or prompt-driven workflows.",
        technologies: ["Python", "LangChain", "OpenAI / HuggingFace", "FastAPI"]
      },
      {
        title: "Full-Stack Web & Mobile",
        description: "Create scalable web applications, student productivity tools, or real-time collaborative platforms.",
        technologies: ["Next.js", "React Native", "Node.js", "Supabase / PostgreSQL"]
      },
      {
        title: "Open Innovation & Social Impact",
        description: "Solve everyday challenges in healthcare, education, civic infrastructure, and sustainability.",
        technologies: ["Open Source", "APIs", "Cloud Native", "Flutter"]
      }
    ],
    prizes: [
      { title: "Grand Champion Team", reward: "₹50,000 Cash + Swag & Cloud Credits", description: "Awarded to the overall highest scoring project across all criteria." },
      { title: "First Runner-Up", reward: "₹25,000 Cash + Certificates & Mentorship", description: "Top runner-up team with outstanding implementation." },
      { title: "Best All-Girls Team", reward: "₹10,000 Cash Special Award", description: "Promoting diversity and women in technology." }
    ],
    highlights: [
      "36 Hours of continuous hacking, learning, and networking",
      "Mentorship from working software engineers & startup founders",
      "Free swags, certificates, and food for offline participants",
      "Zero registration fees — completely free for all students"
    ],
    faqs: [
      {
        question: "Who can participate in TECHhack 2026?",
        answer: "Any college student or recent graduate passionate about building software. Beginners are highly encouraged to participate!"
      },
      {
        question: "Is there any registration fee?",
        answer: "No. All TECHhelp4U events are 100% free of charge."
      },
      {
        question: "What if I don't have a team?",
        answer: "We host a dedicated team-formation session on our Discord/WhatsApp before the hackathon kicks off."
      }
    ],
    seoTitle: "TECHhack 2026 | Annual Flagship Hackathon by TECHhelp4U",
    seoDescription: "Join Central India's premier student hackathon TECHhack 2026 organized by TECHhelp4U with ₹1,00,000+ prize pool on Unstop.",
    createdAt: "2026-05-10"
  },
  {
    id: "skill-climax-v1",
    slug: "skill-climax-v1",
    title: "Skill Climax V1.0 @ Devfolio",
    tagline: "Central India's Landmark Hybrid Hackathon for Product Prototyping",
    description: "A flagship hackathon hosted on Devfolio that brought together 500+ student developers across Central India to build scalable real-world prototypes.",
    fullDescription: [
      "Skill Climax V1.0 was conceptualized and hosted by TECHhelp4U as Central India's flagship hackathon on Devfolio. The event challenged teams to transform raw ideas into functional software solutions within 36 hours.",
      "The hackathon hosted builders tackling themes across Open Innovation, EdTech, Healthcare, Web3 Infrastructure, and Developer Productivity.",
      "With active support from university partners and industry mentors, Skill Climax set a new standard for high-energy student hackathons in the region."
    ],
    date: "2025-10-18",
    endDate: "2025-10-20",
    time: "36 Hours Continuous",
    location: "Hybrid (Online & Gwalior Hub)",
    venueDetails: "Central India Technical Hub / Devfolio Virtual Stage",
    mode: "hybrid",
    category: "hackathon",
    status: "concluded",
    isFeatured: true,
    featuredBadge: "FLAGSHIP HACKATHON",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
    ],
    registrationUrl: "https://devfolio.co",
    registrationStatusText: "Concluded with 500+ Builders",
    eventUrl: "https://devfolio.co",
    tags: ["Devfolio", "Central India", "Open Innovation", "Product Prototyping"],
    technologies: ["React", "Node.js", "Flutter", "Python", "Cloud Native"],
    eligibility: "Open to university students across India.",
    teamSize: "2 - 4 Members",
    organizers: ["TECHhelp4U Core Team"],
    partners: [
      { name: "Devfolio", role: "Official Platform Partner", website: "https://devfolio.co" },
      { name: "Commudle", role: "Community Partner", website: "https://commudle.com" }
    ],
    tracks: [
      {
        title: "Open Innovation & Public Goods",
        description: "Civic tech and open-source tooling for everyday social impact.",
        technologies: ["Web", "Mobile", "APIs"]
      },
      {
        title: "Smart Campus & Student Productivity",
        description: "Solutions improving academic workflows, research collaboration, and peer learning.",
        technologies: ["Full Stack", "AI Integration"]
      }
    ],
    prizes: [
      { title: "Grand Winner", reward: "Cash Prize + Goodies & Swag Kit", description: "Top team evaluated on code quality, usability, and pitch execution." },
      { title: "Category Winners", reward: "Track Prizes & LORs", description: "Track-specific awards across technical categories." }
    ],
    seoTitle: "Skill Climax V1.0 | Devfolio Hackathon by TECHhelp4U",
    seoDescription: "Relive Skill Climax V1.0, the flagship Devfolio hackathon organized by TECHhelp4U.",
    createdAt: "2025-09-01"
  },
  {
    id: "skill-showdown-v1",
    slug: "skill-showdown-v1",
    title: "Skill Showdown v1.0 @ OIST Bhopal",
    tagline: "Hands-on Masterclasses in Web Development, AI Tools & Career Growth",
    description: "An intensive on-ground student technology workshop hosted at the Oriental Institute of Science & Technology (OIST), Bhopal, covering Web Dev, AI, and Freelancing.",
    fullDescription: [
      "Skill Showdown v1.0 was an experiential workshop organized by TECHhelp4U at the Oriental Institute of Science & Technology (OIST), Bhopal.",
      "The program delivered focused, practical learning modules on modern freelancing strategies, building with AI tools, full-stack fundamentals, and resume reviews.",
      "Over 200+ engineering students participated in live coding walkthroughs and interactive Q&A sessions with working tech professionals."
    ],
    date: "2025-11-22",
    time: "10:00 AM - 04:30 PM IST",
    location: "Bhopal, Madhya Pradesh",
    venueDetails: "Oriental Institute of Science & Technology (OIST), Bhopal",
    mode: "offline",
    category: "workshop",
    status: "concluded",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    tags: ["OIST Bhopal", "Hands-on Workshop", "Web Dev", "Freelancing", "AI Tools"],
    technologies: ["JavaScript", "React", "Python", "Prompt Engineering"],
    organizers: ["TECHhelp4U", "OIST Bhopal Student Chapter"],
    partners: [
      { name: "KonfHub", role: "Ticketing & Event Host", website: "https://konfhub.com" },
      { name: "OIST Bhopal", role: "Academic Venue Partner", website: "https://oistbpl.ac.in" }
    ],
    seoTitle: "Skill Showdown v1.0 @ OIST Bhopal | TECHhelp4U Workshop",
    seoDescription: "Explore Skill Showdown v1.0 organized by TECHhelp4U at Oriental Institute of Science & Technology, Bhopal.",
    createdAt: "2025-11-01"
  },
  {
    id: "shardeum-builder-tour",
    slug: "shardeum-builder-tour",
    title: "TECHhelp4U × Shardeum: Web3 Builder Tour",
    tagline: "Hands-on Smart Contracts & Decentralized App Development",
    description: "A collaborative Web3 technical workshop with Shardeum educating student developers on EVM smart contracts, Web3.js, and deploying dApps on testnet.",
    fullDescription: [
      "In collaboration with Shardeum — the auto-scaling EVM layer-1 network — TECHhelp4U hosted an interactive hands-on Web3 developer workshop.",
      "The session guided students step-by-step through writing Solidity smart contracts, connecting MetaMask wallets, and deploying decentralized applications on Shardeum testnet.",
      "Participants received developer swags, certificates, and direct access to Shardeum bounty programs."
    ],
    date: "2025-08-14",
    time: "02:00 PM - 06:00 PM IST",
    location: "Gwalior, Madhya Pradesh / Hybrid",
    venueDetails: "TECHhelp4U Community Hub & Live Stream",
    mode: "hybrid",
    category: "collaboration",
    status: "concluded",
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80",
    tags: ["Shardeum", "Web3", "Solidity", "Smart Contracts", "Community Tour"],
    technologies: ["Solidity", "EVM", "Web3.js", "MetaMask", "Shardeum Testnet"],
    organizers: ["TECHhelp4U", "Shardeum Community"],
    partners: [
      { name: "Shardeum", role: "Official Blockchain Partner", website: "https://shardeum.org" },
      { name: "Commudle", role: "Community Platform", website: "https://commudle.com" }
    ],
    seoTitle: "TECHhelp4U × Shardeum Web3 Builder Workshop",
    seoDescription: "Discover how TECHhelp4U collaborated with Shardeum for the hands-on Web3 builder series.",
    createdAt: "2025-08-01"
  },
  {
    id: "open-sphere-2026",
    slug: "open-sphere-2026",
    title: "Open Sphere 2026: Youth Season of Code (Y-SoC)",
    tagline: "Guiding Students into Real-World Open Source Contributions",
    description: "A nationwide collaborative sprint with Youth Season of Code (Y-SoC) to guide students through Git workflows, code reviews, and their first open-source pull requests.",
    fullDescription: [
      "Open Sphere 2026 was organized by TECHhelp4U in partnership with Youth Season of Code (Y-SoC).",
      "The workshop eliminated the common hurdles beginners face when contributing to open source, covering Git branching, clean commit messages, documentation, and PR etiquette.",
      "Mentors reviewed code live and helped dozens of students submit their first merged pull requests to real public repositories."
    ],
    date: "2026-03-15",
    time: "11:00 AM - 05:00 PM IST",
    location: "Online / Pan-India",
    venueDetails: "Y-SoC Discord & TECHhelp4U Live Stage",
    mode: "online",
    category: "workshop",
    status: "concluded",
    coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    tags: ["Y-SoC", "Open Source", "Git & GitHub", "Code Review", "Mentorship"],
    technologies: ["Git", "GitHub Actions", "Docker", "TypeScript", "Python"],
    organizers: ["TECHhelp4U", "Youth Season of Code"],
    partners: [
      { name: "Youth Season of Code (Y-SoC)", role: "Partner Organization", website: "https://ysoc.in" }
    ],
    seoTitle: "Open Sphere 2026 | TECHhelp4U × Youth Season of Code (Y-SoC)",
    seoDescription: "TECHhelp4U and Y-SoC unite for Open Sphere 2026, onboarding students into production open source software.",
    createdAt: "2026-02-20"
  },
  {
    id: "fullstack-ai-sprint",
    slug: "fullstack-ai-sprint",
    title: "Building Modern Full-Stack AI Apps from Scratch",
    tagline: "Hands-on Workshop: Next.js 15, Tailwind CSS & AI APIs",
    description: "A practical masterclass where students built and deployed a production-ready AI web application using Next.js, Tailwind CSS, and AI APIs in 3 hours.",
    fullDescription: [
      "In this hands-on coding sprint, TECHhelp4U instructors walked students through designing, building, and deploying a functional AI web app.",
      "Topics included Next.js App Router, responsive styling with Tailwind CSS, connecting to AI models via API, and deploying live on Vercel.",
      "Every attendee walked away with a live project URL added to their resume and portfolio."
    ],
    date: "2026-02-08",
    time: "05:00 PM - 08:00 PM IST",
    location: "Online (Google Meet & Discord)",
    mode: "online",
    category: "workshop",
    status: "concluded",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    tags: ["Next.js", "Full-Stack", "AI Web Apps", "Tailwind CSS", "Vercel"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    organizers: ["TECHhelp4U Technical Team"],
    partners: [
      { name: "Commudle", role: "Community Partner", website: "https://commudle.com" }
    ],
    seoTitle: "Building Full-Stack AI Apps Masterclass | TECHhelp4U",
    seoDescription: "Learn how TECHhelp4U students built and deployed live full-stack AI web applications.",
    createdAt: "2026-01-20"
  }
];
