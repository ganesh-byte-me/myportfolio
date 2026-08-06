

export default function NavBar(){

    return <>
        <div className="h-14 w-[50%] mt-6 m-auto border-1 border-gray-600 rounded-full" >
            <div className="mt-5 font-geistSans text-gray-300 flex justify-evenly ">
            <a href="#about" className="hover:text-white cursor-pointer">About</a>
            <a href="#stack" className="hover:text-white cursor-pointer">Stack</a>
            {/* <a href="#projects" className="hover:text-white cursor-pointer">Projects</a> */}
            <a href="#experience" className="hover:text-white cursor-pointer">Experience</a>
            <a href="#contact" className="hover:text-white cursor-pointer">Contact</a>
            </div>
        </div>
    </>
}