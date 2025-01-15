export default function AboutMe() {
    return (
        <div className='flex flex-col space-y-10'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-6xl font-bold'>About Me</h1>
            </div>

            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-2xl font-bold'>
                    Hi my name is Evin Rasho, I'm a Software Engineer and Data Science major at the university of Nebraska Lincoln. I'm a full stack
                    developer with experience in React, Node.js, and Python. I'm also a data scientist with experience in machine learning, data
                    analysis, and data visualization. I'm passionate about technology and I'm always looking to learn new things.
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-2xl font-bold'>
                    I'm currently looking for a full time software engineering or data science position. If you would like to get in touch with me,
                    feel free to reach out to me on LinkedIn or Github.
                </h1>
            </div>
        </div>
    );
}
