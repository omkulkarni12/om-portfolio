import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CertificationGrid from "./CertificationGrid";
import { portfolio } from "@/data/portfolio";

export default function Certification() {
  return (
    <section
      id="certifications"
      className="section"
    >
      <div className="container-custom">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Continuous Learning
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Professional Certifications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            I continuously enhance my expertise through globally recognized
            certifications in Artificial Intelligence, Robotics, Electrical
            Engineering, Cloud Computing, Data Science, and Software
            Development.
          </p>
        </div>

        <CertificationGrid />

        <div className="mt-16 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white">
              30+ Verified Professional Certifications
            </h3>

            <p className="mt-4 text-gray-400">
              AI • Machine Learning • Robotics • Embedded Systems • Electrical
              Engineering • Cloud • Data Science
            </p>
          </div>

          <Link
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-7 py-3 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            View Complete Certifications
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}