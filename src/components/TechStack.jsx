
import React from "react";

const TechStack = ({ percentage, IconComponent, TechStack }) => {
  return (
    <div className="w-[80%] flex items-center justify-between max-md:w-[90%]">
      {/* Icon + Label */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-8 h-8 flex items-center justify-center text-blue-500">
          {IconComponent}
        </div>

        {/* Label */}
        <div className="font-exo">
          <h4 className="text-sm text-yellow-400">{TechStack}</h4>
        </div>
      </div>

      {/* Percentage */}
      <span className="text-sm font-medium text-yellow-400">{percentage}%</span>
    </div>
  );
};

export default TechStack;

