
import React, { useState } from "react";
import heroImage from "../assets/images/hero-image.png";
import AboutButton from "./AboutButton";
import Education from "./Education";
import Skill from "./Skill";
import Hobby from "./Hobby";

const About = () => {
  const [selectedComponent, setSelectedComponent] = useState('Education');

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Education':
        return <Education />;
      case 'Skill':
        return <Skill />;
      case 'Hobby':
        return <Hobby />;
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="bg-[url('./assets/images/bg.jpeg')] bg-center bg-cover bg-fixed flex justify-between items-center px-20 py-20 max-md:flex-col-reverse max-md:px-4 max-md:py-10"
    >
      {/* Left side of section */}
      <div className="w-1/2 max-md:w-full">
        <img
          src={heroImage}
          alt="Ramesh"
          className="w-[58vh] h-[74vh] rounded-full shadow-2xl max-md:mx-auto max-md:w-[50vh] max-md:h-[60vh]"
        />
      </div>

      {/* Right side of section */}
      <div className="text-white w-1/2 max-md:w-full max-sm:text-center">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="pl-4 text-blue-500">Me</span>
        </h2>
        <h3 className="text-2xl mb-2">A passionate QA Engineer</h3>

        {/* Button Group */}
        <div className="flex bg-gray-700 mb-1 justify-around">
          <AboutButton
            label="EDUCATION"
            onClick={() => handleButtonClick('Education')}
            isActive={selectedComponent === 'Education'}
          />
          <AboutButton
            label="SKILLS"
            onClick={() => handleButtonClick('Skill')}
            isActive={selectedComponent === 'Skill'}
          />
          <AboutButton
            label="HOBBIES"
            onClick={() => handleButtonClick('Hobby')}
            isActive={selectedComponent === 'Hobby'}
          />
        </div>

        {/* Render selected component */}
        <div className="min-h-[350px] max-md:h-auto  mb-8 max-md:pb-6">
          {renderComponent()}
        </div>

        {/* Call to action button */}
        <a href="#contact"
          className="btn bg-purple-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-purple-700"
        >
          Wanna be in touch..?
        </a>
      </div>
    </section>
  );
};

export default About;
