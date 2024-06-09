import About from "./component/About";
import Banner from "./component/Banner";
import Blog from "./component/Blog ";
import Contact from "./component/Contact ";
import Education from "./component/Education ";
import Experience from "./component/Experience ";
import Footer from "./component/Footer ";
import Projects from "./component/Projects ";
import Skills from "./component/Skills ";
import Sidebar from "./saidbar/Sidebar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Carousel from "./component/Carousel";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation in milliseconds
      delay: 200, // Delay in milliseconds
    });
  }, []);
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="w-full md:w-3/4 p-8">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Carousel />
        <Experience />
        <Education />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
