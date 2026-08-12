const highlights = [
  ["5K+", "Daily requests"],
  ["30%", "Faster responses"],
  ["99%", "System availability"],
];

export default function About() {
  return (
    <div>
      <p className="eyebrow">About me</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="section-title">Curious by nature.<br /><span className="text-zinc-500">Driven to build.</span></h2>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {highlights.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-3 sm:p-4">
                <strong className="block text-xl text-violet-300 sm:text-2xl">{value}</strong>
                <span className="mt-1 block text-[10px] leading-4 text-zinc-500 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-3xl p-6 text-sm leading-7 text-zinc-400 sm:p-9 sm:text-base sm:leading-8">
          <p className="text-lg text-zinc-200">Hi, I’m Ganesh — a Software Engineer who enjoys building scalable, reliable, and user-focused applications.</p>
          <p className="mt-5">Over the past few years, I’ve worked on backend systems, full-stack web applications, microservices, and cloud-based solutions. I enjoy turning ideas into products by designing clean APIs, building maintainable systems, and solving real engineering problems. Whether it’s optimizing performance, integrating services, or improving user experience, I like building software that makes a real impact.</p>
          <p className="mt-5">I’m particularly interested in distributed systems, backend engineering, cloud technologies, and AI-powered applications. While my professional experience has mainly been in modern web development, I’m constantly learning and exploring new technologies that help build better products.</p>
          <p className="mt-5">Outside of work, you’ll usually find me solving data structures and algorithms problems, participating in hackathons, or experimenting with new technologies. I believe the best way to grow as an engineer is to stay curious and keep building.</p>
          <p className="mt-5 text-zinc-200">I’m always excited to collaborate on meaningful projects and tackle challenging engineering problems.</p>
        </div>
      </div>
    </div>
  );
}
