export default function Resume() {
    return (
        <div className='resume-container'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-6xl font-bold'>Resume</h1>
            </div>
            <iframe src='/Resume.pdf' className='w-full h-screen' title='Resume Viewer'></iframe>
        </div>
    );
}
