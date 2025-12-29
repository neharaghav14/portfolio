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
    <div className="min-h-screen px-4 sm:px-6 py-12 md:py-20 max-w-4xl mx-auto bg-[#0e1122] text-white">
      {/* Title - Responsive sizing */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400 mb-6 text-center md:text-left leading-tight">
        {data.title}
      </h1>

      {/* Description - Better mobile spacing */}
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed px-2 md:px-0">
        {data.description}
      </p>

      {/* Live Demo Button - Full width on mobile */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href={data.live}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Open Live Demo
        </a>
      </div>

      {/* Back Button - Better mobile positioning */}
      <div className="flex justify-center md:justify-start">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white underline decoration-2 underline-offset-4 text-sm sm:text-base transition-colors duration-200"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsDetail;
