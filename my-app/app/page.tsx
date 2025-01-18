import Image from 'next/image';

export const metadata = {
    title: "Evin's Webpage",
    description: "Welcome to Evin's personal website",
    openGraph: {
        title: "Evin's Webpage",
        description: "Welcome to Evin's personal website",
        url: 'https://evin-rasho.dev', // Replace with your domain
        images: [
            {
                url: 'https://evin-rasho.dev/drone.jpg', // Replace with your image URL
                width: 1200,
                height: 630,
                alt: "Evin's Webpage Banner",
            },
        ],
    },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: "Evin's Webpage",
    //     description: "Welcome to Evin's personal website",
    //     images: ['https://yourdomain.com/path-to-your-image.jpg'], // Replace with your image URL
    // },
};

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen h-3/6 py-2 overflow-hidden'>
            <div className='flex flex-col items-center justify-center w-full h-full flex-1 px-10 text-center'>
                <Image src='/logo-big.svg' alt='Evin Rasho' width={600} height={500} className='h-auto w-auto object-cover' />
                <h1 className='text-xl md:text-4xl font-bold'>Welcome to Evin&apos;s Webpage!</h1>
            </div>
        </div>
    );
}
