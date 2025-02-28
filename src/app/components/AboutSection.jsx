"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML - CSS</li>
        <li>REACT -VUE </li>
        <li>JAVASCRIPT - PYTHON </li>
        <li>NODEJS - NEXTJS - TYPESCRIPT</li>
        <li>PHP - SQL - NOSQL</li>
        <li>GIT - GITHUB</li>
        <li>LINUX - SSH - GPG - CICS - TCP/IP</li>
        <li>PHOTOSHOP - ILLUSTRATOR - CANVA - PROCREATE</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>APPLICATION DEVELOPER WITH WEB TECHNOLOGIES - CIFO - LA VIOLETA BARCELONA-SPAIN </li>
        <li>COMPUTER SYSTEMS ENGINEER - TECHNOLOGICAL UNIVERSITY OF EL SALVADOR</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM - WEB DEVELOPMENT WITH PYTHON</li>
        <li>IBM - WEB DEVELOPMENT WITH JAVASCRIPT</li>
        <li>IBM - WEB DEVELOPMENT WITH GIT - GITHUB</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          My passion for technology led me to specialize in web application development. In the last year, I have trained in JavaScript, Node.js, React, PHP, SQL, CSS, GitHub and Linux, with bases in Python, Java and C#. This combination of business experience, leadership and technical skills allows me to create digital solutions with real impact.
          </p>
          <p className="text-base lg:text-lg">
          I am proactive, adaptable and with a growth mindset, always seeking to optimize processes and generate value for companies. My goal is to continue growing and contribute to the success of a company that values ​​innovation, teamwork and constant evolution.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
