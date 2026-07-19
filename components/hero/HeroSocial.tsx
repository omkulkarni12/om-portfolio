import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

import { portfolio } from "@/data/portfolio";

export default function HeroSocial() {
  return (
    <div className="mt-10 flex items-center gap-5">

      <a
        href={portfolio.github}
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-blue-400"
      >
        <FaGithub size={24} />
      </a>

      <a
        href={portfolio.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-blue-400"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href={`mailto:${portfolio.email}`}
        className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-blue-400"
      >
        <MdEmail size={24} />
      </a>

    </div>
  );
}