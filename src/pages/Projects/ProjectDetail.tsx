import { useParams, Link } from "react-router-dom";

const projectDetails: any = {
  "artiluma-admin": {
    title: "Artiluma Admin Dashboard",
    description:
      "Admin panel for talent profiles, gigs, auditions and real-time filtering.",
    live: "https://devadmin.artiluma.com/login"
  },

  "auth-system": {
    title: "Authentication System",
    description:
      "Login, signup, reset password, email verification with Zustand.",
    live: "https://devadmin.artiluma.com/login"
  },

  "sanskrooti": {
    title: "Sanskrooti Platform",
    description:
      "A cultural learning platform with quizzes, educational content and modern UI.",
    live: "https://sanskrooti.vercel.app"
  }
};

const ProjectsDetail = () => {
  const { slug } = useParams();
  const data = projectDetails[slug as string];

  if (!data) return <p className="text-center py-20">Project not found</p>;

  return (
    <div className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-400 mb-6">
        {data.title}
      </h1>

      <p className="text-gray-300 mb-8">{data.description}</p>

      <a
        href={data.live}
        className="px-5 py-2 bg-pink-600 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"  // ✅ FIXED: Security warning gone
      >
        Open Live →
      </a>

      <div className="mt-10">
        <Link to="/projects" className="text-gray-300 underline">
          ← Back to projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsDetail;
