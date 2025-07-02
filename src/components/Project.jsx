import React from 'react';

const Project = ({ imageUrl, title, description, technologies, reverse, sourceCodeUrl, projectUrl }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}  mb-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {/* Image Side */}
      <div className="md:w-1/2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Side */}
      <div className="md:w-1/2 p-6 bg-gray-900">
        <h3 className="text-2xl font-bold text-gray-400 ">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* <div className="flex space-x-3 mt-6">
         
          <a 
            href={sourceCodeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-gray-50 hover:text-black transition-colors"
          >
            Live Demo
          </a>
           <a 
            href={sourceCodeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-gray-50 hover:text-black transition-colors"
          >
            Source Code
          </a>
        </div> */}
         <div className="flex space-x-3 mt-6">
            { projectUrl ? (
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-gray-50 hover:text-black transition-colors"
              >
                Live Demo
              </a>
            ) : sourceCodeUrl ? (
              <a 
                href={sourceCodeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-gray-50 hover:text-black transition-colors"
              >
                Source Code
              </a>
            ): null }
          </div>

      </div>
    </div>
  );
};

export default Project;