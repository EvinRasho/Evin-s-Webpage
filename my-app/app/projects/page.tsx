import {} from 'lucide-react';
import Card, { CardProps } from '../components/card';
import { RiNextjsFill, RiTailwindCssFill, RiNodejsLine, RiReactjsFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoPython } from 'react-icons/bi';
import { SiPytorch } from 'react-icons/si';

export default function Projects() {
    const arrayofProjects: CardProps[] = [
        {
            title: 'Personal Website',
            description: 'This is my personal website that I built using Next.js and Tailwind CSS. I used Lucide Icons for the icons.',
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
                'This I used python and Pytorch to build a random cat image using Wasserstein GAN (WGAN). Similar to the this personal does not exist website. Dataset was grabbed from a public github called Cat-faces-dataset.',
            image: '/cats.png',
            techStackicons: [
                // <RiNextjsFill className='hover:scale-105 ' size={45} key={'Next.Js'} title='Next.Js' />,
                <BiLogoPython className='hover:scale-105' size={45} key={'Python'} fill='yellow' title='Python' />,
                <SiPytorch className='hover:scale-105' size={45} key={'Pytorch'} fill='orange' title='Pytorch' />,
            ],
            linkToProject: 'https://github.com/EvinRasho/Generative-AI-',
        },
    ];

    return (
        <div className='flex flex-col space-y-5'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-6xl font-bold'>Projects</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='text-xl font-bold'>
                    Here are some of the projects that I have worked on. Click on the project to learn more about it.
                </h1>
            </div>

            <div className='grid grid-cols-1 h-[35rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  z-0 mx-5'>
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
