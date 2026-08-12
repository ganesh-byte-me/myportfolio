import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ganeshkrishnagk/", icon: "/linkedin.png", invert: false },
  { label: "Leetcode", href: "https://leetcode.com/u/Ganeshkrishna1429/", icon: "/leetcode.png", invert: false },
  { label: "TakeUforward", href: "https://takeuforward.org/profile/Ganesh1429", icon: "/takeUforward.png", invert: true },
  { label: "Resume", href: "/GaneshResume_2.pdf", icon: "/resume.png", invert: true },
];

export default function Intro() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center py-20">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative mx-auto float-slow">
          <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-2xl" />
          <div className="relative rounded-[2.5rem] border border-white/15 bg-white/5 p-3 shadow-2xl shadow-violet-950/40 backdrop-blur">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQF4LCvkpqTSfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714319866219?e=1787788800&v=beta&t=d6WLR-gKs3bJmDGDDeFio404UT96fL_GNHr-PFQ2W7c"
              alt="Ganesh Krishna"
              width={340}
              height={340}
              priority
              className="h-64 w-64 rounded-[2rem] object-cover grayscale-[20%] sm:h-80 sm:w-80"
            />
            <div className="absolute -bottom-4 -right-5 rounded-2xl border border-white/10 bg-[#0c0d13]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">Software Engineer</p>
          <h1 className="mt-6 text-5xl font-light leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Hey, I&apos;m <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">Ganesh.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build scalable systems and thoughtful digital experiences—from reliable backend services to polished full-stack products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white">
                <Image src={item.icon} alt="" width={20} height={20} className={`h-5 w-5 object-contain transition group-hover:scale-110 ${item.invert ? "invert" : ""}`} />
                {item.label}
              </Link>
            ))}
          </div>
          <a href="#about" className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500 transition hover:text-violet-300">
            Explore my work <span className="text-lg">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
