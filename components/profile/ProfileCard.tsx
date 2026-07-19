import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function ProfileCard() {
  return (
    <div className="relative flex justify-center">

      {/* Glow Behind Image */}
      <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="glass w-full max-w-md overflow-hidden rounded-[36px] border border-white/10">

        {/* Image */}

        <div className="relative h-[520px] w-full">

          <Image
            src="/images/profile/profile.jpg"
            alt={portfolio.name}
            fill
            priority
            className="object-cover transition duration-700 hover:scale-105"
          />

        </div>

        {/* Info */}

        <div className="space-y-4 p-8 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm font-semibold text-green-400">
              Open to Work
            </span>

          </div>

          <h2 className="text-3xl font-bold">
            {portfolio.name}
          </h2>

          <p className="text-lg text-blue-400">
            {portfolio.role}
          </p>

          <p className="text-slate-400">
            Founder • {portfolio.brand}
          </p>

        </div>

      </div>

    </div>
  );
}