
import React from 'react';
import PuLogo from '../assets/images/pu-logo.png';

const Education = () => {
  return (
    <>
      {/* Flex container for logo and university name */}
      <div className='flex items-center justify-start gap-2  mx-4 max-md:ml-1 max-md:flex-col'>
        {/* University logo */}
        <div className='mt-8 max-md:mt-4'>
          <img src={PuLogo} alt="education-logo" className='w-10 h-10' />
        </div>
        {/* University name */}
        <div>
          <h1 className='font-bold text-lg mt-8 max-md:mt-0'>
            Purbanchal University School of Science & Technology
          </h1>
        </div>
      </div>

      {/* University location */}
      <p className='font-exo ml-16 max-md:ml-4 '>
        Biratnagar, Nepal
      </p>

      {/* Programme details */}
      <div className='ml-16 mt-10 flex gap-3 font-exo text-xl max-md:ml-4 max-md:flex-col'>
        <h1>Programme:</h1>
        <h1 className='text-yellow-400'>Bachelor of Computer Application (BCA)</h1>
      </div>

      {/* GPA and Passed Year */}
      <div className='ml-16 mt-8 font-exo max-md:ml-2'>
        <h1 className='text-lg'>GPA- <span className='text-yellow-400'>3.2</span></h1>
        <h1 className='text-lg'>Graduation Year- <span className='text-yellow-400'>2024</span></h1>
      </div>
    </>
  );
};

export default Education;
