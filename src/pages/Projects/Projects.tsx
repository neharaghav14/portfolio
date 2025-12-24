import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-14 text-pink-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d] hover:scale-[1.02] transition">
          <div className="text-5xl mb-4">📊</div>
          <h3 className="text-2xl font-semibold mb-3">Artiluma Admin Dashboard</h3>
          <p className="text-gray-300 mb-4">
            Fully responsive admin panel for talents, gigs & auditions.
          </p>

          <Link to="/projects/artiluma-admin" className="text-pink-400 font-medium">
            View Project →
          </Link>
        </div>

        {/* Project 2 */}
        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d] hover:scale-[1.02] transition">
          <div className="text-5xl mb-4">🔐</div>
          <h3 className="text-2xl font-semibold mb-3">Authentication System</h3>
          <p className="text-gray-300 mb-4">
            Full auth system with login, signup & password reset.
          </p>

          <Link to="/projects/auth-system" className="text-pink-400 font-medium">
            View Project →
          </Link>
        </div>

        {/* Project 3 - New Sanskrooti */}
        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d] hover:scale-[1.02] transition">
          <div className="text-5xl mb-4">🎭</div>
          <h3 className="text-2xl font-semibold mb-3">Sanskrooti Platform</h3>
          <p className="text-gray-300 mb-4">
            Cultural learning website with quizzes & modern UI.
          </p>

          <Link to="/projects/sanskrooti" className="text-pink-400 font-medium">
            View Project →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;
