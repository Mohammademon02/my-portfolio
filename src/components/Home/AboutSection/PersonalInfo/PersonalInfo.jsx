import { FaUser } from "react-icons/fa";


const PersonalInfo = () => {
    return (
        <section className="mt-7">
            <h1 className="uppercase text-white text-3xl font-bold">Personal Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-9">
                <div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-4 lg:gap-4">
                            <div>
                                <p className="text-[#AAAAAA] pt-2 pb-3">Name <span className="text-white font-semibold">: Md. Emon</span></p>
                                <p className="text-[#AAAAAA] pb-3">Age <span className="text-white font-semibold">: 23 Years</span></p>
                                <p className="text-[#AAAAAA] pb-3">Email <span className="font-semibold">: <a className=" text-[#0000EE]" href="mailto:mohammademon0207@gmail.com">mohammademon0702@gmail.com</a></span></p>
                            </div>
                            <div>
                                <p className="text-[#AAAAAA] pb-3">Address <span className="text-white font-semibold">: Dhaka, Bangladesh</span></p>
                                <p className="text-[#AAAAAA] pb-3">Experience <span className="text-white font-semibold">: 6 months</span></p>
                                <p className="text-[#AAAAAA] pb-3">Language <span className="text-white font-semibold">: Bangla, English</span></p>
                            </div>
                        </div>
                        <button className="mt-6 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 text-white px-3 py-2 flex items-center ">
                            <a className='mr-2 transition-all duration-300 hover:mr-5 bg-transparent' target="_blank"
                                rel="noreferrer" href="https://drive.google.com/file/d/14h2kwfjXIa5amWDS8jgF3LvyEg-pDN-Q/view">Hire me</a>
                            <span className='rounded-full bg-yellow-400 p-1'>
                                <FaUser className=' text-white bg-transparent' />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 text-center">
                    <div className="rounded py-3 bg-[#1A1A1A]">
                        <h2 className="text-5xl font-bold text-yellow-400 bg-transparent">6+</h2>
                        <p className="text-white bg-transparent">Months of Experience</p>
                    </div>
                    <div className="rounded-md py-3 bg-[#1A1A1A]">
                        <h2 className="text-5xl font-bold text-yellow-400 bg-transparent">12+</h2>
                        <p className="text-white bg-transparent">Completed Projects</p>
                    </div>
                    <div className="rounded-md py-3 bg-[#1A1A1A]">
                        <h2 className="text-5xl font-bold text-yellow-400 bg-transparent">6+</h2>
                        <p className="text-white bg-transparent">Months of Experience</p>
                    </div>
                    <div className="rounded-md py-3 bg-[#1A1A1A]">
                        <h2 className="text-5xl font-bold text-yellow-400 bg-transparent">6+</h2>
                        <p className="text-white bg-transparent">Months of Experience</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PersonalInfo;