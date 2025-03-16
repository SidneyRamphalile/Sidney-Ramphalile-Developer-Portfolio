"use client";
import React, { useState } from "react";

const Experience = () => {
  const [activeTechnology, setActiveTechnology] = useState(null);

  const technologies = [
    {
      id: 1,
      name: "HTML",
      color: "border-orange-500",
      bgColor: "bg-orange-500",
      image: "/images/projects/html.png",
    },
    {
      id: 2,
      name: "CSS",
      color: "border-blue-500",
      bgColor: "bg-blue-500",
      image: "/images/projects/css.png",
    },
    {
      id: 3,
      name: "JavaScript",
      color: "border-yellow-500",
      bgColor: "bg-yellow-500",
      image: "/images/projects/javascript.png",
    },
    {
      id: 4,
      name: "React",
      color: "border-blue-600",
      bgColor: "bg-blue-600",
      image: "/images/projects/react.png",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      color: "border-sky-400",
      bgColor: "bg-sky-400",
      image: "/images/projects/tailwind.png",
    },
    {
      id: 6,
      name: "Next JS",
      color: "border-white",
      bgColor: "bg-white",
      image: "/images/projects/nextjs.png",
    },
    {
      id: 7,
      name: "MongoDB",
      color: "border-green-500",
      bgColor: "bg-green-500",
      image: "/images/projects/mongodb.jpg",
    },
    {
      id: 8,
      name: "GitHub",
      color: "border-gray-400",
      bgColor: "bg-gray-400",
      image: "/images/projects/github.png",
    },
    {
      id: 9,
      name: "Node JS",
      color: "border-green-400",
      bgColor: "bg-green-400",
      image: "/images/projects/node.png",
    },
    {
      id: 10,
      name: "Linux",
      color: "border-yellow-400",
      bgColor: "bg-yellow-400",
      image: "/images/projects/linux.png",
    },
    {
      id: 11,
      name: "Python",
      color: "border-green-600",
      bgColor: "bg-green-600",
      image: "/images/projects/python.png",
    },
    {
      id: 12,
      name: "PostgreSQL",
      color: "border-blue-400",
      bgColor: "bg-blue-400",
      image: "/images/projects/postgresql.png",
    },
  ];

  return (
    <section id="experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {technologies.map(({ id, name, color, bgColor, image }) => (
          <div
            key={id}
            className={`text-center rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 ${color} border-4`}
          >
            <img
              src={image}
              alt={name}
              className="mx-auto mb-4 md:mb-8 w-24 md:w-32 transition-transform duration-300 transform hover:scale-110"
            />
            <p className="text-lg font-bold text-white">{name}</p>
            {/* Glowing background with the respective color */}
            <div
              className={`absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 ${bgColor}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
