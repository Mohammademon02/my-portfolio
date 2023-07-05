import { FaUserGraduate } from "react-icons/fa";


const EducationAndTraining = () => {
    return (
        <section>
            <h1 className="uppercase text-white text-3xl font-bold text-center my-12">Education & Training</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div >
                    <div className="flex items-center ">
                        <p className=" rounded-full bg-yellow-400 p-3.5 inline-block">
                            <FaUserGraduate className='text-white bg-transparent' />
                        </p>
                        <h3 className="rounded-full bg-[#1A1A1A] text-white text-lg px-5 py-3 ml-2 font-semibold inline-block">
                            Diploma In Computer Engineering
                        </h3>
                    </div>

                    <p className="text-white text-lg mt-5 ml-14">July, 2017 - December, 2021</p>
                    <p className="text-white text-lg mt-4 ml-14">Lakshmipur Polytechnic Institute, Lakshmipur</p>
                </div>

                <div >
                    <div className="flex items-center ">
                        <p className=" rounded-full bg-yellow-400 p-3.5 inline-block">
                            <FaUserGraduate className='text-white bg-transparent' />
                        </p>
                        <h3 className="rounded-full bg-[#1A1A1A] text-white text-lg px-5 py-3 ml-2 font-semibold inline-block">
                            Web Development
                        </h3>
                    </div>

                    <p className="text-white text-lg mt-5 ml-14">Jan, 2023 - July, 2023</p>
                    <p className="text-white text-lg mt-4 ml-14">Programming Hero, Online</p>
                </div>
            </div>
        </section>
    );
};

export default EducationAndTraining;