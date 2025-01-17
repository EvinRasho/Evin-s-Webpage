'use client';

import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import { Github, Linkedin,Download } from 'lucide-react';



export function NavBar() {
    return (
        <header className='sticky top-0 w-full border-b bg-background z-[20]'>
            <div className='h-14 flex items-center justify-between md:px-4'>
                {/* Desktop */}
                <MainNav />

                {/* Mobile */}
                <MobileNav />

                {/* Desktop & Mobile */}
                <div className='flex items-center space-x-4 ml-auto justify-end px-4'>
                    <Link
                        title='View Resume'
                        as={'/Resume.pdf'}
                        href='/Resume.pdf'
                        aria-label='Resume'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Download className='hover:text-gray-700' size={35} />
                    </Link>
                    <Link
                        as={'https://www.linkedin.com/in/evin-rasho'}
                        href='https://www.linkedin.com/in/evin-rasho'
                        aria-label='LinkedIn'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Linkedin className='hover:text-gray-700' size={35} />
                    </Link>
                    <Link
                        as={'https://www.linkedin.com/in/evin-rasho'}
                        href='https://github.com/EvinRasho'
                        aria-label='GitHub '
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Github className='hover:text-gray-700' size={35} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
