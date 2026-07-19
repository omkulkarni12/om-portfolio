"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface CertificationLogoProps {
  name: string;
  logo: string;
  url?: string;
}

export default function CertificationLogo({
  name,
  logo,
  url,
}: CertificationLogoProps) {
  const card = (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      transitionSpeed={1200}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glarePosition="all"
      scale={1.03}
      className="h-full"
    >
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20">

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        {/* Logo */}
        <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-lg transition-transform duration-500 group-hover:scale-110">
          <Image
            src={logo}
            alt={name}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Organization */}
        <h3 className="relative z-10 text-center text-sm font-semibold tracking-wide text-gray-200 transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>
      </div>
    </Tilt>
  );

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {card}
      </Link>
    );
  }

  return card;
}