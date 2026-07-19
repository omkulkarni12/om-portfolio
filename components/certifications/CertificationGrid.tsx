"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import CertificationLogo from "./CertificationLogo";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function CertificationGrid() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {certifications.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
        >
          <CertificationLogo
            name={item.organization}
            logo={item.logo}
            url={item.website}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}