import React from 'react'
import ProjectSlider from './projectslider'

export default function Projects() {
    return (
        <section id='project' className='container mx-auto px-4 py-20'>
            <div className='flex-1 flex flex-col items-center gap-5 max-w-5xl mx-auto px-4 text-center'>
                <button className='btn flex items-center gap-2 max-w-32 justify-center'>
                    My Projects
                </button>
                <h1 className='text-3xl font-semibold'>Turning Ideas into <span className='primary'>Reality</span></h1>
                <h2 className='secondary text-lg'>Some of my Projects Achievements</h2>
                <p className='secondary text-sm ternary'>
                    Witness the evolution of innovation as we transform ideas into tangible realities. Explore our project showcase, where creativity, determination, and expertise converge to shape the future. Experience the journey of turning vision into impactful outcomes.
                </p>
            </div>
            <div className='mt-8'>
                <ProjectSlider />
            </div>
        </section>
    )
}
