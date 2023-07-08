import AboutSection from "./AboutSection/AboutSection";
import BannerSection from "./BannerSection/BannerSection";
import ContactSection from "./ContactSection/ContactSection";
import ProjectSection from "./ProjectSection/ProjectSection";


const Home = () => {
    return (
        <div>
            <BannerSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
};

export default Home;