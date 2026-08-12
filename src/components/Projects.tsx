"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const projects = [
  {
    number: "01",
    title: "GKLink URL Shortener",
    description:
      "A full-stack URL shortening platform with a Next.js frontend and a backend API for creating and resolving short links. Redis caching, persistent database storage, and rate limiting keep redirects fast, reliable, and protected from abuse.",
    tags: [
      "Next.js",
      "Backend API",
      "Redis",
      "Database",
      "Rate Limiting",
    ],
    href: "https://gklink.ganesh-krishna.com",
    accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
    glow: "bg-violet-500/20",
  },
  {
    number: "02",
    title: "Splash Express",
    description:
      "A customer-facing web application for Splash Distributors, providing a streamlined account experience through a clean, practical, and responsive interface.",
    tags: ["Web Application", "Responsive UI", "Customer Portal"],
    href: "https://express.splashdistributors.com/my-account?tab=login",
    accent: "from-cyan-500/25 via-blue-500/10 to-transparent",
    glow: "bg-cyan-500/20",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const router = useRouter();

  const closeProjectsPage = () => {
    window.close();

    // Browsers do not allow scripts to close a tab that the user opened directly.
    // In that case, return to the portfolio in the same tab.
    window.setTimeout(() => {
      router.push("/");
    }, 100);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080b] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="star-field stars-near" />
        <span className="star-field stars-far" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.13),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(6,182,212,0.09),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <nav className="mb-24 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-70"
          >
            GK<span className="text-violet-400">.</span>
          </Link>
          <button
            type="button"
            onClick={closeProjectsPage}
            className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to home
          </button>
        </nav>

        <header className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300">
              Selected work
            </p>
          </div>
          <h1 className="text-5xl font-light tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Projects built with
            <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
              purpose and care.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A selection of applications I have designed and developed. Each project
            combines thoughtful engineering with a simple, useful experience.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2" aria-label="Project list">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex min-h-[410px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-9"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                className={`absolute -right-20 -top-20 h-52 w-52 rounded-full ${project.glow} blur-3xl transition-transform duration-700 group-hover:scale-125`}
              />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">
                  PROJECT / {project.number}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-zinc-400">
                  Live
                </span>
              </div>

              <div className="relative mt-auto pt-20">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#07080b]"
                  aria-label={`Open ${project.title} application`}
                >
                  View live project
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>More projects are on the way.</p>
          <a
            href="mailto:ganeshstriver@gmail.com"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            Have a project in mind? Let&apos;s talk →
          </a>
        </footer>
      </div>
    </main>
  );
}
