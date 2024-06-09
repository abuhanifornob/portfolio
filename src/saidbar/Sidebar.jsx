import { Link } from "react-scroll";
import hanif from "../assets/images/Hanif.JPG";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:block md:w-1/4 h-screen bg-gray-800 text-white  p-8 fixed text-center">
        <div className="text-2xl font-bold mb-4">
          <div className="flex justify-center items-center">
            <img src={hanif} alt="" className="w-32 h-32 rounded-full " />
          </div>

          <h1 className="text-3xl font-bold text-slate-400">Abu hanif</h1>
          <h1 className="text-slate-300">Full Stack Developer</h1>
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
