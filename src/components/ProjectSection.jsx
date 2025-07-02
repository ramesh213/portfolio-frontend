import React from 'react';
import Project from './Project';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product listings, cart functionality, and user authentication.",
      technologies: ["React", "Express", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projectUrl: "https://ramesh213.github.io/shop-shoes/" 
    },
    {
      id: 2,
      title: "Food Cafteria",
      description: "A productivity application for managing tasks and projects with drag-and-drop functionality.",
      technologies: ["React", "Django", "PostgreSQL", "Redux", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      reverse: true,
      projectUrl: "https://ramesh213.github.io/ramesh-cafe/"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts using data from a weather API.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Axios", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      sourceCodeUrl: "https://github.com/ramesh213/weather_project",
    }
  ];

  return (
    // 
    <section id="portfolio" className="bg-[url('./assets/images/bg.jpeg')] bg-center bg-cover bg-fixed px-16 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-12">My Projects</h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Project
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            sourceCodeUrl={project.sourceCodeUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;