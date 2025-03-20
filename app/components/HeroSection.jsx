"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const target = document.querySelector("#contact"); // Select the target section by its ID
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the contact section
    }
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sidney",
                1000,
                "Full Stack Web Developer",
                1000,
                "National Diploma in Electrical Engineering graduate",
                1000,
                "Google IT Support Professional Certificate graduate",
                1000,
                "Google Cybersecurity Professional Certificate graduate",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I have 4 years of experience building websites. Currently, I love to
            work on web applications using technologies like HTML, CSS,
            JavaScript, React, Tailwind, and MongoDB.
          </p>

          <div>
            <button
              onClick={handleHireMeClick} // Smooth scroll when clicked
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200"
            >
              Hire Me
            </button>
            <a
              href="/Mokuoane-Sidney-Ramphalile-CV.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[320px] h-[320px] lg:w-[430px] lg:h-[430px] relative">
            <Image
              src="/images/sidney.png"
              alt="Hero Image of Sidney Smiling"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
