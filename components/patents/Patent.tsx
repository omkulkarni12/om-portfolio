import PatentGrid from "./PatentGrid";

export default function Patent() {
  return (
    <section
      id="patents"
      className="section bg-background/30"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-14">
          <span className="text-primary font-semibold tracking-widest uppercase">
            Intellectual Property
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Patents & Innovation
          </h2>

          <p className="mt-5 text-muted-foreground text-lg leading-8">
            A collection of patented innovations and engineering solutions
            focused on artificial intelligence, electric mobility, robotics,
            and intelligent systems. These inventions reflect my commitment
            to solving real-world engineering challenges through research,
            innovation, and technology.
          </p>
        </div>

        <PatentGrid />
      </div>
    </section>
  );
}