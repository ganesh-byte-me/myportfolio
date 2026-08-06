import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="flex items-center gap-x-20">
        <div className="ml-40">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQF4LCvkpqTSfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714319866219?e=1787788800&v=beta&t=d6WLR-gKs3bJmDGDDeFio404UT96fL_GNHr-PFQ2W7c"
            alt="Profile photo"
            width={192}
            height={192}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="font-serif text-4xl">Hey, I&apos;m Ganesh</div>
          <div className="font-sans font-mono text-gray-400 rounded">
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
                href="https://leetcode.com/u/Ganeshkrishna1429/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-2"
                aria-label="Open Leetcode profile"
              >
                <Image
                  className="h-6 w-6"
                  width={192}
                  height={192}
                  src="/leetcode.png"
                  alt=""
                />
                <span className="hover:text-white flex items-end text-gray-400">
                  Leetcode
                </span>
              </Link>
            </div>
            <div>
              <Link
                href="https://takeuforward.org/profile/Ganesh1429"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-2"
              >
                <img className="invert w-6" src="/takeUforward.png" alt="takeUforward" />

                <div className="hover:text-white flex items-end text-gray-400">
                  TakeUforward
                </div>
              </Link>
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <Link
                href="/GaneshResume_2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-x-2"
              >
                <img className="invert w-6" src="/resume.png" alt="Resume" />

                <div className="hover:text-white flex items-end text-gray-400">
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
