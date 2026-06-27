"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CosmicBackground from "./CosmicBackground";

const HeroSection = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const target = document.querySelector("#contact"); // Select the target section by its ID
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the contact section
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <CosmicBackground />
      {/* soft vignette so text stays readable over the starfield */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, rgba(8,8,20,0) 35%, rgba(8,8,20,0.55) 100%)",
        }}
      />
      <div className="container relative mx-auto grid grid-cols-1 px-12 sm:grid-cols-12">
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
                "Microsoft Certified: Azure Fundamentals (AZ900)",
                1500,
                "Microsoft Certified: Azure Data Fundamentals (DP900)",
                1500,
                "Microsoft Certified: Azure AI Fundamentals (AI900)",
                1500,
                "Microsoft 365 Certified: Fundamentals (MS900)",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              deletionSpeed={70}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I have 5 years of experience building websites. Currently, I love to
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
          <div className="relative place-self-center">
            {/* outer glow halo */}
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-pink-600/40 blur-2xl" />
            {/* slowly rotating orbital ring */}
            <div
              className="pointer-events-none absolute -inset-3 rounded-full opacity-70 animate-[spin_14s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(168,85,247,0.0), rgba(168,85,247,0.8), rgba(59,130,246,0.0), rgba(236,72,153,0.8), rgba(168,85,247,0.0))",
                WebkitMask:
                  "radial-gradient(transparent 47%, #000 48%, #000 50%, transparent 51%)",
                mask: "radial-gradient(transparent 47%, #000 48%, #000 50%, transparent 51%)",
              }}
            />
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full ring-1 ring-white/15 lg:h-[430px] lg:w-[430px]">
              {/* breathtaking planet backdrop */}
              <Image
                src="https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?q=80&w=1200&auto=format&fit=crop"
                alt="A breathtaking planet floating in space among the stars"
                fill
                sizes="430px"
                className="object-cover"
                priority
              />
              {/* subtle depth shade so the portrait pops */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              {/* portrait in front of the planet */}
              <Image
                src="/images/sidney.png"
                alt="Hero Image of Sidney Smiling"
                width={300}
                height={300}
                className="absolute left-1/2 top-[60%] w-[260px] -translate-x-1/2 -translate-y-1/2 lg:w-[300px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
