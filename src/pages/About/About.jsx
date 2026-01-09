// src/pages/About/About.jsx - Static version (no API)
export default function About() {
  // Hardcoded about data
  const about = {
    name: "Ashish",
    role: "Frontend Developer",
    location: "India",
    description: "Hi! I’m Ashish, a passionate web developer who loves creating clean, scalable web experiences. I enjoy turning ideas into real-world products with modern web technologies."
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-[#0e1122] text-white"
    >
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              About Me
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            A quick snapshot of who I am, what I do, and what I love building.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
          {/* Main bio */}
          <div className="md:col-span-2 space-y-4 order-2 md:order-1">
            <p className="text-lg sm:text-xl text-gray-100 text-center md:text-left">
              {about.name && <span className="font-semibold">{about.name}</span>}{" "}
              {about.role && <span className="text-purple-300">– {about.role}</span>}
            </p>

            <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              {about.location && (
                <>
                  <span className="mr-1">📍</span>
                  {about.location}
                </>
              )}
            </p>

            {about.description && (
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {about.description}
              </p>
            )}

            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <p className="leading-relaxed">
                I enjoy turning ideas into real-world products using clean, scalable code and thoughtful UI/UX. I love working with modern web technologies like React, TypeScript, Node.js, and Tailwind CSS.
              </p>
              <p className="leading-relaxed">
                Beyond just building features, I focus on developer experience, reusable components, and smooth user flows. I enjoy debugging, refactoring, and continuously improving my understanding of JavaScript, DSA, and system design.
              </p>
            </div>
          </div>

          {/* Quick info cards */}
          <div className="space-y-4 order-1 md:order-2 flex flex-col justify-center">
            <div className="bg-[#141735] border border-purple-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-semibold text-purple-300 mb-2">
                Current Focus
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Building full‑stack projects, improving DSA, and polishing my portfolio for product‑based roles.
              </p>
            </div>

            <div className="bg-[#141735] border border-pink-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-semibold text-pink-300 mb-2">
                Tech I work with
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                React, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Git.
              </p>
            </div>

            <div className="bg-[#141735] border border-blue-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-semibold text-blue-300 mb-2">
                What I enjoy
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Crafting clean UIs, building APIs, and turning ideas around culture into real applications.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#141735] rounded-xl p-5 sm:p-6 border border-purple-500/30">
            <p className="text-xl font-semibold text-purple-300 mb-1">01</p>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Frontend</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Responsive interfaces built with React and Tailwind.
            </p>
          </div>

          <div className="bg-[#141735] rounded-xl p-5 sm:p-6 border border-pink-500/30">
            <p className="text-xl font-semibold text-pink-300 mb-1">02</p>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Backend</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              REST APIs with Node.js, Express, MongoDB schemas.
            </p>
          </div>

          <div className="bg-[#141735] rounded-xl p-5 sm:p-6 border border-blue-500/30">
            <p className="text-xl font-semibold text-blue-300 mb-1">03</p>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Mindset</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Curious, consistent, always learning and shipping projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
