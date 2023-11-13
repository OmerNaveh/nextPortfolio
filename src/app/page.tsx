import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex w-full flex-col justify-between snap-y snap-mandatory">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* Contact */}
    </main>
  );
}
