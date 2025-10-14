
export default function(){

    return <>
        <div className="flex items-center gap-x-20">
                <div className="ml-40">
                <img className="h-48 w-48 rounded-full center " src="mypic.jpeg" alt="" />
                </div >
                <div className="flex flex-col gap-y-5">
                    <div className="font-serif text-4xl">Hey, I'm Ganesh</div>
                    <div className="font-sans font-mono text-gray-400 rounded text-center">
                        OPEN TO FULLTIME OPPURTUNITIES
                    </div>
                    <div className=" flex flex-row gap-x-8">
                            <div className=" hover:-translate-y-2 flex flex-row gap-x-2">
                                <img className="w-6" src="linkedin.png" alt="" />
                                <div className="hover:text-white flex items-end  text-gray-400">
                                Linkedin
                                </div>
                            </div>
                            <div className="hover:-translate-y-2 flex flex-row gap-x-2">
                                <img className="invert w-6" src="github.png" alt="" />
                                <div className="hover:text-white flex items-end  text-gray-400">
                                    GitHub
                                </div>
                            </div>
                            <div className="hover:-translate-y-2 flex flex-row gap-x-2">
                                <img className="invert w-6" src="resume.png" alt="" />
                                <div className="hover:text-white flex items-end  text-gray-400">
                                    Resume
                                </div>
                            </div>
                           

                    </div>
                </div>
        </div>
    </>
}