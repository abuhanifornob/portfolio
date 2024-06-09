import bannerImage from "../assets/images/hanif-banner.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      id="banner"
      className="text-center text-2xl font-bold my-4"
      data-aos="fade-right"
    >
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url('${bannerImage}')` }}
      >
        {/* Blurred background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        ></div>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <div
          className="relative top-16 -left-32 text-yellow-100"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I Am Abu Hanif</h1>
          <h2 className="text-3xl mb-6">Full Stack Developer</h2>
          <div className="flex justify-start">
            <a
              href="https://drive.google.com/file/d/1BX3FtzzxKWBbCkHSLLNRJeyzXduGVgIH/view?usp=drive_link"
              download
              className="bg-blue-500 opacity-70 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <div className="flex justify-center items-center">
                <span>
                  <FaCloudDownloadAlt />
                </span>
                Resume
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
