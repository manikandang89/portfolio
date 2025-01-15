"use client"
import React from 'react'
import Image from "next/image";
import ProfilePic from "../../public/Manikandan.jpg";
import {PROFILE} from '../constants'
import { FaDownload } from 'react-icons/fa';

function ProfileOverview() {
  return (
    <div className='my-24'>
        <div className='flex flex-col items-center justify-center gap4'>
            <Image src={ProfilePic}
            width={110}
            height={110}
            alt='profile pic'
            className='rounded-full border-2 border-slate-400' />
            <h1 className='text-2xl font-bold'>{PROFILE.name}</h1>
            <p className=' tracking-tighter'>{PROFILE.city}</p>
            <a href="/ManikandanGopal.pdf" target="_blank" rel="noopener noreferrer"
            download
            className='flex items-center gap-x-2 rounded-full bg-grey-300
            px-3 py-2 text-sm front-semibold tracking-tight text-slate-200
            hover:text-teal-800'
            >
                Download Resume
                <FaDownload />
            </a>
            <p className='my-10 text-center text-5xl font-semibold
            tracking-tighter lg:text-[10rem]'>
                {PROFILE.greet}
            </p>
            <p className='mb-10 max-w-2xl p-1 text-center text-xl
            tracking-tight text-slate-400 lg:text-3xl'>
                I am a passinate {" "}
                <span className='border-b front-medium text-slate-200'>Full Stack Developer</span>{" "}
            with a knack for creating seamless, user-friendly web application.specialize in both {" "}
            <span className='font-medium text-slate-200'>front-end</span> and {" "} 
            <span className='font-medium text-slate-200'>back-end</span> {" "} development,
            ensuring a cohensive and efficient user experience from start to finish.
            </p>
        </div>
      
    </div>
  )
}

export default ProfileOverview
