import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='container max-w-screen-2xl mx-auto bg-card p-4'>
            <div className='container'>
                <div className='px-2'>
                    <Image alt='brand-logo' src='/assets/logo/logo.png' width="60" height="0" />
                </div>
            </div>
        </nav>
    )
}
