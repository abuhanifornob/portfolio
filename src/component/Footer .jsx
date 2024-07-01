import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            &copy; {currentYear} Abu Hanif. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mern-abu-hanif/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094944106787"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/abuhanifornob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
