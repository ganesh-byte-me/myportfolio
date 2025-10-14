import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Stack from "@/components/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-y-20 scroll-smooth">
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
    </div>
     
    //  <div className="geistSans">Hey this is ganesh krishna </div>
  );
}
