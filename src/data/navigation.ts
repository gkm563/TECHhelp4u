export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Events", href: "/events", badge: "Live" },
  { title: "Initiatives", href: "/initiatives" },
  { title: "Community & CAP", href: "/community" },
  { title: "Collaborations", href: "/collaborations" },
  { title: "Resources", href: "/resources" },
  { title: "Gallery", href: "/gallery" },
  { title: "Team", href: "/team" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/techhelp4u/", icon: "Linkedin" },
  { name: "Linktree", href: "https://linktr.ee/techhelpu", icon: "Link" },
  { name: "Commudle", href: "https://www.commudle.com/communities/techhelp4u", icon: "Globe" },
  { name: "Luma", href: "https://luma.com/2phtd15g", icon: "Calendar" },
  { name: "Unstop", href: "https://unstop.com/hackathons/skill-climax-v10-central-india-largest-hackathon-techhelp4u-1599053", icon: "Trophy" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCwy0Y4Do0ZNEzBhCvGJfpYw/videos", icon: "Youtube" },
  { name: "Twitter (X)", href: "https://x.com/TECH_help4U", icon: "Twitter" },
  { name: "Instagram", href: "https://www.instagram.com/techhelp4u/", icon: "Instagram" },
  { name: "GitHub", href: "https://github.com/techhelp4u", icon: "Github" }
];
