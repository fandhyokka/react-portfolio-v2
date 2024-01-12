import React from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const projects = [
    {
      title: "Binar Car Rent (CMS)",
      description: "This was the team project to complete the Bootcamp challenges. I was involved in displaying all Car Data from the API and I also created a delete car feature using the CRUD feature.",
      technologies: ["React", "Bootstrap", "Redux"],
      imageSrc: `${process.env.PUBLIC_URL}/../Assets/Images/CMS.png`,
      liveLink: "https://kelompok1-platinum-cms.vercel.app/login",
      githubLink: "https://your-live-link.com",
    },
    {
      title: "Binar Car Rent (Customer Page Site)",
      description: "This was the team project to complete the Bootcamp challenges. I was involved in creating Login and Sign Up Components.",
      technologies: ["React", "Bootstrap", "Redux"],
      imageSrc: `${process.env.PUBLIC_URL}/../Assets/Images/CustomerPage.png`,
      githubLink: "https://github.com/yourusername/customer-page",
      liveLink: "https://kelompok1-platinum-customer-page.vercel.app/login",
    },
    {
      title: "Personal Portfolio",
      description: "This is my personal portfolio website. I will be posting all of my projects here.",
      technologies: ["React", "TailwindCSS", "Framer-Motion"],
      imageSrc: `${process.env.PUBLIC_URL}/../Assets/Images/Portfolio.png`,
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-live-link.com",
    },
  ];

  return (
    <section id="projects">
      <div className={`pt-10 ${isAboveLarge ? "mt-10 pt-10" : ""}`}>
        <p className={`mt-10 mb-10 pb-10 font-opensans text-center font-semibold text-4xl`}>
          MY <span className="text-green-800">PROJECTS</span>
        </p>
      </div>
      <div className={`mb-10 flex flex-col md:flex-row ${isAboveLarge ? "gap-4" : "gap-10"}`}>
        {projects.map((project, index) => (
          <motion.div key={index} className={`relative rounded overflow-hidden ${isAboveLarge ? "mb-10" : "md:w-full"}`} whileHover={{ filter: "brightness(75% " }}>
            <div className="relative">
              <img src={project.imageSrc} alt={`Project ${index + 1}`} className="w-full h-auto object-cover" />
              <motion.div className="overlay absolute bg-green-800  inset-0" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="text-white">
                  <h3 className="text-xl font-bold font-opensans mt-2 ms-2 mb-2">{project.title}</h3>
                  <p className="text-sm ms-2 mb-2 me-2 font-opensans">{project.description}</p>
                  <div className="flex items-center ms-2 mb-2">
                    <span className="">Technologies:</span>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-block bg-gray-200 rounded-full py-1 px-2 ms-1 text-xs font-opensans text-gray-700 mr-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center p-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:underline flex items-center mr-4">
                    <FaExternalLinkAlt className="mr-0" />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:underline flex items-center">
                    <FaGithubSquare className="mr-0" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
