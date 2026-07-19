"use client";

import { motion } from "framer-motion";

import Aurora from "@/components/background/Aurora";
import ProfileCard from "@/components/profile/ProfileCard";

import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Aurora />

      <div className="container-custom relative z-10">

        <div className="grid min-h-[80vh] items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <HeroContent />

            <HeroButtons />

            <HeroSocial />
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileCard />
          </motion.div>

        </div>

        <div className="mt-24">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}