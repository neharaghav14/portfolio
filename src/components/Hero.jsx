export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0b0f19] to-[#0e1122] text-white"
    >
      <h2 className="text-lg md:text-xl font-light text-purple-300 tracking-wide mb-2">
        Hi, I’m
      </h2>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
          Neha Raghav
        </span>
      </h1>

      <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">
        Frontend Software Developer
      </h3>

      <p className="text-base md:text-lg max-w-2xl text-gray-300 leading-relaxed mb-10">
        Designing clean and functional UIs that translate ideas into
        beautifully crafted interfaces for the real world.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-600/20 transition font-medium"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
