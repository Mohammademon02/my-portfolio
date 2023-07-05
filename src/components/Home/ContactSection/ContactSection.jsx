import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";
import { BsFacebook, BsFillSendFill, BsGithub } from "react-icons/bs";

const ContactSection = () => {
    return (
        <section>
            <h1 className="text-6xl font-bold text-center text-white my-12">GET IN <span className="text-yellow-400">TOUCH</span></h1>
            <div className="flex-none md:flex lg:flex xl:flex gap-5">
                <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12">
                    <h1 className="uppercase text-white text-3xl font-bold my-12">Don't be shy!</h1>

                    <div >
                        <div className="flex items-center ">
                            <span className=" inline-block">
                                <FaMapLocationDot className='text-yellow-400 text-4xl bg-transparent' />
                            </span>
                            <h3 className=" text-white text-xl ml-5 font-semibold inline-block">
                                Address:
                            </h3>
                        </div>
                        <p className="text-white  mt-2 ml-14">Dogormora, Savar, Dhaka</p>
                    </div>

                    <div className="mt-7" >
                        <div className="flex items-center ">
                            <span className=" inline-block">
                                <RiMailSendFill className='text-yellow-400 text-4xl bg-transparent' />
                            </span>
                            <h3 className=" text-white text-xl ml-5 font-semibold inline-block">
                                Email:
                            </h3>
                        </div>
                        <p className="text-white  mt-2 ml-14">mohammademon0702@gmail.com</p>
                    </div>

                    <div className="mt-7">
                        <div className="flex items-center ">
                            <span className=" inline-block">
                                <FaPhone className='text-yellow-400 text-4xl bg-transparent' />
                            </span>
                            <h3 className=" text-white text-xl ml-5 font-semibold inline-block">
                                Phone Number:
                            </h3>
                        </div>
                        <p className="text-white  mt-2 ml-14">+8801846943797</p>
                    </div>

                    <div className="flex items-center mt-5">
                        <p className=" rounded-full bg-[#1A1A1A] hover:bg-yellow-400 p-3.5 ml-5 inline-block">
                            <a href=""><BsFacebook className='text-white bg-transparent' /></a>
                        </p>
                        <p className=" rounded-full bg-[#1A1A1A] hover:bg-yellow-400 p-3.5 ml-5 inline-block">
                            <a href=""><BsGithub className='text-white bg-transparent' /></a>
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 mt-12">
                    <form>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 text-white bg-[#1A1A1A] border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full text-white px-3 py-2 bg-[#1A1A1A] border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message" className="w-full px-3 py-2 text-white bg-[#1A1A1A] border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-400" rows="5"></textarea>
                        </div>
                        <button className="rounded-full border-2 border-yellow-400 hover:bg-yellow-400 text-white px-3 py-2 flex items-center ">
                            <a className='mr-2 transition-all duration-300 hover:mr-5 bg-transparent' target="_blank"
                                rel="noreferrer" href="https://drive.google.com/file/d/14h2kwfjXIa5amWDS8jgF3LvyEg-pDN-Q/view">Send Message</a>
                            <span className='rounded-full bg-yellow-400 p-1'>
                                <BsFillSendFill className=' text-white bg-transparent' />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;