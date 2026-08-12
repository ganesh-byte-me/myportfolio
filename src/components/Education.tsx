const education = [
  { school: "Concordia University Wisconsin", place: "Mequon, Wisconsin", date: "May 2025", degree: "Master of Science (M.S.) in Computer & Information Sciences" },
  { school: "Aurora's Technological & Research Institute", place: "Hyderabad, India", date: "Jun 2022", degree: "Bachelor of Technology (B.Tech) in Computer Science" },
];

export default function Education() {
  return (
    <div className="mt-24">
      <p className="eyebrow">Education</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.school} className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 sm:p-8">
            <div className="flex items-center justify-between text-xs text-zinc-500"><span>{item.place}</span><span>{item.date}</span></div>
            <h3 className="mt-8 text-xl font-medium text-zinc-100">{item.school}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.degree}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
