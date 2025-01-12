'use client';


import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import {Github, Linkedin } from 'lucide-react';


export function NavBar() {
    return (
        <header className='sticky top-0 w-full border-b '>
            <div className='h-14 container flex items-center'>
                {/* Desktop */}
                <MainNav />

                {/* Mobile */}
                <MobileNav />

                {/* Desktop & Mobile */}
                <div className='flex items-center justify-end flex-1 p-4 '>
                    <Link href='https://www.linkedin.com/in/evin-rasho'>
                        <Linkedin />
                    </Link>
                    <Link href='https://github.com/EvinRasho'>
                        <Github />
                    </Link>
                <div/>
            </div>
        </header>
    );
}
