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

function App() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className=" w-3/4 p-8">
        <Banner />

        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
