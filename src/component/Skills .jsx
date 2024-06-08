import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaAws,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiHeroku,
  SiNetlify,
  SiMysql,
  SiVisualstudiocode,
  SiPycharm,
  SiVercel,
} from "react-icons/si";
const Skills = () => {
  const expertise = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ES6", icon: <FaJs /> },
    { name: "React Js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap5", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },

    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const comfortable = [
    { name: "TypeScript", icon: <FaJs /> },
    { name: "Nextjs", icon: <FaReact /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "OOP", icon: <FaPython /> },
    { name: "Python", icon: <FaPython /> },
    { name: "DSA", icon: <FaJs /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  const tools = [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "PyCharm", icon: <SiPycharm /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <div id="skills" className="text-center my-4 font-mono">
      <div className="p-8" id="skills">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-3xl font-semibold mb-4 text-start">
              Expertise
            </h3>
            <ul className="space-y-2">
              {expertise.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center space-x-2 text-xl"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-3xl font-semibold mb-4 text-start">
              Comfortable
            </h3>
            <ul className="space-y-2">
              {comfortable.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center space-x-2 text-xl"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-3xl font-semibold mb-4 text-start">Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center space-x-2 text-xl"
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
