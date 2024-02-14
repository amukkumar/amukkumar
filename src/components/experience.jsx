import React from 'react'
import react from '@/assets/image/icon/react.svg'
import Image from 'next/image'

const Experience = () => {
    return (
        <div className='relative'>
            <div className='experience flex flex-col gap-2'>
                <div className='flex md:flex-row flex-col gap-3 md:justify-end md:items-start items-center mt-5'>
                    <p className='mt-7 hidden md:block plain text-xl'>20-0ct-2022</p>
                    <Image alt="photo" src={react} className='h-20 w-20 rounded-full ex-border p-2 bg-white '></Image>
                    <div className='shadow left-card p-5 rounded-lg'>
                        <h3 className='text-3xl plain'>Full Stack</h3>
                        <ul className='px-4 text-md mt-2'>
                            <li className='list-disc'>
                                Developing and maintaining web applications using React.js and other related technologies.
                            </li>
                            <li className='list-disc'>
                                Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
                            </li>
                            <li className='list-disc'>
                                Implementing responsive design and ensuring cross-browser compatibility.
                                Participating in code reviews and providing constructive feedback to other developers.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='flex gap-3 md:justify-end md:flex-row-reverse flex-col md:justify-end md:items-start items-center mt-5'>
                    <p className='mt-7 hidden md:block plain text-xl'>20-0ct-2022</p>
                    <Image alt="photo" src={react} className='h-20 w-20 rounded-full ex-border p-2 bg-white '></Image>
                    <div className='shadow left-card p-5 rounded-lg'>
                        <h3 className='text-3xl plain'>Full Stack</h3>
                        <ul className='px-4 text-md mt-2'>
                            <li className='list-disc'>
                                Developing and maintaining web applications using React.js and other related technologies.
                            </li>
                            <li className='list-disc'>
                                Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
                            </li>
                            <li className='list-disc'>
                                Implementing responsive design and ensuring cross-browser compatibility.
                                Participating in code reviews and providing constructive feedback to other developers.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience