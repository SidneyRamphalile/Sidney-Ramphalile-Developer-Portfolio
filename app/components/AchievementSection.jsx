"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const achievementsList = [
  {
    metric: "Projects on GitHub",
    value: "40",
    postfix: "+",
  },
  {
    metric: "Awards on LinkedIn",
    value: "362",
  },
  {
    metric: "Digital Badges",
    value: "13",
  },
   {
    metric: "Certifications",
    value: "4",
  },
  {
    metric: "Years in Web Development",
    value: "5",
  },
];

// Lightweight count-up that starts when scrolled into view.
// No external library needed, so it renders instantly with the page.
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return <span ref={ref}>{display.toLocaleString("en-US")}</span>;
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center w-full mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumber value={parseInt(achievement.value)} />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base text-center">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
