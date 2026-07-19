export default function FloatingInfo() {
  return (
    <>
      {/* Experience */}

      <div className="glass absolute -left-8 top-10 rounded-2xl border border-white/10 p-5 shadow-xl">

        <p className="text-sm text-slate-400">
          Experience
        </p>

        <h3 className="mt-1 text-3xl font-bold gradient-text">
          2+
        </h3>

        <p className="text-sm text-slate-500">
          Years
        </p>

      </div>

      {/* Projects */}

      <div className="glass absolute -right-8 bottom-24 rounded-2xl border border-white/10 p-5 shadow-xl">

        <p className="text-sm text-slate-400">
          Projects
        </p>

        <h3 className="mt-1 text-3xl font-bold gradient-text">
          15+
        </h3>

        <p className="text-sm text-slate-500">
          Completed
        </p>

      </div>
    </>
  );
}