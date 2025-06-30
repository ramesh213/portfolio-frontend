import React from "react";
import { FaDatabase, FaGithub, FaBug } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import manualImg from "../assets/images/manual.png"
import automationImg from "../assets/images/automation.png";
import testcaseImg from "../assets/images/testcase.png";
import regressionImg from "../assets/images/regression.png"


import TechStack from "./TechStack";

const Skill = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center pt-8">
        <h1 className="text-xl font-exo font-semibold max-md:text-lg text-yellow-400">
          I am skilled in following tech stacks:{" "}
        </h1>
        <h1 className="hidden"> hello</h1>
      </div>
      <div className="flex items-center ml-10 mt-8 max-md:flex-col">
        <div className=" w-1/2 flex  justify-around  text-3xl text-yellow-400 flex-col gap-6 max-md:w-full max-md:gap-2">
              <TechStack
                IconComponent={<img src={manualImg} alt="manual" className="w-8 h-8" />}
                TechStack="Manual Testing"
                percentage={90}
              />           <TechStack
                IconComponent={<img src={automationImg} alt="automation" className="w-12 h-8" />}
                TechStack="Automation (Java)"
                percentage={85}
              />           <TechStack
                IconComponent={<img src={testcaseImg} alt="TestCase" className="w-8 h-8" />}
                TechStack="Test Case Design"
                percentage={90}
              />         
              <TechStack IconComponent={<FaBug />} TechStack="Bug Reporting (Jira)" percentage={85} />
        </div>
        <div className=" w-1/2 flex  justify-around text-3xl text-yellow-400 flex-col gap-6 max-md:w-full max-md:gap-2">
          <TechStack
                IconComponent={<img src={regressionImg} alt="Regression Testing" className="w-8 h-8" />}
                TechStack="Regression Testing"
                percentage={80}
              />
          <TechStack IconComponent={<SiPostman />} TechStack="API Testing" percentage={75} />
          <TechStack IconComponent={<FaDatabase />} TechStack="SQL for DB Validation" percentage={70} />
          <TechStack IconComponent={<FaGithub />} TechStack="Git/Github" percentage={80} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
