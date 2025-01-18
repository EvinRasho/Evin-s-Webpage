import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger, } from './ui/sheet';
import { House, Menu, } from 'lucide-react';
import { usePathname } from 'next/navigation';



export default function MobileNav() {

    const pathname = usePathname();
    return (
        <div className='md:hidden z-[100] '>
            <Sheet>
                <SheetTrigger className='ml-4'>
                    <Menu size={35}></Menu>
                </SheetTrigger>
                <SheetContent side='left' className='opacity-100 bg-black border-r-foreground z-[100]'>
                    <SheetTitle>
                        <SheetClose asChild>
                        <Link href='/'>
                            <House
                                className={`text-l hover:text-gray-700 ${pathname === '/' ? '!text-red-600 !font-bold !stroke-[2px]' : ''}`}
                                size={35}></House>
                            </Link>
                        </SheetClose>
                    </SheetTitle>
                    <nav className='text-l flex flex-col justify-between gap-3 mt-6'>
                        <SheetClose asChild>
                        <Link href='/about' className={`text-l hover:text-gray-700 ${pathname === '/about' ? 'text-red-600 font-bold' : ''}`}>
                            About Me
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                        <Link href='/projects' className={`text-l hover:text-gray-700 ${pathname === '/projects' ? 'text-red-600 font-bold' : ''}`}>
                            Projects
                            </Link>
                        </SheetClose>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
