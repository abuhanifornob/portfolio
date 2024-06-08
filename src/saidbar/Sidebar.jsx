import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div>
      <div className="w-1/4 h-screen bg-gray-800 text-white font-mono  p-8 fixed">
        <div className="text-2xl font-bold mb-4">
          <h1 className="">Abu hanif</h1>
          <h1>Full Stack Developer</h1>
        </div>
        <nav className="text-2xl">
          <ul>
            <li className="my-2 text-red-400">
              <Link
                to="banner"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                About Me
              </Link>
            </li>

            <li className="my-2">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
