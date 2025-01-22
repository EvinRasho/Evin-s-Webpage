'use client';
import Link from 'next/link';
import { House } from "lucide-react";
import { usePathname } from 'next/navigation';


export default function MainNav() {
    const pathname = usePathname();
  return (
      <div className='hidden md:flex justify-center items-center bg-background'>
          <Link href='/'>
              <House
                  className={`text-xl hover:text-[#38b6ff] ${pathname === '/' ? '!text-[#38b6ff] !font-bold !stroke-[2px]' : ''}`}
                  size={35}></House>
          </Link>
          <nav className='flex justify-between items-center gap-6 ml-8'>
              <Link href='/about' className={` font-bold hover:text-[#38b6ff] ${pathname === '/about' ? 'text-[#38b6ff]' : ''}`}>
                  About Me
              </Link>
              <Link href='/projects' className={`font-bold hover:text-[#38b6ff] ${pathname === '/projects' ? 'text-[#38b6ff]' : ''}`}>
                  Projects
              </Link>
          </nav>
      </div>
  );
}
