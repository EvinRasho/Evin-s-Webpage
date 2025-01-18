// import Link from 'next/link';
// import Image from 'next/image';
// import { JSDOM } from 'jsdom';

// // Function to fetch Open Graph details for a given URL
// const extractMetaTags = async (url) => {
//     try {
//         // Fetch the content of the URL
//         const response = await fetch(url);
//         const html = await response.text();

//         // Parse the HTML using JSDOM
//         const dom = new JSDOM(html);
//         const document = dom.window.document;

//         // Extract meta tags from the document
//         const metaTags = Array.from(document.querySelectorAll('meta')).reduce((tags, meta) => {
//             // Get the name, property, or itemprop attribute of the meta tag
//             const name = meta.getAttribute('name') || meta.getAttribute('property') || meta.getAttribute('itemprop');

//             // Get the content attribute of the meta tag
//             const content = meta.getAttribute('content');

//             // If both name and content exist, add them to the tags object
//             if (name && content) {
//                 tags[name] = content;
//             }

//             return tags;
//         }, {});

//         // Return an object containing title, description, and image
//         return {
//             title: document.title || metaTags['og:title'] || metaTags['twitter:title'],
//             description: metaTags.description || metaTags['og:description'] || metaTags['twitter:description'],
//             image: metaTags.image || metaTags['og:image'] || metaTags['twitter:image'],
//         };
//     } catch (error) {
//         // Handle errors if fetching or parsing fails
//         console.error('Error fetching Open Graph details', error);
//     }
// };


// const extractMetaTags = async (url) => {
//     try {
//         const response = await fetch(url);
//         const html = await response.text();
//         const dom = new JSDOM(html);
//         const document = dom.window.document;
//         const metaTags = Array.from(document.querySelectorAll('meta')).reduce((tags, meta) => {
//             const name = meta.getAttribute('name') || meta.getAttribute('property') || meta.getAttribute('itemprop');
//             const content = meta.getAttribute('content');

//             if (name && content) {
//                 tags[name] = content;
//             }

//             return tags;
//         }, {});

//         return {
//             title: document.title || metaTags['og:title'] || metaTags['twitter:title'],
//             description: metaTags.description || metaTags['og:description'] || metaTags['twitter:description'],
//             image: metaTags.image || metaTags['og:image'] || metaTags['twitter:image'],
//         };
//     } catch (error) {
//         console.error('Error fetching Open Graph details', error);
//     }
// };

// async function LinkPreview({ url }) {
//     //here calling the function
//     const data = await extractMetaTags(url);

//     if (!data) {
//         return <p>Failed to fetch link preview.</p>;
//     }
//     return (
//         <Link
//             href={'http://www.google.com'}
//             target='_blank'
//             className='text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]'
//             style={{
//                 textDecoration: 'none',
//             }}>
//             <div className='object-cover h-full'>
//                 <Image src={data.image} alt='Link Preview' className='object-cover h-full w-[340px] m-0' />
//             </div>
//             <div className='p-4 w-[60%]'>
//                 <h3 className='text-3xl font-bold leading-[2rem] mb-2 '>{data.title}</h3>
//                 <p className='text-base  line-clamp-3 mb-2 '>{data.description}</p>
//                 <span className='mt-3 opacity-50 text-xs'>&nbsp;{url}</span>
//             </div>
//         </Link>
//     );
// }

// export default LinkPreview;
