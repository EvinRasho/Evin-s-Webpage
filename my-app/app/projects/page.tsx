import {} from 'lucide-react';
import Card, { CardProps } from '../components/card';
import { RiNextjsFill, RiTailwindCssFill, RiNodejsLine, RiReactjsFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoPython } from 'react-icons/bi';
import { SiPytorch, SiRos, SiFlask, SiOpencv } from 'react-icons/si';

export default function Projects() {
    const arrayofProjects: CardProps[] = [
        {
            title: 'Personal Website',
            description:
                'This is my personal website, built using Next.js and Tailwind CSS. I incorporated Lucide Icons for the iconography and deployed the site on Vercel.Additionally, I utilized TypeScript for type checking.The website is fully responsive and optimized for both desktop and mobile devices.',
            image: '/website.png',
            techStackicons: [
                <RiNextjsFill className='hover:scale-105 ' size={45} key={'Next.Js'} title='Next.Js' />,
                <RiTailwindCssFill className='hover:scale-105' size={45} key={'Tailwind'} fill='cyan' title='Tailwind' />,
                <BiLogoTypescript className='hover:scale-105' size={45} key={'TypeScript'} fill='#1d4ed8' title='TypeScript' />,
                <RiNodejsLine className='hover:scale-105' size={45} key={'Node.Js'} fill='limegreen' title='Node.Js' />,
                <RiReactjsFill className='hover:scale-105' size={45} key={'React.Js'} fill='cyan' title='React.Js' />,
            ],
            linkToProject: 'https://github.com/EvinRasho/Evin-s-Webpage',
        },
        {
            title: 'Random cat image generator',
            description:
                "I used Python and PyTorch to build a random cat image generator using Wasserstein GAN (WGAN), similar to the 'This Person Does Not Exist' website. The dataset was sourced from a public GitHub repository called 'Cat-faces-dataset'.",
            image: '/cats.png',
            techStackicons: [
                <BiLogoPython className='hover:scale-105' size={45} key={'Python'} fill='#082f49' title='Python' />,
                <SiPytorch className='hover:scale-105' size={45} key={'Pytorch'} fill='orange' title='Pytorch' />,
            ],
            linkToProject: 'https://github.com/EvinRasho/Generative-AI-',
        },
        {
            title: 'Drone Video Connection',
            description:
                'Connected a drone camera using the ROS system for seamless data communication and control. Built a Flask-based UI to display multiple camera views, including raw feed, processed images with the MIDAS model, and RealSense depth views. Enhanced visual data analysis with MIDAS image processing and RealSense depth insights for improved usability',
            image: '/drone.jpg',
            techStackicons: [
                <SiRos className='hover:scale-105' size={40} key={'ROS'} fill='#082f49' title='ROS' />,
                <BiLogoPython className='hover:scale-105' size={45} key={'Python'} fill='#082f49' title='Python' />,
                <SiFlask className='hover:scale-105' size={45} key={'Flask'} fill='#082f49' title='Flask' />,
                <SiOpencv className='hover:scale-105' size={45} key={'OpenCV'} fill='#22c55e' title='OpenCV' />,
            ],
            linkToProject: 'https://github.com/isl-org/MiDaS',
        },
    ];

    return (
        <div className='flex flex-col space-y-5'>
            <div className='flex flex-col items-center justify-center w-full flex-1 text-center py-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
            </div>

            <div className='grid grid-cols-1 h-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10  z-0 mx-5 pb-5'>
                {arrayofProjects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        techStackicons={project.techStackicons}
                        linkToProject={project.linkToProject}
                    />
                ))}
            </div>
        </div>
    );
}
