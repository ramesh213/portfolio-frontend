import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode, FaServer, FaSketch } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import manualImg from "../assets/images/manual.png"
import automationImg from "../assets/images/automation.png";



const Services = () => {
  return (
    <section id="services" className=" min-h-screen py-20 mt-18 bg-[#F28B82] max-md:">
      <h2 className="text-4xl font-bold text-center mb-20 ">
        Things <span className="text-purple-600">I Do</span>
      </h2>


      <div className="flex items-center justify-around mx-6 max-md:flex-col max-md:gap-4">
      <ServiceCard 
      title='Manual Testing' 
      logo={manualImg}
      desc="I perform hands-on testing to identify bugs, verify functionality, and ensure a smooth user experience — all from a real user’s perspective."/>
      <ServiceCard 
      title='Automation Testing' 
      logo={automationImg} 
      desc= "I automate repetitive test cases using tools like Selenium to speed up testing, improve accuracy, and ensure consistent quality across builds and environments."/>
      <ServiceCard 
      title='API Testing' 
      logo = {<SiPostman/>} 
      desc= "I validate APIs by checking responses, status codes, and data integrity using tools like Postman — ensuring seamless communication between services."/>
      </div>

    </section>
  );
};

export default Services;
