import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <section className="flex justify-center gap-[5rem] h-[80vh]">
        <Profile />
      </section>
      <section className="text-white relative py-24" id="about">
        <About />
      </section>
      <section className="relative text-white py-24" id="experience">
        <Experience />
      </section>
      <section className="relative text-white py-24" id="projects">
        <Projects />
      </section>
      <section
        classname="flex text-white justify-center flex-col h-[20vh] py-24"
        id="contact"
      >
        <Contact />
      </section>
        <Footer />
      <script src="script.js"></script>
    </div>
  );
}

export default App;
