import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center max-h-screen h-3/6 py-2 overflow-hidden'>
            <div className='flex flex-col items-center w-full flex-1 px-10 text-center'>
                <Image priority src='/logo-big.svg' alt='Evin Rasho' width={600} height={500} className='h-auto w-auto object-cover' />
                <h1 className='text-xl md:text-4xl font-bold font-serif'>Welcome to Evin&apos;s Webpage!</h1>
            </div>
        </div>
    );
}
