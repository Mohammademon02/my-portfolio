import img from './../../../assets/Emon.jpg'
import './BannerSection.css'
import { ImDownload2 } from 'react-icons/im';


const BannerSection = () => {
    return (
        <div className='mx-7 mt-7'>
            <section className='container mx-auto mt-9' >
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center'>

                    <div className="part mx-auto overflow-hidden">
                        <div className="dodeca irr">
                            <div className="dode1">
                                <div className="dode2">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-yellow-400 text-4xl md:text-5xl lg:text-5xl xl:text-5xl mt-4 font-bold text-center lg:text-left'>Hi! I Am Emon</h1>
                        <h4 className='text-white text-lg md:text-2xl text-center lg:text-left my-3'>Junior Frontend Developer</h4>
                        <p className='text-[#AAAAAA] text-justify'>I am a passionate web developer. I am enjoy implementing my technical and professional skill in my projects. And also I try to make my project beautiful, neat and clean. I am determined to keep myself up to date with the latest technology.</p>
                        <div className='mt-6'>
                            <button className="rounded-full border-2 border-yellow-400 hover:bg-yellow-400 text-white px-3 py-2 flex items-center mx-auto lg:mx-0">
                                <a className='mr-2 transition-all duration-300 hover:mr-5 bg-transparent' target="_blank"
                                    rel="noreferrer" href="https://drive.google.com/file/d/14h2kwfjXIa5amWDS8jgF3LvyEg-pDN-Q/view">Download Resume</a>
                                <span className='rounded-full bg-yellow-400 p-1'>
                                    <ImDownload2 className=' text-white bg-transparent' />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BannerSection;