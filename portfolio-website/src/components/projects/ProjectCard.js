import React, { useState } from "react";

function ProjectCard({
  title,
  image,
  features,
  githubUrl = "https://github.com/jrsussner18",
}) {
  return (
    // 1. Add 'group' class and 'relative' positioning to the main card container
    <div className="md:w-1/3 group relative p-6 rounded-3xl border border-gray-600 border-solid text-center overflow-hidden transition-all duration-300">
      {/* IMAGE CONTAINER: fixed height h-64 */}
      <div className="w-full h-64 overflow-hidden rounded-[2rem] mb-4 relative">
        {/* Main Image */}
        <img
          src={image}
          alt={`Preview of ${title} project`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* HOVER OVERLAY 
            - absolute fill-0 sets it to cover the entire image area.
            - bg-black/70 provides the semi-transparent dark overlay.
            - transition/opacity/visibility handles the animation and state.
          */}
        <div
          className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 
                        opacity-0 invisible transition-all duration-300 ease-in-out 
                        group-hover:opacity-100 group-hover:visible"
        >
          <h3 className="text-xl font-bold text-white mb-3 text-left">
            Key Features
          </h3>
          <ul className="grid gap-2 text-sm text-white/90 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Title is displayed outside the image container */}
      <h2 className="font-[600] text-[1.75rem] mb-[1rem] m-[1rem]">{title}</h2>

      {/* Button Section */}
      <div className="flex justify-center gap-[1rem]">
        <button
          className="font-[600] transition-all duration-300 ease-in p-[1rem] w-[9rem] rounded-[2rem] border border-solid border-white bg-white text-black hover:cursor-pointer hover:bg-black hover:text-white"
          onClick={() => {
            const url = githubUrl;
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) newWindow.opener = null;
          }}
        >
          Github
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
