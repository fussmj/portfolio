"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import motion from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PROJECT_DATA = [
  {
    id: 1,
    title: "project 1",
    description: "description of project 1",
    image: "/project1.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "project 2",
    description: "description of project 2",
    image: "/project2.png",
    gitUrl: "/",
    previewUrl: "/",
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
  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold">
        My Projects!
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {PROJECT_DATA.map((proj, index) => {
          return (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              imgUrl={proj.image}
              gitUrl={proj.gitUrl}
              previewUrl={proj.previewUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;
