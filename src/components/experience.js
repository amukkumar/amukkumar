import React from 'react'

export default function Experience() {
    return (
        <section id='experience' className='container mx-auto max-w-5xl px-4 py-20'>
            <div className='flex md:flex-row flex-col md:gap-4 gap-14'>
                <div className='flex-1 flex flex-col gap-5'>
                    <button className='btn flex items-center gap-2 max-w-28 justify-center'>
                        Experience
                    </button>
                    <h1 className='text-3xl font-semibold'>My Experience in <span className='primary'>Work</span></h1>
                    <h2 className='secondary text-lg'>Versatile Expertise, Exceptional Results</h2>
                    <p className='secondary text-sm ternary'>
                        With a robust background spanning diverse industries and technologies, my experience embodies versatility and adaptability. From spearheading innovative projects to fostering collaborative environments, I excel in driving results and exceeding expectations. Embracing challenges as opportunities for growth, I bring a wealth of expertise to every endeavor, ensuring success and advancement at every turn.
                    </p>
                </div>
                <div className='flex-1 grid grid-cols-2 gap-3 md:gap-5'>
                    <div className='text-center bg-card py-5 rounded-lg'>
                        <h1 className='text-5xl font-bold'>18+</h1>
                        <p className='ternary text-sm'>Project Done</p>
                    </div>
                    <div className='text-center bg-card py-5 rounded-lg'>
                        <h1 className='text-5xl font-bold'>30+</h1>
                        <p className='ternary text-sm'>Happy Customer</p>
                    </div>
                    <div className='text-center bg-card py-5 rounded-lg'>
                        <h1 className='text-5xl font-bold'>20K+</h1>
                        <p className='ternary text-sm'>End Users</p>
                    </div>
                    <div className='text-center bg-card py-5 rounded-lg'>
                        <h1 className='text-5xl font-bold'>4.6</h1>
                        <p className='ternary text-sm'>Overall Ration</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
