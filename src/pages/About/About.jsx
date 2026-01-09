// src/pages/About/About.jsx
export default function About() {
  const about = {
    name: "Neha Raghav",
    role: "Frontend Developer",
    location: "India",
    description: "Hi! I’m Neha, a frontend developer passionate about creating clean, scalable web experiences. I enjoy turning ideas into real-world products using React, TypeScript, Node.js, and Tailwind CSS."
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
            A quick snapshot of who I am and what I build.
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
                I focus on building responsive interfaces and clean code. I enjoy working with React, TypeScript, Node.js, and Tailwind CSS to create projects that are functional and maintainable.
              </p>
              <p className="leading-relaxed">
                I’m always learning and improving my skills by building real-world applications.
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
                Improving React, TypeScript, and backend skills, while building meaningful projects.
              </p>
            </div>

            <div className="bg-[#141735] border border-pink-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-semibold text-pink-300 mb-2">
                Tech I work with
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                React, TypeScript, Node.js, Tailwind CSS, Git.
              </p>
            </div>

            <div className="bg-[#141735] border border-blue-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-xs sm:text-sm font-semibold text-blue-300 mb-2">
                What I enjoy
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Crafting clean UIs, building APIs, and making functional web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
