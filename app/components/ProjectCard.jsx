
//This code below, uses the normal HTML anchor tag and adds a 'target=_blank' attribute to allow a new tab to be open
import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  deprecated = false,
}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${
            deprecated ? "grayscale-[60%] opacity-80" : ""
          }`}
        />
        {deprecated && (
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-28 w-28 overflow-hidden">
            <div className="absolute top-[22px] right-[-46px] w-[180px] rotate-45 bg-amber-500 py-1 text-center text-xs font-bold uppercase tracking-widest text-[#121212] shadow-md">
              Deprecated
            </div>
          </div>
        )}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group/link" />
            </a>
          )}
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </a>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <div className="mb-2 flex items-center gap-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          {deprecated && (
            <span className="rounded-full border border-amber-500/60 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-amber-400">
              Archived
            </span>
          )}
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
