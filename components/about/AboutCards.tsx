export default function AboutCards() {
  const cards = [
    {
      title: "Education",
      value: "B.Tech Electrical Engineering",
    },
    {
      title: "Experience",
      value: "AI • EV • Embedded",
    },
    {
      title: "Research",
      value: "Patents • Papers • Innovation",
    },
    {
      title: "Focus",
      value: "AI • Robotics • ADAS",
    },
  ];

  return (
    <div className="grid gap-6">

      {cards.map((card) => (
        <div
          key={card.title}
          className="glass rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
        >
          <h3 className="text-xl font-bold">
            {card.title}
          </h3>

          <p className="mt-3 text-slate-400">
            {card.value}
          </p>

        </div>
      ))}

    </div>
  );
}