import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='w-100 bg-card sticky top-0'>
            <div className='container mx-auto max-w-5xl px-4 flex justify-between'>
                <div className='p-2'>
                    <Image alt='brand-logo' src='/assets/image/icon/logo.png' width="60" height="0" />
                </div>
                <div className="flex gap-20 items-center text-sm">
                    <ul className='md:flex gap-10 hidden'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='blog'>Blog</Link>
                        </li>
                        <li>
                            <Link href='projects'>Projects</Link>
                        </li>
                        <li>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                    <button className='btn flex items-center gap-2'>
                        <span className="material-symbols-outlined text-xl">mark_email_unread</span>
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    )
}
