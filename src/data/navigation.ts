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
  { name: "Twitter (X)", href: "https://x.com/TECH_help4U", icon: "Twitter" },
  { name: "Instagram", href: "https://www.instagram.com/techhelp4u/", icon: "Instagram" },
  { name: "Commudle", href: "https://commudle.com/communities/techhelp4u", icon: "Globe" },
  { name: "Unstop", href: "https://unstop.com", icon: "Trophy" },
  { name: "GitHub", href: "https://github.com/techhelp4u", icon: "Github" }
];
