import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

interface NavItem {
  id: string;
  label: string;
  link: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getNavItems = (intl: any): NavItem[] => [
  { id: "home", label: intl.formatMessage({ id: "home" }), link: "/" },
  { id: "resume", label: intl.formatMessage({ id: "cv" }), link: "/resume" },
  {
    id: "blog",
    label: intl.formatMessage({ id: "project" }),
    link: "/projects",
  },
  {
    id: "contacts",
    label: intl.formatMessage({ id: "contacts" }),
    link: "#contacts",
  },
];

export const socials = [
  { href: "https://github.com/nvagno", label: "GitHub", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/nyy_has/",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.facebook.com/nyhasina.vagno",
    label: "Facebook",
    icon: <FaFacebook />,
  },
];
