import React from 'react';
import Image from "next/image";
import {EXPERIENCES} from '../constants';



const WorkExperience = () => {
  return (
    <>
    <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200'>Experience</h2>
    <div>
        {EXPERIENCES.map((experience, index) => {
            return (
                <div key={index} className='flex flex-wrap items-center p-4 lg:mb-20
            lg:justify-center'>
                <div className='mx-4'>
                    <Image 
                    src={experience.img}
                    alt={experience.company}
                    width={80}
                    height={80}
                    className="mb-2 mr-2 rounded-full border border-slate-300"
                 />
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                <p className='mb-2 text-sm'>{experience.year}</p>
                <h6 className='font-semibold'>{experience.role}</h6>
                <span className='my-4'>{experience.company}</span>
                </div>
            </div>
            )
            
        })}
    </div>
      
    </>
  )
}

export default WorkExperience
