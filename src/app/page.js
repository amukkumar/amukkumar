"use client"

import logo from '@/assets/image/icon/logo.png'
import effect from '@/assets/audio/video.gif'
import Image from 'next/image';
import Link from 'next/link';
import bgleft from '@/assets/image/bgdesign/right-pattern.svg'
import profile from '@/assets/image/image/me.png'
import html from '@/assets/image/icon/html.svg'
import css from '@/assets/image/icon/css.svg'
import javascript from '@/assets/image/icon/javascript.svg'
import typescript from '@/assets/image/icon/typescript.svg'
import nodejs from '@/assets/image/icon/nodejs.svg'
import php from '@/assets/image/icon/php.svg'
import csharp from '@/assets/image/icon/csharp.svg'
import react from '@/assets/image/icon/react.svg'
import mui from '@/assets/image/icon/mui.svg'
import tailwindcss from '@/assets/image/icon/tailwindcss.svg'
import nextjs from '@/assets/image/icon/nextjs.svg'
import mongodb from '@/assets/image/icon/mongodb.svg'
import mysql from '@/assets/image/icon/mysql.svg'
import firebase from '@/assets/image/icon/firebase.svg'
import Project from '@/components/project';
import Experience from '@/components/experience';
import AudioPlayer from '@/components/audioplayer';

export default function Home() {

  const leftArrow = (
    <span className='ethnocentric'>&lt;</span>
  );

  const rightArrow = (
    <span className='ethnocentric'>/&gt;</span>
  );

  return (
    <>
      <main className='hero-bg'>
        <nav className="px-4 md:py-4 py-2">
          <div className='container max-w-5xl mx-auto flex gap-5 justify-between items-center'>
            <Image src={logo} height="40" width="auto" />
            <div className='shadow rounded-full px-10 px-16 py-3 md:block hidden text-bg-color text-xl bg-white plain'>
              <ul className='flex gap-10'>
                <Link href='/'><li className='navlinks active'>{leftArrow}Home{rightArrow}</li></Link>
                <Link href='#about'><li className='navlinks'>{leftArrow}Project{rightArrow}</li></Link>
                <Link href='#contact'><li className='navlinks'>{leftArrow}Contact{rightArrow}</li></Link>
              </ul>
            </div>
            <button className='bg-color alaska text-white rounded-full px-10 py-3 text-xl'>Hire&nbsp;Me</button>
          </div>
        </nav>

        <div className='container max-w-5xl md:mt-10 mt-0 px-3 mx-auto flex justify-between items-center md:flex-row flex-col-reverse'>
          <div className='md:text-left text-center md:mt-0 mt-5'>
            <p className='text-bg-color plain text-xl'><u>FULL STACK DEVELOPER</u></p>
            <h1 className='alaska text-5xl mt-2'>Hello!</h1>
            <h1 className='alaska text-5xl'>I'm Amuk Kumar.</h1>
          </div>
          <div className='relative'>
            <Image src={effect} className='mix-blend-multiply' width="400"></Image>
            <Image src={profile} className='ab-center w-3/5'></Image>
            <AudioPlayer />
          </div>
        </div>
        <div className='container max-w-5xl mx-auto px-3 md:text-left text-center mt-16 md:mt-0'>
          <p className='text-bg-color plain text-xl'><u>SKILL</u></p>
          <h1 className='alaska text-5xl mt-2'>My Skills</h1>
          <p className='text-bg-color plain text-2xl md:max-w-md mt-2 :w-100'>I like to take responsibility to craft aesthetic user experience using modern frontend architecture.</p>
          <p className='text-bg-color plain text-xl my-5'><u>Languages & Tools</u></p>
          <div className='flex flex-wrap justify-center md:justify-start gap-10'>
            <Image src={html} height={70} />
            <Image src={css} height={70} />
            <Image src={javascript} height={70} />
            <Image src={typescript} height={70} />
            <Image src={nodejs} height={70} />
            <Image src={php} height={70} />
            <Image src={csharp} height={70} />
          </div>
          <div className='flex md:gap-20 gap-0 md:flex-row flex-col pb-10'>
            <div>
              <p className='text-bg-color plain text-xl my-5'><u>Libraries & Frameworks</u></p>
              <div className='flex flex-wrap gap-10 justify-center md:justify-start'>
                <Image src={react} height={70} />
                <Image src={mui} height={60} />
                <Image src={tailwindcss} height={60} />
                <Image src={nextjs} height={70} />
              </div>
            </div>
            <div>
              <p className='text-bg-color plain text-xl my-5'><u>Database</u></p>
              <div className='flex flex-wrap gap-10 justify-center md:justify-start'>
                <Image src={mongodb} height={70} />
                <Image src={firebase} height={70} />
                <Image src={mysql} height={70} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className='bg-indigo-50 relative'>
          <Image src={bgleft} className='absolute top-40 right-0 opacity-50 w-52' />
          <div className='container max-w-5xl mx-auto px-3 py-20 text-5xl plain text-center'>
            <h1 className='leading-tight'>I'm a passionate Engineer who's focused on building scalable and performant apps.
              I take responsibility to craft a good user experience using modern frontend architecture.</h1>
          </div>

        </div>
      </section>

      <section>
        <div className='container max-w-5xl mx-auto px-3 pt-10'>
          <p className='text-bg-color plain text-xl'><u>Projects</u></p>
          <h1 className='alaska text-5xl mt-2'>My Projects</h1>
          <p className='text-bg-color plain text-2xl max-w-md mt-2'>Some things I've built with love, expertise and a pinch of magical ingredients.</p>
        </div>
        <div className='container max-w-7xl mx-auto px-3 py-5'>
          <Project />
        </div>
      </section>

      <section>
        <div className='container max-w-5xl mx-auto px-3 pt-10'>
          <p className='text-bg-color plain text-xl'><u>Projects</u></p>
          <h1 className='alaska text-5xl mt-2'>My Projects</h1>
          <p className='text-bg-color plain text-2xl max-w-md mt-2'>Some things I've built with love, expertise and a pinch of magical ingredients.</p>
        </div>
        <div className='container max-w-5xl mx-auto px-3 py-5'>
          <Experience />
        </div>
      </section>
    </>
  );
}
