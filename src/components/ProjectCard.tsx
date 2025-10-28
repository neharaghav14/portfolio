type ProjectType = {
  title: string;
  slug: string;
  image: string;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div>{project.title}</div>
  );
};

export default ProjectCard;
