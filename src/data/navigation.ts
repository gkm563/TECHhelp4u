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
  { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { name: "Commudle", href: "https://commudle.com/communities/techhelp4u", icon: "Globe" },
  { name: "Devfolio", href: "https://devfolio.co", icon: "Code" },
  { name: "Unstop", href: "https://unstop.com", icon: "Trophy" },
  { name: "GitHub", href: "https://github.com/techhelp4u", icon: "Github" },
  { name: "Discord", href: "https://discord.gg", icon: "MessageSquare" }
];
