import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="ml-50 text-4xl font-extralight tracking-wide">
        CONTACT
      </div>

      <div className="ml-60 flex flex-col gap-y-4 text-gray-400">

          <p>
            I&apos;m always open to discussing new opportunities, collaborating on
            meaningful projects, and connecting with fellow developers. I&apos;m
            excited to contribute to new teams, work with new technologies, and
            solve challenging engineering problems. I&apos;m also happy to relocate
            for the right opportunity and am available for onsite interviews.
            Feel free to reach out!
          </p>

        <div className="flex flex-col gap-y-3 mt-2">
          <Link
            href="mailto:ganeshstriver@gmail.com"
            className="hover:text-white transition-colors"
          >
            📧 ganeshstriver@gmail.com
          </Link>

          <Link
            href="tel:+15512271413"
            className="hover:text-white transition-colors"
          >
            📞 +1 (551) 227-1413
          </Link>
        </div>
      </div>
    </div>
  );
}
