const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "React Query", icon: "🔄" },
  { name: "Zustand", icon: "🐻" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎭" },
  { name: "UI/UX Design", icon: "✨" },
  { name: "Responsive Design", icon: "📱" },
  { name: "Axios", icon: "🔌" },
  { name: "Git & GitHub", icon: "🔧" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#0a0e1a] text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Skills & Technologies
        </span>
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-12 rounded-full"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl py-6 px-4 text-sm font-semibold hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-pink-600/30 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{skill.icon}</div>
            <div className="text-gray-200">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
