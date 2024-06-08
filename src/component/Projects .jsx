const Projects = () => {
  const projectData = [
    {
      title: "Project One",
      description: "Description of project one.",
      image: "path/to/project-one-image.jpg",
      link: "https://example.com/project-one",
      code: "https://github.com/username/project-one",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "path/to/project-two-image.jpg",
      link: "https://example.com/project-two",
      code: "https://github.com/username/project-two",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "path/to/project-two-image.jpg",
      link: "https://example.com/project-two",
      code: "https://github.com/username/project-two",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "path/to/project-two-image.jpg",
      link: "https://example.com/project-two",
      code: "https://github.com/username/project-two",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "path/to/project-two-image.jpg",
      link: "https://example.com/project-two",
      code: "https://github.com/username/project-two",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "path/to/project-two-image.jpg",
      link: "https://example.com/project-two",
      code: "https://github.com/username/project-two",
    },
    // Add more projects as needed
  ];
  return (
    <div id="projects" className="text-center my-4">
      <div className="p-8" id="projects">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                {" | "}
                <a
                  href={project.code}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
