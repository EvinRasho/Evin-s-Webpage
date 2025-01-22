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
                <SheetContent side='left' className='opacity-100  border-r-foreground z-[100]'>
                    <SheetTitle>
                        <SheetClose asChild>
                            <Link href='/'>
                                <House
                                    className={` !hover:text-[#38b6ff]  ${pathname === '/' ? '!text-[#38b6ff] !font-bold !stroke-[2px]' : ''}`}
                                    size={35}></House>
                            </Link>
                        </SheetClose>
                    </SheetTitle>
                    <nav className=' flex flex-col justify-between gap-3 mt-6'>
                        <SheetClose asChild>
                            <Link href='/about' className={` hover:text-[#38b6ff] ${pathname === '/about' ? 'text-[#38b6ff] font-bold' : ''}`}>
                                About Me
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href='/projects' className={` hover:text-[#38b6ff] ${pathname === '/projects' ? 'text-[#38b6ff] font-bold' : ''}`}>
                                Projects
                            </Link>
                        </SheetClose>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
