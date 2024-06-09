import {
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="text-center my-4">
      <div className="p-8" id="contact" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-semibold mb-2">Abu Hanif</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-700 mr-3" />
                <span className="text-lg">hanifcse90@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-700 mr-3" />
                <span className="text-lg">01716203929</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-gray-700 mr-3" />
                <span className="text-lg">01716203929</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-gray-700 mr-3" />
                <a
                  href="https://www.linkedin.com/in/lin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-gray-700 mr-3" />
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
