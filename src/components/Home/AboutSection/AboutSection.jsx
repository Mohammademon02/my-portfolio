import EducationAndTraining from "./EducationAndTraining/EducationAndTraining";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";


const AboutSection = () => {
    return (
        <div className="mx-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white my-12">ABOUT <span className="text-yellow-400">ME</span></h1>
            <PersonalInfo></PersonalInfo>
            <Skills></Skills>
            <EducationAndTraining></EducationAndTraining>
        </div>
    );
};

export default AboutSection;