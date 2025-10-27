export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#0b0f19] text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Get In Touch
        </span>
      </h2>

      <p className="max-w-xl mx-auto text-gray-300 mb-10">
        Have an opportunity, idea, or role that fits frontend development?
        I'm always excited to build something impactful.
      </p>

      <div className="space-y-3">
        <p className="text-lg">
          📩 Email:
          <a
            href="mailto:kusum14032000@gmail.com"
            className="text-purple-400 hover:underline ml-2"
          >
            kusum14032000@gmail.com
          </a>
        </p>
        <p className="text-lg">
          📞 Phone:
          <a
            href="tel:+917906937313"
            className="text-purple-400 hover:underline ml-2"
          >
            +91 79069 37313
          </a>
        </p>
        <p className="text-lg">
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/neha-raghav-648b0b214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline ml-2"
          >
            linkedin.com/in/neha-raghav
          </a>
        </p>
        <p className="text-lg">
          🧑‍💻 GitHub:
          <a
            href="https://github.com/neharaghav14/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline ml-2"
          >
            github.com/neharaghav14
          </a>
        </p>
      </div>
    </section>
  );
}
