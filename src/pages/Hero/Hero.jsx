export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0a0e1a] via-[#0e1122] to-[#0a0e1a] text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <p className="text-sm md:text-base font-light text-gray-400 tracking-widest mb-3 uppercase animate-fade-in">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
            Neha Raghav
          </span>
        </h1>

        <h3 className="text-xl md:text-3xl font-semibold text-gray-200 mb-6 animate-slide-up delay-200">
          Frontend Software Developer
        </h3>

        <p className="text-base md:text-lg max-w-2xl text-gray-300 leading-relaxed mb-10 animate-slide-up delay-300">
          Designing clean and functional UIs that translate ideas into
          beautifully crafted interfaces for the real world.
        </p>

        <div className="flex flex-wrap gap-5 justify-center animate-slide-up delay-400">
          <a
            href="#projects"
            className="group px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 duration-300"
          >
            View Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-purple-500 hover:bg-purple-600/20 transition-all font-semibold hover:scale-105 duration-300 hover:border-pink-500"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
