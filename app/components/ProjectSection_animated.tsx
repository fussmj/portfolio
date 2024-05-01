"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

//assign dummy project data
const PROJECT_DATA = [
  {
    id: 1,
    title: "OptiCool Technologies Website",
    description:
      "This is a project that I worked on for OptiCool Technologies while employed there. This is their website hosted on HubSpot.",
    image: "/project-opticool.PNG",
    gitUrl: "/",
    previewUrl: "https://www.opticooltechnologies.com",
  },
  {
    id: 2,
    title: "Issue Tracker Example",
    description:
      "A simple issue tracker that demonstrates full-stack capability. It implements PostgreSQL database and user login with google account.",
    image: "/project-issue-tracker.PNG",
    gitUrl: "https://github.com/fussmj/issue-tracker",
    previewUrl: "https://issue-tracker-eta-ten.vercel.app/",
  },
  {
    id: 3,
    title: "project 3",
    description: "description of project 3",
    image: "/project3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "project 4",
    description: "description of project 4",
    image: "/project4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "project 5",
    description: "description of project 5",
    image: "/project3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "project 6",
    description: "description of project 6",
    image: "/project4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [leftConstraint, setLeftConstraint] = useState(0);
  const [containerKey, setContainerKey] = useState();
  const id = "carousel";

  // set the left constraint
  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id);
    if (el) {
      setLeftConstraint(el.scrollWidth - el.offsetWidth);
    }
  }, [id]);

  // set key and left constraint on initial page load and on resize
  useEffect(() => {
    handleLeftConstraint();
    const handleResize = () => {
      setContainerKey((prev: any) => prev + 1);
      handleLeftConstraint();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);

  return (
    <section id="projects">
      <motion.div
        key={containerKey}
        id={id}
        className="overflow-hidden border-t border-orange-500 py-10"
      >
        <motion.div
          id="inner-carousel"
          className="flex space-x-5"
          drag="x"
          dragConstraints={{ right: 0, left: -leftConstraint }}
        >
          {PROJECT_DATA.map((proj, index) => {
            return (
              <motion.div key={proj.id} className="min-w-[20rem]">
                <ProjectCard
                  title={proj.title}
                  description={proj.description}
                  imgUrl={proj.image}
                  gitUrl={proj.gitUrl}
                  previewUrl={proj.previewUrl}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
