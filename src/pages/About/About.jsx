// src/pages/About/About.jsx
import { useEffect, useState } from "react";
import { getAboutData } from "../../services/About";

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadAbout = async () => {
    try {
      const res = await getAboutData();
      console.log("About API:", res);
      setAbout(res);
    } catch (error) {
      console.error("About fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAbout();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center text-white bg-[#0e1122]">
        <p className="text-lg text-gray-300">Loading About section...</p>
      </section>
    );
  }

  if (!about) {
    return (
      <section className="min-h-screen flex justify-center items-center text-white bg-[#0e1122]">
        <p className="text-lg text-red-400">Failed to load About section.</p>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-10 py-20 bg-[#0e1122] text-white"
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            A quick snapshot of who I am, what I do, and what I love building.
          </p>
        </div>

        {/* Top section: text + quick info */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Main bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xl text-gray-100">
              {about.name && <span className="font-semibold">{about.name}</span>}{" "}
              {about.role && (
                <span className="text-purple-300">– {about.role}</span>
              )}
            </p>

            <p className="text-gray-400">
              {about.location && (
                <>
                  <span className="mr-1">📍</span>
                  {about.location}
                </>
              )}
            </p>

            {/* Description from API */}
            {about.description && (
              <p className="text-gray-300 leading-relaxed">
                {about.description}
              </p>
            )}

            <p className="text-gray-300 leading-relaxed">
              I enjoy turning ideas into real-world products using clean,
              scalable code and thoughtful UI/UX. I love working with modern web
              technologies like React, TypeScript, Node.js, and Tailwind CSS,
              and I am always exploring better ways to structure projects and
              write maintainable code.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Beyond just building features, I focus on developer experience,
              reusable components, and smooth user flows. I enjoy debugging,
              refactoring, and continuously improving my understanding of
              JavaScript, DSA, and system design.
            </p>
          </div>

          {/* Quick info cards */}
          <div className="space-y-4">
            <div className="bg-[#141735] border border-purple-500/30 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-purple-300 mb-2">
                Current Focus
              </h3>
              <p className="text-sm text-gray-300">
                Building full‑stack projects, improving DSA, and polishing my
                portfolio for product‑based roles.
              </p>
            </div>

            <div className="bg-[#141735] border border-pink-500/30 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-pink-300 mb-2">
                Tech I work with
              </h3>
              <p className="text-sm text-gray-300">
                React, TypeScript, JavaScript, Node.js, Express, MongoDB,
                Tailwind CSS, Git & GitHub.
              </p>
            </div>

            <div className="bg-[#141735] border border-blue-500/30 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-blue-300 mb-2">
                What I enjoy
              </h3>
              <p className="text-sm text-gray-300">
                Crafting clean UIs, building APIs, integrating auth flows, and
                turning ideas around culture and learning into real
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section: highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-[#141735] rounded-xl p-5 border border-purple-500/30">
            <p className="text-xl font-semibold text-purple-300 mb-1">01</p>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <p className="text-sm text-gray-300">
              Responsive, clean, and accessible interfaces built with React and
              Tailwind, focused on user experience.
            </p>
          </div>

          <div className="bg-[#141735] rounded-xl p-5 border border-pink-500/30">
            <p className="text-xl font-semibold text-pink-300 mb-1">02</p>
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-sm text-gray-300">
              REST APIs with Node.js and Express, MongoDB schemas, auth flows,
              and secure data handling.
            </p>
          </div>

          <div className="bg-[#141735] rounded-xl p-5 border border-blue-500/30">
            <p className="text-xl font-semibold text-blue-300 mb-1">03</p>
            <h4 className="font-semibold mb-2">Mindset</h4>
            <p className="text-sm text-gray-300">
              Curious, consistent, and improvement‑driven — always learning and
              shipping real projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
