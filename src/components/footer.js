import React from 'react'
import Link from 'next/link';

export default function Footer() {
    return (
        <section id='contact' className='w-100 bg-card'>
            <footer className='container mx-auto max-w-5xl p-4'>
                <div className='flex flex-col md:flex-row gap-3 justify-between items-center'>
                    <p className='ternary text-sm'><Link href='/term-condition'><span>Term & Condition</span></Link> | <span><Link href='privacy-policy'>Privacy Policy</Link></span></p>
                    <p className='ternary text-sm'>AMUK KUMAR <span className='primary'>&copy;</span> 2024 ALL RIGHTS RESERVED</p>
                </div>
            </footer>
        </section>
    )
}
