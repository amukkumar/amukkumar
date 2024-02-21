import React from 'react'
import Link from 'next/link';

export default function Hero() {
    return (
        <section id='hero' className='container mx-auto max-w-4xl p-4 pb-20'>
            <div className='flex md:flex-row flex-col items-center'>
                <div className='flex-1'>
                    <img alt='main-image' src='/assets/image/hero/me.png' />
                </div>
                <div className='flex-1 flex flex-col gap-5 mt-10 justify-end'>
                    <h1 className='text-3xl font-semibold'>Hello, I&apos;m&nbsp;<span className='primary'>Amuk&nbsp;Kumar</span></h1>
                    <h2 className='secondary text-lg'>Full Stack Developer</h2>
                    <p className='secondary text-sm'>Get top-notch full-stack development services tailored to your needs. Lets bring your ideas to life, hassle-free.</p>

                    <div className='flex flex-col gap-1'>
                        <div className='w-100 flex'>
                            <h3 className='ternary'>AGE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            <h3 className='secondary'><span className='ternary'>: </span>25 Years</h3>
                        </div>
                        <hr className='bg-ternary'></hr>
                        <div className='w-100 flex'>
                            <h3 className='ternary'>ADDRESS &nbsp;</h3>
                            <h3 className='secondary'><span className='ternary'>: </span>Indrapuri, Sector-B, Bhopal-462022</h3>
                        </div>
                        <hr className='ternary'></hr>
                        <div className='w-100 flex'>
                            <h3 className='ternary'>PHONE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            <h3 className='secondary'><span className='ternary'>: </span><Link href='tel:+918877347754'>+91 88773 47754</Link></h3>
                        </div>
                        <hr className='ternary'></hr>
                        <div className='w-100 flex'>
                            <h3 className='ternary'>EMAIL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            <h3 className='secondary'><span className='ternary'>: </span><Link href='mailto:contact@amukkumar.com'>contact@amukkumar.com</Link></h3>
                        </div>
                        <hr className='ternary'></hr>
                    </div>

                    <div className='flex gap-5'>
                        <div className='bg-card rounded-md'>
                            <Link href='https://www.linkedin.com/in/amukkumar'><img alt='linkedin-link' src='/assets/image/icon/linkedin-fill.svg' className='p-2 w-10' /></Link>
                        </div>
                        <div className='bg-card rounded-md'>
                            <Link href='https://www.facebook.com/amukkumarpage'><img alt='facebook-link' src='/assets/image/icon/facebook-fill.svg' className='p-2 w-10' /></Link>
                        </div>
                        <div className='bg-card rounded-md'>
                            <Link href='https://instagram.com/amukkumarsah'><img alt='instagram-link' src='/assets/image/icon/instagram-line.svg' className='p-2 w-10' /></Link>
                        </div>
                        <div className='bg-card rounded-md'>
                            <Link href='https://twitter.com/amukkumarsah'><img alt='twitter-link' src='/assets/image/icon/twitter-x-line.svg' className='p-2 w-10' /></Link>
                        </div>
                        <div className='bg-card rounded-md'>
                            <Link href='https://www.youtube.com/amukkumar'><img alt='youtube-link' src='/assets/image/icon/youtube-line.svg' className='p-2 w-10' /></Link>
                        </div>
                        <div className='bg-card rounded-md'>
                            <Link href='https://github.com/amukkumar'><img alt='github-link' src='/assets/image/icon/github-fill.svg' className='p-2 w-10' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
