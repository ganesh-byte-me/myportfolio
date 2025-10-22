

export default function Experience(){
    return <div className="flex flex-col gap-y-4">
        <div className="ml-50 text-4xl font-extralight tracking-wide">
                Experience
        </div>
        <div className="ml-60 flex flex-col gap-y-4 ">
                <div className="flex felx-row gap-x-50 text-gray-200">
                <span className="">Software Engineer - Concordia University Makerspace Lab</span>
                <span >Aug 2024 - May 2025 | Mequon, WI</span>
            </div>
            <div className="">
                <ul className="list-disc list-inside leading-relaxed space-y-2
                text-gray-400">
                    <li>Developed and deployed distributed backend services using Node.js and MongoDB.</li>
                    <li>Designed 15+ scalable frontend pages and integrated with RESTful APIs and secure authentication systems.</li>
                    <li>Implemented Docker-based CI/CD pipelines and deployed apps to Ubuntu servers with Nginx reverse proxy. Collaborated cross-functionally with engineers and stakeholders in an Agile setup.</li>
                </ul>
            </div>
        </div>

    </div>
}