
import React from 'react'

const ServiceCard = ({ title, logo, desc }) => {
  return (
    <div className='w-[30%] h-[300px] bg-slate-700 flex flex-col gap-4 px-6 py-12 rounded-md max-md:w-full'>
      <div className='text-4xl text-blue-500'>
        {
          typeof logo === 'string' ? (
            <img src={logo} alt={title} className="w-10 h-10" />
          ) : (
            logo
          )
        }
      </div>
      <h1 className='text-2xl text-white font-bold'>{title}</h1>
      <h1 className='text-lg text-white'>{desc}</h1>
    </div>
  )
}

export default ServiceCard

