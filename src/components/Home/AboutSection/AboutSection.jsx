import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";


const AboutSection = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold text-center text-white my-12">ABOUT <span className="text-yellow-400">ME</span></h1>
            <PersonalInfo></PersonalInfo>
            <Skills></Skills>
        </div>
    );
};

export default AboutSection;