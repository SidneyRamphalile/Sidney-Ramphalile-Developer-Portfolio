"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Book My Show Clone",
    description:
      "This is a clone of the Book My Show website, where one can buy or rent movies.",
    image: "/images/projects/Book-my-show.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/SidneyRamphalile/Book-My-Show-Clone-Application",
    target: "_blank",
    previewUrl: "https://book-my-show-clone-application.vercel.app/",
  },
  {
    id: 2,
    title: "Zomato Landing Page",
    description: "This is a Front-End landing page of Zomato clone.",
    image: "/images/projects/zomato-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Zomato-Landing-Page-Clone",
    target: "_blank",
    previewUrl: "https://zomato-landing-page-clone-za.netlify.app/",
  },
  {
    id: 3,
    title: "Eduford",
    description:
      "This is a Front-End of a fictitious university called Eduford. ",
    image: "/images/projects/eduford.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Eduford-Fictitious-University",
    target: "_blank",
    previewUrl: "https://eduford-fictitious-university.netlify.app/",
  },
  {
    id: 4,
    title: "Business Website",
    description: "This is a Front-End of a fictitious business website.",
    image: "/images/projects/business-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Business-Website",
    target: "_blank",
    previewUrl: "https://sid-business-website.netlify.app/",
  },
  {
    id: 5,
    title: "Disney+ Hotstar Clone",
    description: "This is a Front-End of the Disney+ Hotstar clone.",
    image: "/images/projects/hotstar.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Disney-Hotstar-Clone",
    target: "_blank",
    previewUrl: "https://disney-hot-naledi-clone.netlify.app/",
  },
  {
    id: 6,
    title: "Vegetarian Taco Shop",
    description: "This is a Front-End of a fictitious Vegetarian Taco Shop.",
    image: "/images/projects/vts.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/SidneyRamphalile/fictional-vegetarian-taco-shop",
    target: "_blank",
    previewUrl: "https://imaginative-sprite-c60152.netlify.app/",
  },
  {
    id: 7,
    title: "Vidtube - Youtube Clone",
    description: "This is a Front-End of a Youtube look-alike clone, Vidtube.",
    image: "/images/projects/vidtube.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/vidTube",
    target: "_blank",
    previewUrl: "https://vidtube-youtube-clonee.netlify.app/",
  },
  {
    id: 8,
    title: "Sid Tasky App",
    description:
      "This is a basic note-taking app, where you can even have an image of notes represented.",
    image: "/images/projects/tasky-app.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Sid-Tasky-App",
    target: "_blank",
    previewUrl: "https://sid-tasky-app.netlify.app/",
  },
  {
    id: 9,
    title: "Maruo Plant and Machinery",
    description:
      "This is a Front-End of a company which deals with construction vehicles and equipment, Maruo Plant and Machinery.",
    image: "/images/projects/maruo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/maruoplantandmachinery",
    target: "_blank",
    previewUrl: "https://whimsical-begonia567hello7world.netlify.app/",
  },
  {
    id: 10,
    title: "Thaba Nchu SDA Church",
    description:
      "This is my first ever website built. It's a website of Thaba Nchu Seventh-Day Adventist church.",
    image: "/images/projects/thaba-nchu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Thaba-Nchu-SDA-Church",
    target: "_blank",
    previewUrl: "https://courageous-profiterole123happy7smile.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1},
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;