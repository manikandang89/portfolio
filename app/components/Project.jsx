"use client"
import React from 'react'
import Image from "next/image";
import {PROJECTS} from '../constants'
function Project() {
  return (
    <div>
      <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-200'>Projects</h2>
    <div className='flex flex-wrap items-center justify-center gap-2'>
    {PROJECTS.map((project, index) => {
      return (
        <a key={index} href={project.url} targer="_blank">
            <Image src={project.image}
            alt={project.name}
            width={300}
            className='rounded-3xl '/>
        </a>
      )
    }) }
    </div>
    </div>
  )
}

export default Project
