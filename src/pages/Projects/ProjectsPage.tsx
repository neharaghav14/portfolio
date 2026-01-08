import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-pink-400">All Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d]">
          <h3 className="text-xl font-semibold mb-3">Artiluma Admin Dashboard</h3>
          <p className="text-gray-300">
            Talent management, gigs, auditions, filtering.
          </p>
          <Link to="/projects/artiluma-admin" className="block mt-4 text-pink-400">
            View Details →
          </Link>
        </div>

        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d]">
          <h3 className="text-xl font-semibold mb-3">Authentication System</h3>
          <p className="text-gray-300">
            Signup, login, reset password, security flows.
          </p>
          <Link to="/projects/auth-system" className="block mt-4 text-pink-400">
            View Details →
          </Link>
        </div>

        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d]">
          <h3 className="text-xl font-semibold mb-3">Sanskrooti Platform</h3>
          <p className="text-gray-300">
            Cultural learning website with quizzes and educational content.
          </p>
          <Link to="/projects/sanskrooti" className="block mt-4 text-pink-400">
            View Details →
          </Link>
        </div>

        {/* New Santosh Saree Center Project */}
        <div className="p-8 bg-[#12121c] rounded-2xl border border-[#2a2a3d] md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-3">Santosh Saree Center</h3>
          <p className="text-gray-300">
            E-commerce platform for premium silk sarees, bridal and party wear.
          </p>
          <Link to="/projects/santosh-saree-center" className="block mt-4 text-pink-400">
            View Details →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
