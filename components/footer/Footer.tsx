import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container-custom">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="gradient-text text-3xl font-black">
              {portfolio.firstName}
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Building intelligent engineering solutions
              through Artificial Intelligence,
              Robotics and Electric Vehicles.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="#about">About</Link>

              <br />

              <Link href="#experience">Experience</Link>

              <br />

              <Link href="#skills">Skills</Link>

              <br />

              <Link href="#projects">Projects</Link>

            </div>
          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <p className="text-slate-400">
              {portfolio.email}
            </p>

            <p className="mt-3 text-slate-400">
              {portfolio.location}
            </p>

            <div className="mt-6 flex gap-6">

              <a
                href={portfolio.github}
                target="_blank"
                className="hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">

          © {year} {portfolio.name}

          <br />

          Built with Next.js • TypeScript • Tailwind CSS

        </div>

      </div>
    </footer>
  );
}