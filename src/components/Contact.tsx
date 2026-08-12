import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-cyan-500/10 p-7 shadow-2xl sm:p-12 lg:p-16">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-[-0.045em] sm:text-6xl">Let&apos;s build something <span className="text-violet-300">meaningful.</span></h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">I&apos;m always open to discussing new opportunities, collaborating on meaningful projects, and connecting with fellow developers. I&apos;m excited to contribute to new teams, work with new technologies, and solve challenging engineering problems. I&apos;m also happy to relocate for the right opportunity and am available for onsite interviews. Feel free to reach out!</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="mailto:ganeshstriver@gmail.com" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200 transition hover:border-violet-400/40 hover:bg-violet-400/10"><span>ganeshstriver@gmail.com</span><span className="transition group-hover:translate-x-1">↗</span></Link>
          <Link href="tel:+15512271413" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"><span>+1 (551) 227-1413</span><span className="transition group-hover:translate-x-1">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
