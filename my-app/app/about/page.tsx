import Link from 'next/link';

export default function AboutMe() {
    return (
        <div className='flex flex-col space-y-5 py-5'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-10 text-center'>
                <h1 className='text-2xl md:text-4xl font-bold'>About Me</h1>
            </div>

            <div className='flex flex-col items-center justify-center w-full flex-1 px-5 '>
                <h1 className='text-md md:text-xl font-semibold text-start'>
                    Hi my name is Evin Rasho, I&apos;m a Software Engineer and Data Science major at the university of Nebraska Lincoln. I&apos;m a
                    full stack developer with experience in React, Node.js, and Python. I&apos;m also a data scientist with experience in machine
                    learning, data analysis, and data visualization. I&apos;m passionate about technology and I&apos;m always looking to learn new
                    things.
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-5 '>
                <h1 className='text-md md:text-xl font-semibold text-start'>
                    I&apos;m currently looking for a full time software engineering or data science position. If you would like to get in touch with
                    me, feel free to reach out to me on LinkedIn or Github.
                </h1>
            </div>
            <div className='px-4 pb-4 pt-0 mt-2 flex justify-center'>
                <Link href='/Resume.pdf' legacyBehavior>
                    <a
                        className='-full rounded-xl bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                        title='Resume Viewer'
                        target='_blank'
                        rel='noopener noreferrer'
                        download>
                        Download and View Resume
                    </a>
                </Link>
            </div>
        </div>
    );
}
