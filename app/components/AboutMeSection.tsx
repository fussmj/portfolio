"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc space-y-1">
        <li>Javascript/Typescript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS/Tailwind</li>
        <li>SQL</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc space-y-1">
        <li>
          <strong>Master of Science:</strong> Electrical Engineering,
          specializing in machine learning and artificial intelligence
        </li>
        <li>
          <strong>Bachelor of Science:</strong> Electrical Engineering
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc space-y-1">
        <li>Salesforce Platform Developer 1</li>
      </ul>
    ),
  },
];

const AboutMeSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id: string) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white border-t border-orange-500">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
        <Image
          className="rounded-3xl"
          src="/about-me.png"
          alt="aboutme"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I have a passion for programming in many forms. Professionally, I am
            a controls engineer who writes controls programs for refrigeration
            equipment. I started full-stack development as a hobby and have
            grown to love it more with time. I have experience in Javascript,
            SQL, HTML, css, React.js, next.js, python, as well as several other
            technologies. I am committed to excellent end-user experiences in
            everything that I do. I am always exited to learn more and take on
            new programming challenges.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
