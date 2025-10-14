

export default function(){
    return <div className="flex flex-col gap-y-4">
        <div className="ml-50 text-4xl font-extralight tracking-wide">TECH STACK</div>
        <div className="ml-60 flex flex-wrap gap-4  [&>span]:border
         [&>span]:px-3 [&>span]:py-1 [&>span]:rounded [&>span]:border-gray-500
         [&>span]:hover:-translate-y-2 [&>span]:text-gray-400">
            <span >React</span>
            <span >Next.js</span>
            <span>Express</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Tailwind</span>
            <span>PostgreSQL</span>
            <span>TypeScript</span>
            <span>Docker</span>
            <span>GitHub Actions</span>
            <span>AWS EC2</span>
        </div>
    </div>
}