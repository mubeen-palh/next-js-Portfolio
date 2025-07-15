"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "EvenEase Mobile Application",
    description: " Developed a React Native app with dynamic data, event filters, favorites (Async Storage), and seamless navigation (Stack/Tab).",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/EventEase-Mobile-Application",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Website Vulnerability Analysis Using AI",
    description: " Designed and implemented an AI-powered static code analysis tool using CodeBERT and Transformers that detects and prioritizes security vulnerabilities",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/aziz87374/Website-Vulnerability-Analysis-Using-AI",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Task Scheduler",
    description: "Built a MERN-based task scheduler with modular REST APIs, task filtering (priority, state, due date), and real-time workload insights via calendar/timeline views.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubeen-palh/Task-Management-Application ",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "StudentSphere - Management System",
    description: "A Flutter-based mobile application designed for a university database project",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/Flutter-Student-Management-System-",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Sports Mobile App",
    description: " Developed Sports mobile app in React Native that displays real-time cricket and football",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/Sports-Mobile-App",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Geometric Algorithm Implementation",
    description: "This Flutter project provides visualizations for two popular geometric algorithms: Graham's Scan and Quick Hull.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/Geometric-Algorithms-Implementation-" ,
    previewUrl: "/",
  },

  {
    id: 7,
    title: "Taxi App UI Using Flask",
    description: "This is a Taxi Booking Mobile App that is designed to connect many passengers with the drivers in real time.",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/Taxi-App-Using-Flask" ,
    previewUrl: "/",
  },

  {
    id: 8,
    title: "SpringBoot Books API Project",
    description: "An API written in Java Sprint Boot that provides recommendations for books based on the user's reading history.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubeen-palh/Spring-Boot-Books-API-Project" ,
    previewUrl: "/",
  },

  {
    id: 9,
    title: "Smart Appointment System",
    description: " Developed a .NET Web API for managing appointment bookings, including scheduling, retrieval, and updates for doctors and patients, and integrated authentication for secure access control.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubeen-palh/Smart-Appointment-System" ,
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Real Estate Website",
    description: "Real Estate Website UI created using Html, CSS, Javascript.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubeen-palh/Real_Estate_Website" ,
    previewUrl: "/",
  },

  {
    id: 11,
    title: "Society Management System",
    description: "Management system created using C++",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubeen-palh/Society-Management-System" ,
    previewUrl: "/",
  },

  {
    id: 12,
    title: "Google Sheet Data Reader",
    description: "Google Sheet Data Reader Created using Flutter",
    image: "/images/projects/12.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubeen-palh/Data_reading_from_google_sheet" ,
    previewUrl: "/",
  },

  {
    id: 13,
    title: "Leaf Disease Classification",
    description: "Developed a Leaf Disease Classification System using Convolutional Neural Networks",
    image: "/images/projects/13.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/Fahd011/AI-project" ,
    previewUrl: "/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
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
    </section>
  );
};

export default ProjectsSection;
