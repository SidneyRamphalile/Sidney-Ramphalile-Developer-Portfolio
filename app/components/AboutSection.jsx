"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React JS, Bootstrap, Tailwind CSS</li>
        <li>Node JS, Express JS</li>
        <li>Mongo DB, SQL</li>
        <li>Python</li>
        <li>GitHub</li>
        <li>Linux</li>
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
        <li>Full Stack Web Development</li>
        <br />
        <li>Google IT Support Professional Certificate </li>
        <br />
        <li>Google Cybersecurity Professional Certificate </li>
        <br />
        <li>Google Data Analytics Professional Certificate </li>
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
  }

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
            profound passion for technology. Holding a National Diploma in
            Electrical Engineering from the Central University of Technology,
            Free State, South Africa, the Google IT Support Professional
            Certificate and the Google Cybersecurity Professional Certificate from Coursera, I&apos;ve embarked on an exciting journey
            in the tech realm.
            <br />
            <br />
            My venture into programming commenced in 2020 during a global
            lockdown. Embracing the world of online learning, I delved into
            HTML, CSS, and JavaScript through platforms like Free Code Camp. As
            time progressed, I expanded my educational horizons, incorporating
            Coursera, LinkedIn Learning, and other platforms to deepen my
            understanding and skills in the vast landscape of technology.
          </p>
          <div className="flex flex-row mt-8">
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
}

export default AboutSection;