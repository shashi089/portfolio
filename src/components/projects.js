import React, { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./projectCard";
import projects_store from "./projectsStore";

const Projects = () => {
  const [projects, setProjects] = useState(projects_store);

  const projectsVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const handleFilterCatagory = (name) => {
    const new_array = projects_store.filter((project, i) =>
      project.catagory.includes(name)
    );
    setProjects(new_array);
  };
  return (
    <motion.div
      className="container projects_section"
      variants={projectsVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="projects_section_header d-flex">
        <div
          className="project_header_child"
          onClick={() => setProjects(projects_store)}
        >
          All
        </div>
        <div
          className="project_header_child"
          onClick={() => handleFilterCatagory("html")}
        >
          HTML&CSS
        </div>
        <div
          className="project_header_child"
          onClick={() => handleFilterCatagory("react.js")}
        >
          React js
        </div>
        <div
          className="project_header_child"
          onClick={() => handleFilterCatagory("fullstack")}
        >
          Fullstack
        </div>
      </div>
      <div className="row">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image}
            name={project.name}
            url={project.url}
            github={project.github}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
