import { useEffect, useState } from "react";
import { getAboutData } from "../../services/About";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    const data = await getAboutData();
    setAbout(data);
  };

  if (!about) {
    return (
      <section className="min-h-screen flex justify-center items-center text-white">
        Loading...
      </section>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-[#0e1122] text-white"
    >
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            About Me
          </span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-10 rounded-full"></div>

        <p className="max-w-3xl mx-auto text-gray-300 text-center text-lg leading-relaxed mb-4">
          {about.description}
        </p>

        <div className="text-center mt-6 text-gray-400 text-md tracking-wide">
          📍 {about.location}
        </div>

        <div className="flex justify-center mt-10">
          <img
            src={about.image}
            alt={about.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-purple-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
