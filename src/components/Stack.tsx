export default function Stack() {
    return (
      <div className="flex flex-col gap-y-4">
        <div className="ml-50 text-4xl font-extralight tracking-wide">
          TECH STACK
        </div>
  
        <div
          className="ml-60 flex flex-wrap gap-4
          [&>span]:border
          [&>span]:px-3
          [&>span]:py-1
          [&>span]:rounded
          [&>span]:border-gray-500
          [&>span]:text-gray-400
          [&>span]:transition-transform
          [&>span]:duration-200
          [&>span]:hover:-translate-y-2"
        >
          {/* Languages */}
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Java</span>
          <span>Python</span>
  
          {/* Frontend */}
          <span>React</span>
          <span>Next.js</span>
          <span>Tailwind CSS</span>
  
          {/* Backend */}
          <span>Node.js</span>
          <span>Express.js</span>
  
          {/* Databases */}
          <span>MongoDB</span>
          <span>PostgreSQL</span>
  
          {/* Cloud & DevOps */}
          <span>AWS</span>
          <span>AWS EC2</span>
          <span>AWS Lambda</span>
          <span>Amazon Connect</span>
          <span>Amazon CloudWatch</span>
          <span>Docker</span>
          <span>Git</span>
          <span>GitLab</span>
          <span>GitHub</span>
          <span>GitHub Actions</span>
  
          {/* Architecture */}
          <span>REST APIs</span>
          <span>Microservices</span>
          <span>Event-Driven Architecture</span>
          <span>Distributed Systems</span>
          <span>CI/CD</span>
  
          {/* CS Fundamentals */}
          <span>System Design</span>
          <span>Object-Oriented Programming</span>
          <span>Data Structures & Algorithms</span>
        </div>
      </div>
    );
  }