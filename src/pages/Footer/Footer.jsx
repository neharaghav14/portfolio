export default function Footer() {
  return (
    <footer className="bg-[#0e1122] text-gray-400 py-8 text-center border-t border-purple-500/20">
      <p className="text-sm mb-3">
        © {new Date().getFullYear()} Neha Raghav. All rights reserved.
      </p>
      <p className="text-xs text-gray-500">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
