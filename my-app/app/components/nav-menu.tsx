'use client';

import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import {Github, Linkedin } from 'lucide-react';


export function NavBar() {
    return (
        <header className='sticky top-0 w-full border-b bg-background z-[20]'>
            <div className='h-14 flex items-center justify-between px-4'>
                {/* Desktop */}
                <MainNav />

                {/* Mobile */}
                <MobileNav />

                {/* Desktop & Mobile */}
                <div className='flex items-center space-x-4 ml-auto justify-end'>
                    <Link href='https://www.linkedin.com/in/evin-rasho' aria-label='LinkedIn'>
                        <Linkedin className='hover:text-gray-700' size={45} />
                    </Link>
                    <Link href='https://github.com/EvinRasho' aria-label='GitHub'>
                        <Github className='hover:text-gray-700' size={45} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
