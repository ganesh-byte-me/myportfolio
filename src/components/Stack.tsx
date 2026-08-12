const groups = [
  { title: "Languages", number: "01", items: ["JavaScript", "TypeScript", "Java", "Python"] },
  { title: "Frontend & Backend", number: "02", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js"] },
  { title: "Data & Cloud", number: "03", items: ["MongoDB", "PostgreSQL", "AWS", "AWS EC2", "AWS Lambda", "Amazon Connect", "Amazon CloudWatch"] },
  { title: "DevOps & Tools", number: "04", items: ["Docker", "Git", "GitLab", "GitHub", "GitHub Actions", "CI/CD"] },
  { title: "Architecture", number: "05", items: ["REST APIs", "Microservices", "Event-Driven Architecture", "Distributed Systems"] },
  { title: "Foundations", number: "06", items: ["System Design", "Object-Oriented Programming", "Data Structures & Algorithms"] },
];

export default function Stack() {
  return (
    <div>
      <p className="eyebrow">Technical toolkit</p>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <h2 className="section-title">Tools I use to<br /><span className="text-zinc-500">bring ideas to life.</span></h2>
        <p className="max-w-sm text-sm leading-6 text-zinc-500">A practical stack shaped by building production systems across frontend, backend, cloud, and infrastructure.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="glass-card group rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:border-violet-400/30">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-zinc-100">{group.title}</h3>
              <span className="font-mono text-xs text-zinc-600">{group.number}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => <span key={item} className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition group-hover:border-white/15 group-hover:text-zinc-300">{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
