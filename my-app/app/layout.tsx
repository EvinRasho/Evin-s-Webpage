
import { NavBar } from './components/nav-menu';
import "./globals.css";
import { Metadata, Viewport } from 'next';


export const viewport: Viewport = {
    themeColor: 'black',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
};


export const metadata: Metadata = {
    title: "Evin's Webpage",
    description: "Welcome to Evin's personal website",
    openGraph: {
        title: "Evin's Webpage",
        description: "Welcome to Evin's personal website",
        url: 'https://evin-rasho.dev', // Replace with your domain
        images: [
            {
                url: 'https://evin-rasho.dev/website_picture.png', // Replace with your image URL
                width: 1200,
                height: 630,
                alt: "Evin's Webpage Banner",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@evinbrasho',
        description: 'My Personal Website',
        images: 'https://evin-rasho.dev/website_picture.png',
        site: 'https://www.evin-rasho.dev',
        title: 'Evin Rasho',
        creatorId: '@evinbrasho',
    },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
