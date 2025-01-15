'use client';
import Link from 'next/link';
import { House } from "lucide-react";
import { usePathname } from 'next/navigation';


export default function MainNav() {
    const pathname = usePathname();
    console.log(pathname);
  return (
      <div className='hidden md:flex justify-center items-center bg-background'>
          <Link href='/' >
              <House className={`text-2xl hover:text-gray-700 ${pathname === '/' ? '!text-red-600 !font-bold !stroke-[3px]' : ''}`} size={45}></House>
          </Link>
          <nav className='flex justify-between items-center gap-6 ml-8'>
              <Link href='/about' className={`text-2xl hover:text-gray-700 ${pathname === '/about' ? 'text-red-600 font-bold' : ''}`}>
                  About Me
              </Link>
              <Link href='/projects' className={`text-2xl hover:text-gray-700 ${pathname === '/projects' ? 'text-red-600 font-bold' : ''}`}>
                  Projects
              </Link>
              <Link href='/resume' className={`text-2xl hover:text-gray-700 ${pathname === '/resume' ? 'text-red-600 font-bold' : ''}`}>
                  Resume
              </Link>
          </nav>
      </div>
  );
}
