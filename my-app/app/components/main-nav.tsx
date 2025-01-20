'use client';
import Link from 'next/link';
import { House } from "lucide-react";
import { usePathname } from 'next/navigation';


export default function MainNav() {
    const pathname = usePathname();
  return (
      <div className='hidden md:flex justify-center items-center bg-background'>
          <Link href='/'>
              <House className={`text-xl hover:text-red-500 ${pathname === '/' ? '!text-red-600 !font-bold !stroke-[2px]' : ''}`} size={35}></House>
          </Link>
          <nav className='flex justify-between items-center gap-6 ml-8'>
              <Link href='/about' className={` font-bold hover:text-red-500 ${pathname === '/about' ? 'text-red-600' : ''}`}>
                  About Me
              </Link>
              <Link href='/projects' className={`font-bold hover:text-red-500 ${pathname === '/projects' ? 'text-red-600' : ''}`}>
                  Projects
              </Link>
              {/* <Link href='/resume' className={`text-l hover:text-gray-700 ${pathname === '/resume' ? 'text-red-600 font-bold' : ''}`}>
                  Resume
              </Link> */}
          </nav>
      </div>
  );
}
