import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import Patent from "@/components/patents/Patent";
import Publication from "@/components/publications/Publication";
import Award from "@/components/awards/Award";
import Certification from "@/components/certifications/Certification";
import BlogSection from "@/components/blog/BlogSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Patent />
        <Publication />
        <Award />
        <Certification />
        <BlogSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}