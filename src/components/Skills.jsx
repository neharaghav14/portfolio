const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "Zustand",
  "HTML5",
  "CSS3",
  "UI/UX Design",
  "Responsive Design",
  "Axios",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#0b0f19] text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Skills
        </span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 border border-purple-500/20 rounded-lg py-4 px-2 text-sm font-medium hover:bg-purple-600/20 hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
