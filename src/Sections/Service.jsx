import React from 'react';
import { MdCode, MdDashboard, MdSearch, MdSpeed, MdPublic, MdGroups2 } from "react-icons/md";

const Services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern tech.",
    icon: <MdCode />
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Creating user-friendly interfaces and engaging experiences.",
    icon: <MdDashboard />
  },
  {
    id: 3,
    title: "SEO-friendly Markup",
    description: "Optimizing website structure for search engine visibility.",
    icon: <MdSearch />
  },
  {
    id: 4,
    title: "Performance",
    description: "Enhancing speed and performance for a seamless UX.",
    icon: <MdSpeed />
  },
  {
    id: 5,
    title: "Cross-browser",
    description: "Ensuring consistent functionality across all browsers.",
    icon: <MdPublic />
  },
  {
    id: 6,
    title: "Team Collaboration",
    description: "Collaborating with teams on hackathons and group projects.",
    icon: <MdGroups2 />
  },
];

export default function Service() {
  return (
    <section id="services" className="p-8">
      <div className="flex flex-col lg:flex-row justify-between px-20 items-start">
        
              <div>
      <h1 className="  text-6xl lg:text-6xl  font-bold tracking-tight max-w-xs">
          WHAT WE CAN DO FOR YOU?
                  </h1>  
                  <p>
                       Full-spectrum web development tailored to elevate your digital presence.
                  </p>
        </div>
       

              

        {/* 3-Column Compact Grid for Cubes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
          {Services.map((service) => (
            <div 
              key={service.id} 
              className="glass aspect-square p-4 rounded-xl flex flex-col items-center justify-center text-center transition-transform duration-300 hover:rotate-[-2deg] hover:scale-105"
            >
              {service.icon && (
                <div className="text-3xl text-cyan-400 mb-2">
                  {service.icon}
                </div>
              )}
              <h3 className="text-sm font-bold text-white mb-1 leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}