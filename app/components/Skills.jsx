import React from 'react';
import {SKILLS} from '../constants'

function SkillsPage() {
    const skilldata = [1,2,3,4,5]
  return (
    <div className='mt-20'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='my-12 text-center text-2xl font-semibold
            uppercase tracking-wide text-slate-200'>Skills</h2>
            <ul>
                {SKILLS?.map((data, index)=> {
                    return (
                        <li key={index} className='m-10 border-b border-slate-400 py-2 text-2xl
                        tracking-tighter lg:py-6 lg:text-3xl'>{data}</li>
                    )
                    
                })}
            </ul>
        </div>
      
    </div>
  )
}

export default SkillsPage;
