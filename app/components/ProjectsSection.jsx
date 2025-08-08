"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Kreativ Design & Print",
    description:
      "This is a website of Kreativ Design & Print, a company in Bloemfontein, built using ReactJS.",
    image: "/images/projects/kreativ-design.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/kreativebrands",
    target: "_blank",
    previewUrl: "https://polite-quokka-0e16a4.netlify.app/",
  },
  {
    id: 2,
    title: "Namanyane Primary School",
    description:
      "This is a website of Namanyane Primary School, a school in my hometown, built using ReactJS.",
    image: "/images/projects/namanyane.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Namanyane-Primary-School",
    target: "_blank",
    previewUrl: "https://stunning-halva-4a5ca5.netlify.app/",
  },
  {
    id: 3,
    title: "Advanced MERN Authentication",
    description:
      "This is a MERN Authentication where users can create an account, etc. It has a forgot password feature.",
    image: "/images/projects/auth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/advanced-mern-auth",
    target: "_blank",
    previewUrl: "https://advanced-mern-auth-agj6.onrender.com/login",
  },
  {
    id: 4,
    title: "Mini Store",
    description:
      "This is a mini store where a user can create, read, update, and delete products.",
    image: "/images/projects/mini-store.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/mini-store",
    target: "_blank",
    previewUrl: "https://mini-store-2lla.onrender.com/",
  },
  {
    id: 5,
    title: "Edusity",
    description:
      "This is a website of a fictional university called Edusity, built using ReactJS.",
    image: "/images/projects/edusity.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Edusity",
    target: "_blank",
    previewUrl: "https://adorable-squirrel-9d1076.netlify.app/",
  },
  {
    id: 6,
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
    id: 7,
    title: "Zomato Landing Page",
    description: "This is a Front-End landing page of Zomato clone.",
    image: "/images/projects/zomato-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Zomato-Landing-Page-Clone",
    target: "_blank",
    previewUrl: "https://zomato-landing-page-clone-za.netlify.app/",
  },
  {
    id: 8,
    title: "Eduford",
    description:
      "This is a Front-End of a fictitious university called Eduford.",
    image: "/images/projects/eduford.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Eduford-Fictitious-University",
    target: "_blank",
    previewUrl: "https://eduford-fictitious-university.netlify.app/",
  },
  {
    id: 9,
    title: "Business Website",
    description: "This is a Front-End of a fictitious business website.",
    image: "/images/projects/business-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Business-Website",
    target: "_blank",
    previewUrl: "https://sid-business-website.netlify.app/",
  },
  {
    id: 10,
    title: "Disney+ Hotstar Clone",
    description: "This is a Front-End of the Disney+ Hotstar clone.",
    image: "/images/projects/hotstar.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/Disney-Hotstar-Clone",
    target: "_blank",
    previewUrl: "https://disney-hot-naledi-clone.netlify.app/",
  },
  {
    id: 11,
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
    id: 12,
    title: "Vidtube - Youtube Clone",
    description: "This is a Front-End of a Youtube look-alike clone, Vidtube.",
    image: "/images/projects/vidtube.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SidneyRamphalile/vidTube",
    target: "_blank",
    previewUrl: "https://vidtube-youtube-clonee.netlify.app/",
  },
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
  const [showAll, setShowAll] = useState(false); // State to manage project visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleSeeMore = () => {
    setShowAll(!showAll); // Toggle visibility of more projects
  };

  // Filter projects based on selected tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Determine the number of projects to show based on showAll state
  const projectsToDisplay = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
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
        {projectsToDisplay.map((project, index) => (
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
      {filteredProjects.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
