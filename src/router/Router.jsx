import { Route, Routes } from "react-router-dom";

// Main pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";

//Sub-pages
import ProjectDetail from "../sub-pages/ProjectDetail";

import projectData from "../data/projectDetails.json";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      {projectData.map((project, index) => (
        <Route
          key={index}
          path={project.path}
          element={
            <ProjectDetail
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default Router;
