export default function Education() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="ml-50 text-4xl font-extralight tracking-wide">
        EDUCATION
      </div>

      <div className="ml-60 flex flex-col gap-y-8">
        {/* Master's */}
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row justify-between text-gray-200">
            <div>
              <h3>Concordia University Wisconsin</h3>
              <p className="text-sm text-gray-400">Mequon, Wisconsin</p>
            </div>
            <span>May 2025</span>
          </div>
            <div className="text-gray-400">
                <p className="font-medium text-gray-400">
                Master of Science (M.S.) in Computer & Information Sciences
                </p>
            </div>

        </div>
        {/* Bachelor's */}
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row justify-between text-gray-200">
            <div>
              <h3>Aurora&apos;s Technological & Research Institute</h3>
              <p className="text-sm text-gray-400">Hyderabad, India</p>
            </div>
            <span>Jun 2022</span>
          </div>
            <div className="text-gray-400">
                <p className="font-medium text-gray-400">
                Bachelor of Technology (B.Tech) in Computer Science
                </p>
            </div>

        </div>



      </div>
    </div>
  );
}
