import Education from "./Education";

const roles = [
  {
    company: "R.O.B.O.", title: "Robotics Operations & Software Support Engineer", date: "Apr 2026 – Present", location: "Fremont, CA",
    points: [
      "Monitor robotic operations using real-time dashboards, logs, telemetry, connectivity, and task-execution data to identify abnormal patterns and support root-cause analysis.",
      "Support integrations across robots, backend servers, warehouse management systems, and software services using APIs, scripts, Linux/Unix diagnostics, and CLI tooling.",
      "Develop and maintain Python/Node.js automation utilities for diagnostics, data extraction, and operational reporting; troubleshoot incidents and escalate engineering issues with relevant logs and technical context.",
    ],
    tools: ["Python", "Node.js", "APIs", "Linux/Unix", "CLI", "Automation", "Robotics Operations", "Real-Time Monitoring", "Telemetry", "Diagnostics", "Incident Troubleshooting", "Warehouse Management Systems"],
  },
  {
    company: "Brillio Technologies", title: "Software Engineer", date: "Jan 2026 – April 2026", location: "NYC, NY",
    points: [
      "Designed and implemented scalable distributed contact-routing systems using Amazon Connect, handling 200+ agents and approximately 5K daily requests while improving system reliability and fault tolerance.",
      "Developed event-driven IVR workflows integrated with Amazon Lex, enabling intelligent request handling and improving automated resolution efficiency in a cloud-based environment.",
    ],
    tools: ["Node.js", "JavaScript", "Amazon Connect", "AWS Lambda", "Amazon EC2", "Amazon CloudWatch", "Git", "GitLab", "Distributed Systems", "Event-Driven Architecture", "Amazon Lex", "NLP-Based Conversational AI", "REST APIs", "Microservices", "CI/CD", "Agile Development"],
  },
  {
    company: "Deloitte", title: "Software Engineer", date: "May 2025 – Dec 2025", location: "Remote",
    points: [
      "Developed and optimized backend microservices using Node.js in a Linux-based environment, reducing API latency by approximately 25% and improving system throughput under concurrent workloads.",
      "Built and maintained web application components using React and REST APIs, while implementing CI/CD pipelines to improve deployment automation, scalability, and reliability.",
    ],
    tools: ["Node.js", "JavaScript", "React", "REST APIs", "Linux", "Microservices", "CI/CD Pipelines"],
  },
  {
    company: "Concordia University Makerspace Lab", title: "Software Engineer", date: "Jan 2024 – May 2025", location: "",
    points: [
      "Designed and deployed a full-stack web application used across the university, supporting 100+ users and daily transactions while improving operational efficiency by approximately 40%.",
      "Developed scalable backend services and optimized database systems, reducing response time by approximately 30% and maintaining 99% system availability.",
    ],
    tools: ["Node.js", "JavaScript", "React", "SQL", "REST APIs", "Full-Stack Development", "Distributed Systems", "Performance Optimization", "Reliability", "Scalability"],
  },
  {
    company: "Splash Distributors LLC", title: "Web Developer", date: "May 2023 – Dec 2023", location: "",
    points: [
      "Developed and maintained the company's web platform with inventory synchronization, automated product-publishing pipelines, and regular data updates.",
      "Designed and updated the website for special events, including creating visuals and improving the overall user experience.",
    ],
    tools: ["JavaScript", "HTML", "CSS", "Responsive Design", "Website Maintenance", "Product Publishing", "Inventory Synchronization", "Event Visuals", "User Experience Improvements"],
  },
  {
    company: "Tata Consultancy Services", title: "Software Engineer", date: "Jan 2022 – Jan 2023", location: "",
    points: [
      "Developed and maintained backend software systems for high-volume applications, improving the scalability, performance, and reliability of transaction-processing systems.",
      "Implemented secure software solutions, including encryption, authentication, and role-based access control, strengthening enterprise security and compliance.",
    ],
    tools: ["Java", "Encryption", "Authentication", "Role-Based Access Control", "Enterprise Backend Systems", "High-Volume Transaction-Processing Systems", "Scalability", "Performance", "Reliability", "Security"],
  },
];

export default function Experience() {
  return (
    <div>
      <p className="eyebrow">Career journey</p>
      <h2 className="section-title">Experience that<br /><span className="text-zinc-500">shaped my craft.</span></h2>
      <div className="relative mt-12 space-y-5 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-cyan-400/40 before:to-transparent sm:before:left-[11px]">
        {roles.map((role, index) => (
          <article key={role.company} className="relative pl-8 sm:pl-12">
            <span className="absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-4 border-[#08090d] bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,.8)] sm:h-[23px] sm:w-[23px]" />
            <div className="glass-card group rounded-3xl p-6 transition duration-500 hover:border-white/15 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-violet-400">ROLE / {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl">{role.title}</h3>
                  <p className="mt-1 text-sm text-cyan-300/80">{role.company}</p>
                </div>
                <div className="text-left text-xs leading-5 text-zinc-500 sm:text-right"><p>{role.date}</p>{role.location && <p>{role.location}</p>}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                {role.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" /><span>{point}</span></li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {role.tools.map((tool) => <span key={tool} className="rounded-full bg-white/[0.045] px-3 py-1 text-[11px] text-zinc-400 ring-1 ring-inset ring-white/8">{tool}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Education />
    </div>
  );
}
