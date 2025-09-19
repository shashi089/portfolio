import React from "react";
import react from "../images/react.svg";

import { motion } from "framer-motion";
import { skill_language_store, skill_tool_store } from "./skillStore";

const SkillWrapper = ({ name, level, icon }) => {
  var className = "skill";

  if (level === "beg") className = `${className} skill_beg`;
  if (level === "avg") className = `${className} skill_avg`;
  else if (level === "verygood") className = `${className} skill_verygood`;
  else if (level === "exp") className = `${className} skill_exp`;
  if (!icon) {
    icon = react;
  }
  return (
    <div className="skill_wrapper">
      <div className={className}>
        <span className="skill_name">
          <img src={icon} alt="" className="icon_tiny mr-2" /> {name}
        </span>
        <span className="skill_level"></span>
      </div>
    </div>
  );
};
const Resume = () => {
  const resumeVariants = {
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
    <motion.div
      className="container resume_section"
      variants={resumeVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-12 col-lg-6 resume_card">
          <div className="row">
            <div className="sub_heading">Education</div>
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>Electronics and Communication</h6>
                <div className="resume_card_year">
                  BLDEA's College of Engineering (2013-2017)
                </div>
              </div>

              <p className="resume_card_description">
                I have completed B.E in Electronics and communication from
                BLDEA's College of Engineering and Technology.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>PUC- Science</h6>
                <div className="resume_card_year">
                  SNJPNMS PU Science college Nidasoshi (2012-2013)
                </div>
               
                  </br>
                  </br>
                <h6>SSLC</h6>
                <div className="resume_card_year">
                  Rani Channamma High School Hukkeri (2011)
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 resume_card">
          <div className="row">
            <div className="sub_heading">Experience</div>
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>Flyers Soft Pvt. Ltd. - Bangalore</h6>
                <span>Software Developer</span>
              </div>
              <p className="resume_card_description">
                <span>
                  <b>Duration</b> - JAN 2023 - JAN-2024
                </span>
                <br />
                Responsibilities:Collaborate with project managers to define
                technical requirements and scope. Develop user interfaces using
                Nuxt.js and React.js. Develop and maintain RESTful APIs. Provide
                technical assistance to juniors within the team
              </p>
            </div>
          </div>
          <div className="row">
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>Triofi Technologies Pvt. Ltd. - Bangalore</h6>
                <span>Software Developer</span>
              </div>
              <p className="resume_card_description">
                <span>
                  <b>Duration</b> - Dec 2021 - Dec-2022
                </span>
                <br />
                Responsibilities:Understand client requirements and functional
                specifications. Write well-designed, testable, efficient code .
                Solving complex technical issues. Provide technical assistance
                to juniors within the team
              </p>
            </div>
          </div>
          <div className="row">
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>Vindhya E-Infomedia Pvt. Ltd. - Bangalore</h6>
                <span>Assistant Team Lead</span>
              </div>
              <p className="resume_card_description">
                <span>
                  <b>Duration</b> - Jan 2019 - Dec 2020
                </span>
                <br />
                Responsibilities:Coordinated with Level 1 technical support
                engineers to take over calls outside their level of
                support.Onboarded and trained all incoming junior tech support
                engineers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="resume_card_body">
              <div className="resume_card_title">
                <h6>Microsys - Pune</h6>
                <span>Technical Support Engineer (L1) </span>
              </div>

              <p className="resume_card_description">
                <span>
                  <b>Duration</b> - Oct 2017 - Dec 2018
                </span>
                <br />
                Responsibilities:Supported customers with basic technical
                support for networking products like router, adapters. as well
                as Software application(Desktop app)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 skill_div">
          <div className="sub_heading">Language & Framework</div>
          <div className="resume_card_body">
            {skill_language_store.map((skill, i) => (
              <SkillWrapper
                key={i}
                name={skill.name}
                level={skill.level}
                icon={skill.logo}
              />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="sub_heading">Tools & Software</div>
          <div className="resume_card_body">
            {skill_tool_store.map((skill, i) => (
              <SkillWrapper
                key={i}
                name={skill.name}
                level={skill.level}
                icon={skill.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
