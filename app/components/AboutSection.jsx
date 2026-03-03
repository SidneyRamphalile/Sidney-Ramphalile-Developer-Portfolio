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
        <li>HTML, CSS, JavaScript</li>
        <li>React JS, Svelte, Tailwind CSS</li>
        <li>Node JS, Express JS</li>
        <li>Mongo DB, SQL</li>
        <li>Python</li>
        <li>GitHub</li>
        <li>Linux</li>
        <li>Microsoft Azure</li>
        <li>Amazon Web Services (AWS)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Central University of Technology, Free State - National Diploma:
          Electrical Engineering
        </li>
        <br />
        <li>HTS Louis Botha, Bloemfontein - National Senior Certificate</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Certified: Azure Fundamentals (AZ900)</li>
        <li>Microsoft Certified: 365 Fundamentals (MS900)</li>
      </ul>
    ),
  },
  {
    title: "Professional Development",
    id: "professional-development",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development Training Certificate (DevTown)</li>
        <br />
        <li>Google IT Support Professional Certificate (Coursera)</li>
        <br />
        <li>
          Microsoft IT Support Specialist Professional Certificate (Coursera)
        </li>
        <br />
        <li>Google Cybersecurity Professional Certificate (Coursera)</li>
        <br />
        <li>Google Data Analytics Professional Certificate (Coursera)</li>
        <br />
        <li>120 Hour Advanced TEFL/TESOL Certificate (TEFL Universal)</li>
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:py-16 xl:px-16">
        <Image
          src={"/images/sidney-wearing-a-suit.jpg"}
          width={800}
          height={800}
          alt="Sidney smiling"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 pt-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings! I&apos;m an affable and enthusiastic individual with a
            deep passion for technology. I hold a National Diploma in Electrical
            Engineering from the Central University of Technology, Free State,
            South Africa, along with industry-recognized Microsoft certification
            in Azure Fundamentals (AZ900) and 365 Fundamentals (MS900).
            <br />
            <br />
            I&apos;ve further expanded my knowledge through extensive
            professional development including Google and Microsoft professional
            certificates in IT Support, Cybersecurity, Data Analytics, and AI
            Essentials, demonstrating my commitment to continuous learning in
            the rapidly evolving tech landscape.
            <br />
            <br />
            My venture into programming commenced in 2020 during a global
            lockdown. Embracing the world of online learning, I delved into
            HTML, CSS, and JavaScript through platforms like Free Code Camp. As
            time progressed, I expanded my educational horizons, incorporating
            Coursera, LinkedIn Learning, and other platforms to deepen my
            understanding and skills in the vast landscape of technology.
          </p>
          <div className="flex flex-row mt-8 flex-wrap">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("professional-development")}
              active={tab === "professional-development"}
            >
              Professional Development
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
