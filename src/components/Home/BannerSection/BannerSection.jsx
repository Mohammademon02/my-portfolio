import img from './../../../assets/Emon.jpg'
import './BannerSection.css'
import { FaUser } from 'react-icons/fa';


const BannerSection = () => {
    return (
        <section className='container mx-auto mt-9' >
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center'>


                <div className="part">
                    <div className="dodeca irr">
                        <div className="dode1">
                            <div className="dode2">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-yellow-400 text-5xl font-bold'>Hi! I Am Emon</h1>
                    <h4 className='text-white text-3xl my-3'>Junior Frontend Developer</h4>
                    <p className='text-[#AAAAAA] text-justify'>I am a passionate web developer. I am enjoy implementing my technical and professional skill in my projects. And also I try to make my project beautiful, neat and clean. I am determined to keep myself up to date with the latest technology.</p>
                    <div className='mt-4'>
                        <button className="rounded-full border-2 border-yellow-400 hover:bg-yellow-400 text-white px-3 py-2 flex items-center ">
                            <a className='mr-2 transition-all duration-300 hover:mr-5 bg-transparent' target="_blank"
                                rel="noreferrer" href="https://drive.google.com/file/d/14h2kwfjXIa5amWDS8jgF3LvyEg-pDN-Q/view">Download Resume</a>
                            <span className='rounded-full bg-yellow-400 p-1'>
                                <FaUser className=' text-white bg-transparent' />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BannerSection;