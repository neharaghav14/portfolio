export default function Footer() {
  return (
    <footer className="bg-[#0e1122] text-gray-400 py-6 text-center border-t border-purple-500/20">
      <p className="text-sm">
        © {new Date().getFullYear()} Neha Raghav. All rights reserved.
      </p>
    </footer>
  );
}
