import React from "react";
import { Hobbies, Interest } from "../../src/index";

const Hobby = () => {
  return (
    <div className="flex items-center justify-around max-md:flex-col max-md:gap-4">
     
      <div className="flex flex-col justify-center mt-4 gap-5">
        <h2 className="italic font-exo text-yellow-400">HOBBIES :</h2>
        {Hobbies.map((hobby, index) => (
          <div key={index} className="w-25 h-14 mb-4 max-md:w-60 max-md:h-auto ">
            <img
              src={hobby.src}
              alt={hobby.alt}
              className="w-full h-full object-cover rounded-sm"
            />
            <h2 className="font-semibold text-yellow-400">{hobby.title}</h2>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center mt-4 gap-5">
        <h2 className="italic font-exo text-yellow-400 ">INTERESTS :</h2>
        {Interest.map((interest, index) => (
          <div key={index} className="w-25 h-14 mb-4 max-md:w-60 max-md:h-auto">
            <img
              src={interest.src}
              alt={interest.alt}
              className="w-full h-full object-cover rounded-sm"
            />
            <h2 className="font-semibold text-yellow-400">{interest.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
