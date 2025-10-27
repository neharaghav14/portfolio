export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-[#0e1122] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          About Me
        </span>
      </h2>

      <p className="max-w-3xl text-gray-300 text-center leading-relaxed">
        I’m a Frontend Software Developer focused on building modern React
        applications with clean UI and great user experience. I enjoy turning
        complex requirements into intuitive interfaces. I specialize in
        responsive design, admin panel dashboards, reusable components, and
        performance-friendly layouts using React, Tailwind CSS, Zustand, and
        React Query.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white/5 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-purple-300">1+ Years</h3>
          <p className="text-gray-400 text-sm">Industry Experience</p>
        </div>

        <div className="p-6 bg-white/5 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-purple-300">React & UI</h3>
          <p className="text-gray-400 text-sm">Admin Dashboards</p>
        </div>

        <div className="p-6 bg-white/5 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-purple-300">Problem Solver</h3>
          <p className="text-gray-400 text-sm">Clean Code Focus</p>
        </div>
      </div>
    </section>
  );
}
