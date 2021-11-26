import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import githubs from "../icons/github.svg";

const ProjectCard = ({ image, name, url, github }) => {
  const projectCardVariants = {
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

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-sm-12 col-md-6 col-lg-4 mt-2"
        variants={projectCardVariants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <figure className="project_wrapper">
          <a href={url} target="_blank" rel="noreferrer">
            <img src={image} alt="project_image" className="project_image" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <div className="project_name mt-2">
              <img src={githubs} alt="" />-{name}
            </div>
          </a>
        </figure>
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectCard;
