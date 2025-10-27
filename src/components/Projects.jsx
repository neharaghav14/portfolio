const projects = [
  {
    title: "Admin Dashboard UI",
    description:
      "A fully responsive admin dashboard built with React, Tailwind, Zustand, DataTables, pagination, modals and filtering.",
    tech: ["React", "Tailwind", "Zustand"],
    link: "#",
  },
  {
    title: "Auth System (Login/Signup/Reset)",
    description:
      "Complete authentication flow using Zustand, form validation, and smooth UI transitions across pages.",
    tech: ["React", "Zustand", "API Integration"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0e1122] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Projects
        </span>
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/5 border border-purple-500/20 rounded-xl p-6 shadow hover:shadow-purple-400/30 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-300">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
            <p className="text-gray-400 text-xs mb-4">
              {proj.tech.join(" • ")}
            </p>
            <a
              className="text-purple-400 text-sm hover:underline"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
