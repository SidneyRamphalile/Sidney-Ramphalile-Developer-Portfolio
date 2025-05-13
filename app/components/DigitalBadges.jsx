"use client";
import React, { useState } from "react";

const digitalBadges = [
  {
    id: 1,
    name: "Google IT Support Certificate",
    image: "/images/projects/google-it-support-certificate.2.png",
    link: "https://www.credly.com/badges/87de5de1-1a31-4cc1-9bb6-b80634e737c4",
  },
  {
    id: 2,
    name: "Google Cybersecurity Certificate V2",
    image: "/images/projects/google-cybersecurity-certificate-v2.png",
    link: "https://www.credly.com/badges/93a44933-5235-40ea-b5de-e9d521070d07",
  },
  {
    id: 3,
    name: "Google Data Analytics Professional Certificate",
    image:
      "/images/projects/google-data-analytics-professional-certificate.2.png",
    link: "https://www.credly.com/badges/49f7b744-92bc-42c9-84c8-ad3f52eb15c0",
  },
  {
    id: 4,
    name: "Google AI Essentials",
    image: "/images/projects/google-ai-essentials.png",
    link: "https://www.credly.com/badges/160c0bcf-960f-474b-832b-24251af46a49",
  },
  {
    id: 5,
    name: "AWS Knowledge: Cloud Essentials",
    image: "/images/projects/aws-knowledge-cloud-essentials.png",
    link: "https://www.credly.com/badges/01b96f5e-82df-47dd-a024-d3d2ccc2cd9c",
  },
  {
    id: 6,
    name: "AWS Educate Introduction to Cloud 101",
    image: "/images/projects/aws-educate-introduction-to-cloud-101.png",
    link: "https://www.credly.com/badges/95dc0495-efac-4ec6-9f08-4930bf7b789a",
  },
];

const DigitalBadges = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedBadges = showMore ? digitalBadges : digitalBadges.slice(0, 3);

  return (
    <section id="digital-badges" className="text-center py-8">
      <h2 className="text-4xl font-bold text-white mb-6">Digital Badges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedBadges.map(({ id, name, image, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Set uniform image size for all badges */}
            <img
              src={image}
              alt={name}
              className="w-64 h-64 object-contain mx-auto"
            />
            <p className="text-lg font-semibold text-white mt-2">{name}</p>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default DigitalBadges;
