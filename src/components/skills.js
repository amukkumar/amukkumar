import React from 'react'
import Image from 'next/image'

export default function Skills() {
    return (
        <section id='skills' className='container mx-auto max-w-5xl px-2 py-20'>
            <div className='flex flex-col justify-center items-center text-center gap-5'>
                <button className='btn flex items-center gap-2 max-w-44 justify-center'>
                    Professional Skills
                </button>
                <h1 className='text-3xl font-semibold'>Innovative Solution to <span className='primary'>Enhance</span></h1>
                <h2 className='secondary text-lg'>Experties in using the TechStack</h2>
                <p className='ternary text-sm text-center'>
                    Innovative problem solver with proficiency in diverse technologies and industries. Adept at leading teams, fostering collaboration, and driving results. Expertise includes project management, strategic planning, and adaptability in dynamic environments.
                </p>
                <div className='flex gap-3 md:gap-5 justify-center flex-wrap mt-4'>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/html.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>HTML</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/css.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>CSS</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/javascript.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Javascript</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/typescript.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Typescript</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/nodejs.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Node JS</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/php.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>PHP</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/csharp.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>C#</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/react.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>React JS</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/mui.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>MUI</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/tailwindcss.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Tailwind</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/nextjs.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Next JS</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/mongodb.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Mongo DB</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/firebase.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Firebase</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/mysql.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>My SQL</p>
                    </div>
                    <div className='bg-card rounded-md p-2 flex flex-col justify-between'>
                        <Image alt='github-link' src='/assets/image/icon/photoshop.svg' width='80' height='80' className='p-3' />
                        <p className='ternary text-sm text-center'>Photoshop</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
