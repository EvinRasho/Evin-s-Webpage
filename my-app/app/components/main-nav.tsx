import Link from 'next/link';
import { House } from "lucide-react";

export default function MainNav() {
  return (
      <div className='hidden md:flex justify-center items-center'>
          <Link href='/'>
              <House className='ml-4' size={35}></House>
          </Link>
          <nav className='flex justify-between items-center gap-3 ml-8'>
              <Link className='active:text-red-600 text-2xl' href='/about'>
                  About
              </Link>
              <Link className='active:text-red-600 text-2xl' href='/projects'>
                  Projects
              </Link>
              <Link className='active:text-red-600 text-2xl' href='/contact'>
                  Resume
              </Link>
          </nav>
      </div>
  );
}
