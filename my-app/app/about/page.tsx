"use client";

import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className='flex flex-col space-y-5'>
            {/* <Image src='/about-page.jpg' alt='Evin Rasho' width={1800} height={200} className='h-32 w-auto object-cover'></Image> */}
            <div className={`flex flex-col items-center justify-center w-full h-full flex-1 px-0 grayscale text-center bg-[url('/about-page.jpg')]`}>
                <h1 className='text-2xl md:text-4xl h-full font-bold py-10'>About Me</h1>
            </div>

            <div className=' flex w-full flex-col justify-evenly gap-10 p-10 lg:flex-row '>
                <div className='block justify-between text-lg leading-6 space-y-4'>
                    <div>
                        Hi, my name is Evin Rasho. I &apos;m a Software Engineer and a Data Science major at the University of Nebraska-Lincoln graduating May 2025. I
                        chose data science because the world revolves around data, and decisions are increasingly driven by data analysis and
                        insights. My passion for math and science made data science the perfect field for me. One of my favorite projects was
                        developing a full-stack application using Django, Python, and a PostgreSQL database. I have also worked on various other
                        projects, gaining experience in full-stack development and data-driven applications.
                    </div>
                    <div>
                        I have a strong background in full-stack development, with expertise in both front-end and back-end technologies. My database
                        experience includes SQLite, PostgreSQL, and building data pipelines for large datasets. Beyond React, Node.js, and Python, I
                        am skilled in JavaScript, Java, C, C++, and C#. Additionally, I earned a Data Analyst certificate from IBM through Coursera,
                        which helped solidify my skills in data analysis and visualization.
                    </div>
                    <div>
                        In my free time, I enjoy playing chess, both online and with friends. No one in my family can beat me, which is something
                        I&apos;m very proud of! Chess has taught me to think long-term and focus on small steps that lead to better outcomes over
                        time. I also enjoy hiking, and my favorite hike was visiting Machu Picchu in Peru during winter break. If you&apos;re looking
                        for movie recommendations, I highly recommend <em> Good Will Hunting</em> and <em>Spider-Man: Into the Spider-Verse</em>.
                        Besides programming, I love working on mechanical projects like cars and motorcycles, and I&apos;m currently eager to learn
                        how to play the piano.
                    </div>
                    <div>
                        My ultimate career goal is to work in the aerospace industry, combining my love for technology and my fascination with flying
                        and space exploration. I&apos;m currently seeking a full-time position in software engineering or data science. If you&apos;d like to
                        connect, feel free to reach out to me on LinkedIn or check out my projects on GitHub!
                    </div>
                </div>
                <Image
                    priority
                    alt='Style'
                    src='/cropped.jpeg'
                    className='h-auto w-auto object-cover antialiased grayscale'
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}
