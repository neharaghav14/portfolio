export default function Contact() {
  const contactInfo = [
    {
      icon: "📩",
      label: "Email",
      value: "kusum14032000@gmail.com",
      link: "mailto:kusum14032000@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 79069 37313",
      link: "tel:+917906937313",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/neha-raghav",
      link: "https://www.linkedin.com/in/neha-raghav-648b0b214/",
    },
    {
      icon: "🧑‍💻",
      label: "GitHub",
      value: "github.com/neharaghav14",
      link: "https://github.com/neharaghav14/portfolio",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0a0e1a] text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Get In Touch
        </span>
      </h2>
      
      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>

      <p className="max-w-xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
        Have an opportunity, idea, or role that fits frontend development?
        I'm always excited to build something impactful.
      </p>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target={info.link.startsWith("http") ? "_blank" : undefined}
            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl hover:border-purple-500/60 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {info.icon}
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 mb-1">{info.label}</p>
              <p className="text-purple-300 font-medium group-hover:text-pink-300 transition-colors duration-300">
                {info.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
