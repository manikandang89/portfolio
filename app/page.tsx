'use client'
import Image from "next/image";
import Head from 'next/head';
import React, { useState } from "react";
import styles from './styles/Home.module.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Project";
import SkillsPage from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Manikandan Gopal| Front-End Developer</title>
        <meta name="description" content="Portfolio website of a front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1>Manikandan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                 onClick={()=>{setDarkMode(!darkMode)}}
                 className="cursor-pointer text-2xl"
                 />
              </li>
              <li>
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main> */}

      <main>
        <ProfileOverview />
        <Projects />
        <SkillsPage />
        <WorkExperience />
      </main>

      
    </div>
  );
}
