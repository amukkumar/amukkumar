import React from 'react'
import Link from 'next/link';

export default function History() {
    return (
        <section id='history' className='container mx-auto max-w-5xl px-2 py-20'>
            <div className='flex md:flex-row flex-col md:gap-4 gap-16'>
                <div className='flex-1 flex flex-col gap-5 px-2'>
                    <button className='btn flex items-center gap-2 max-w-32 justify-center'>
                        My History
                    </button>
                    <h1 className='text-3xl font-semibold'>Say&nbsp;Hello&nbsp;Brother, I&apos;m Developer & <span className='primary'>Designer.</span></h1>
                    <h2 className='secondary text-lg'>Full Stack Developer</h2>
                    <p className='secondary text-sm'>
                        Hey there, brother! With a blend of development prowess and design finesse, I&apos;m here to craft digital wonders that captivate and inspire. Let&apos;s collaborate and turn your vision into reality!
                    </p>
                    <div className='flex items-center gap-3 mt-8'>
                        <div className='max-w-36'>
                            <img alt='sign' src='/assets/image/icon/sign.png' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-xl'>Amuk Kumar</h3>
                            <p className='ternary text-sm'>DEVELOPER & DESIGNER</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <div className='flex items-center gap-2 m-2'>
                        <h1 className='font-outline primary text-7xl'>01</h1>
                        <div className='p-1'>
                            QUALITY OF WORK
                            <p className='text-sm ternary'>Consistently producing work of exceptional quality, meeting or exceeding standards and expectations.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 m-2'>
                        <h1 className='font-outline primary text-7xl'>02</h1>
                        <div className='p-1'>
                            INTEGRITY OF VALUE
                            <p className='text-sm ternary'>Integrity of value underscores the unwavering commitment to upholding ethical standards and principles in every endeavor.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 m-2'>
                        <h1 className='font-outline primary text-7xl'>03</h1>
                        <div className='p-1'>
                            VALUE OF RESULT
                            <p className='text-sm ternary'>Dedicated to delivering impactful results that reflect the highest value standards.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 m-2'>
                        <h1 className='font-outline primary text-7xl'>04</h1>
                        <div className='p-1'>
                            CLIENT EXPERIENCE
                            <p className='text-sm ternary'>Prioritizing exceptional client experiences through attentive service, clear communication, and exceeding expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
