import { useState } from 'react';
import './ProjectSection.css'
import projectData from './ProjectData';
import { FaGithub } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const ProjectSection = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section>
            <h1 className="text-6xl font-bold text-center text-white my-12">MY <span className="text-yellow-400">PROJECTS</span></h1>
            <div className='rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

                {
                    projectData.map(project =>
                        <div
                            key={project.id}
                            className="container mx-auto " >
                            <div
                                className="relative your_frame"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={project.image} alt="img" />
                                {isHovered ? (
                                    <div className="absolute h-40 bottom-0 left-0 w-full bg-black bg-opacity-80 text-white text-center p-4 hover_dialog">
                                        <div className="dialog_content bg-transparent" >
                                            <p className='bg-transparent font-semibold'>Technologies : <span className='bg-transparent text-sm font-light'>{project.technologies} </span></p>
                                            <div className='flex bg-transparent items-center justify-center mt-3'>
                                                <button className="rounded-md border border-yellow-400 hover:bg-yellow-400 text-white mr-5 px-2 py-2 flex items-center ">
                                                    <span className='mr-1 bg-transparent'>
                                                        <FaGithub className=' text-white bg-transparent' />
                                                    </span>
                                                    <a className='mr-2 transition-all duration-300 bg-transparent' target="_blank"
                                                        rel="noreferrer" href={project.githubLink}> Github</a>
                                                </button>
                                                <button className="rounded-md border border-yellow-400 hover:bg-yellow-400 text-white px-2 py-2 flex items-center ">
                                                    <span className='mr-1 bg-transparent'>
                                                        <AiFillEye className=' text-white bg-transparent' />
                                                    </span>
                                                    <a className='mr-2 transition-all duration-300 bg-transparent' target="_blank"
                                                        rel="noreferrer" href={project.liveLink}>Live</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute h-40 bottom-0 left-0 w-full bg-black bg-opacity-80 text-center  p-4 opacity-100 transition-opacity duration-500 ">
                                        <h2 className="text-2xl text-yellow-400 font-bold mb-2 bg-transparent">{project.title}</h2>
                                        <p className="text-sm text-white bg-transparent ">{project.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default ProjectSection;
