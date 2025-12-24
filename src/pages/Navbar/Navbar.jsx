import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-xl text-white shadow-lg border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="relative hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 duration-300 cursor-pointer font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-2xl transition-transform hover:scale-110"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl flex flex-col gap-6 py-8 text-center border-t border-purple-500/10 animate-fade-in">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 text-lg font-medium transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
