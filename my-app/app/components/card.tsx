
import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react';


export interface CardProps {
    image: string;
    title: string;
    description: string;
    techStackicons: JSX.Element[]
    linkToProject: string;
}

export default function Card({ image, title, description,techStackicons, linkToProject } : CardProps) {

    return (
        <div className='relative flex flex-col my-6 bg-white shadow-sm overflow-hidden  border-slate-200 border-4 rounded-xl w-full h-full backdrop-blur-lg bg-background/50 hover:scale-105 hover:border-red-600 !hover:font-bold'>
            <div className='h-full w-full flex justify-center overflow-hidden text-white rounded-md'>
                <Image
                    width={1000}
                    height={1000}
                    src={image}
                    alt={title}
                    className=' object-cover h-full w-full'
                />
            </div>
            <div className='p-4'>
                <div className='flex items-center mb-2'>
                    <h6 className='text-slate-100 text-xl font-semibold'>{title}</h6>
                </div>
                <p className='text-slate-100 leading-normal font-light'>{description}</p>
            </div>

            <div className='group my-3 inline-flex flex-wrap justify-center items-center gap-2 '>
                {techStackicons.map((icon) => (
                    icon
                ))}
            </div>

            <div className='px-4 pb-4 pt-0 mt-2 flex flex-1'>
                <Link
                    className='w-full rounded-xl bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    as={linkToProject}
                    href={linkToProject}
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Project
                </Link>
            </div>
        </div>
    );

};
