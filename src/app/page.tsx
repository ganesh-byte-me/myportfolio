import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="ambient-scene" aria-hidden="true">
        <span className="star-field stars-near" />
        <span className="star-field stars-far" />
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
        <span className="moving-grid" />
      </div>

      <Navbar />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <section id="intro" className="scroll-mt-24">
          <Intro />
        </section>
        <section id="about" className="section-shell scroll-mt-28">
          <About />
        </section>
        <section id="stack" className="section-shell scroll-mt-28">
          <Stack />
        </section>
        <section id="experience" className="section-shell scroll-mt-28">
          <Experience />
        </section>
        <section id="contact" className="section-shell scroll-mt-28 pb-24">
          <Contact />
        </section>
      </div>
    </main>
  );
}
