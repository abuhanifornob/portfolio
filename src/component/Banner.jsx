import bannerImage from "../assets/images/hanif-banner.jpg";
const Banner = () => {
  return (
    <div id="banner" className="text-center text-2xl font-bold my-4">
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
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="relative text-center text-yellow-100 ">
          <h1 className="text-5xl font-bold mb-4">Hi, I Am Abu Hanif</h1>
          <h2 className="text-3xl mb-6">Full Stack Developer</h2>
          <div className="flex justify-start">
            <a
              href="/path/to/your/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
