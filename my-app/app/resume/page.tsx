import Link from 'next/link';

export default function Resume() {
    return (
        <div className='flex flex-col space-y-5 py-5'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-10 text-center'>
                <h1 className='text-2xl md:text-4xl font-bold'>Resume</h1>
            </div>
            <Link href='/Resume.pdf' legacyBehavior>
                <a className='w-auto h-full text-blue-500 underline hover:text-red-600' title='Resume Viewer' target='_blank' rel='noopener noreferrer' download>
                    Download and View Resume
                </a>
            </Link>
        </div>
    );
}
