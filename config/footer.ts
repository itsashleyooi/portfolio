import { GithubIcon, LinkedInIcon } from "@/icons";
import { Footer } from "types";

const footer: Footer = {
  copyright: "Ashley Ooi Y.L.",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/itsashleyooi",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/itsashleyooi/",
      icon: LinkedInIcon,
    }
  ]
};

export default footer;
