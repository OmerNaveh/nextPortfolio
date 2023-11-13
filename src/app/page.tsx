import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

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
