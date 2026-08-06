import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Stack from "@/components/Stack";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-y-20 scroll-smooth mb-100">
      <Navbar></Navbar>
     <section id="intro">
        <Intro />
      </section>

      <section id="about" className="scroll-mt-6">
        <About />
      </section>
 
      <section id="stack">
        <Stack/>
      </section>
{/* 
      <section id="projects">
        <Projects />
      </section> */}

      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact/>
      </section>

    </div>

  );
}
