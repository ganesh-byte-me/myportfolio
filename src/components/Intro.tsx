import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="flex items-center gap-x-20">
        <div className="ml-40">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D35AQGHpUo2QYj2kQ/profile-framedphoto-shrink_400_400/B4DZjIu3z5HYAc-/0/1755714387584?e=1761771600&v=beta&t=7ueoZb2GxqHVhzBSucK-eh76PVsa6N5AHZkTijTKS0w"
            alt="Profile photo"
            width={192}
            height={192}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="font-serif text-4xl">Hey, I'm Ganesh</div>
          <div className="font-sans font-mono text-gray-400 rounded text-center">
            OPEN TO FULLTIME OPPURTUNITIES
          </div>
          <div className=" flex flex-row gap-x-8">
            <div>
              <Link
                href="https://www.linkedin.com/in/ganeshkrishnagk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-2"
                aria-label="Open LinkedIn profile"
              >
                <Image
                  className="h-6 w-6"
                  width={192}
                  height={192}
                  src="/linkedin.png"
                  alt=""
                />
                <span className="hover:text-white flex items-end text-gray-400">
                  LinkedIn
                </span>
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/ganesh-byte-me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-2"
                aria-label="Open LinkedIn profile"
              >
                <Image
                  className="invert w-6"
                  width={192}
                  height={192}
                  src="/github.png"
                  alt=""
                />
                <div className="hover:text-white flex items-end  text-gray-400">
                  GitHub
                </div>
              </Link>
            </div>
            <div>
              <Link href="" className="flex flex-row gap-x-2">
                <img className="invert w-6" src="resume.png" alt="" />
                <div className="hover:text-white flex items-end  text-gray-400">
                  Resume
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
