// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import ProjectsDetail from "./pages/Projects/ProjectDetail";
import ProjectsPage from "./pages/Projects/ProjectsPage";

function App() {
  return (
    <Router>
      <div className="bg-black text-white scroll-smooth">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <section id="about">
                  <About />
                </section>

                <section id="skills">
                  <Skills />
                </section>

                <section id="projects">
                  <Projects />
                </section>

                <section id="contact">
                  <Contact />
                </section>

                <section id="footer">
                  <Footer />
                </section>
              </>
            }
          />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
