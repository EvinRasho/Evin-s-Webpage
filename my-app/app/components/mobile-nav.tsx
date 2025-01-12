import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { House, Menu, } from 'lucide-react';



export default function MobileNav() {
    return (
        <div className='md:hidden '>
            <Sheet>
                <SheetTrigger className='ml-4'>
                    <Menu></Menu>
                </SheetTrigger>
                <SheetContent side='left' className='opacity-100 bg-black border-r-foreground'>
                    <SheetTitle>
                        <Link href='/'>
                            <House size={35}></House>
                        </Link>
                    </SheetTitle>
                    <nav className='text-2xl flex flex-col justify-between gap-3 mt-6 '>
                        <Link className='active:text-red-600' href='/about'>
                            About
                        </Link>
                        <Link className='active:text-red-600' href='/projects'>
                            Projects
                        </Link>
                        <Link className='active:text-red-600' href='/contact'>
                            Resume
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
