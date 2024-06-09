const Projects = () => {
  const projectData = [
    {
      title: "Event Management",
      description:
        "Eventify is a comprehensive event management platform designed to streamline the process of planning, organizing, and attending events",
      image: "https://i.ibb.co/MpQJ0tZ/event-management.png",
      features:
        "User Authentication , Profile Management Event Management (CRUD Operations) ,Advanced Search and Filtering , Dashboard ,Responsive Design",
      technologies:
        "React JS,Tailwind CSS,Node.js, Express.js,MongoDB , JSON Web Token (JWT),Firebase Authentication ,Vercel",
      link: "https://eventify-clinet.vercel.app/",
      code: "https://github.com/abuhanifornob/eventify_clinet",
    },
    {
      title: "Event Management",
      description:
        "Eventify is a comprehensive event management platform designed to streamline the process of planning, organizing, and attending events",
      image: "https://i.ibb.co/MpQJ0tZ/event-management.png",
      features:
        "User Authentication , Profile Management Event Management (CRUD Operations) ,Advanced Search and Filtering , Dashboard ,Responsive Design",
      technologies:
        "React JS,Tailwind CSS,Node.js, Express.js,MongoDB , JSON Web Token (JWT),Firebase Authentication ,Vercel",
      link: "https://eventify-clinet.vercel.app/",
      code: "https://github.com/abuhanifornob/eventify_clinet",
    },
    {
      title: "Event Management",
      description:
        "Eventify is a comprehensive event management platform designed to streamline the process of planning, organizing, and attending events",
      image: "https://i.ibb.co/MpQJ0tZ/event-management.png",
      features:
        "User Authentication , Profile Management Event Management (CRUD Operations) ,Advanced Search and Filtering , Dashboard ,Responsive Design",
      technologies:
        "React JS,Tailwind CSS,Node.js, Express.js,MongoDB , JSON Web Token (JWT),Firebase Authentication ,Vercel",
      link: "https://eventify-clinet.vercel.app/",
      code: "https://github.com/abuhanifornob/eventify_clinet",
    },
  ];
  return (
    <div
      id="projects"
      className="text-center my-4 font-mono"
      data-aos="fade-right"
    >
      <div className="p-8" id="projects">
        <h2 className="text-3xl font-bold text-center mb-8">
          HERE ARE SOME OF <br /> MY PROJECTS
        </h2>
        <div className="bg-amber-500 py-4 px-8 text-start rounded-lg mb-12 font-mono text-2xl">
          <h3>
            I am happy to know you <br />
            that 15+ projects done sucessfully!
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-start">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden text-white hover:scale-105 duration-75"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                <p>
                  {" "}
                  <span className="font-bold text-2xl">Key Features: </span>
                  {project.features}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-2xl my-4 mb-8">
                    Technologies Used:{" "}
                  </span>
                  {project.technologies}
                </p>

                <a
                  href={project.link}
                  className="text-blue-500 text-2xl hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                {" | "}
                <a
                  href={project.code}
                  className="text-blue-500 font-bold text-2xl hover:underline"
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
