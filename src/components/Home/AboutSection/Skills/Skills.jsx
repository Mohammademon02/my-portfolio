import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skillData from "./SkillData";



const Skills = () => {
    
    return (
        <section>
            <h1 className="uppercase text-white text-3xl font-bold text-center my-12">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">

                {
                    skillData.map(skill => <div
                        key={skill.id}
                    >
                        <CircularProgressbarWithChildren
                            value={skill.percentage}
                            styles={buildStyles({
                                textColor: "red",
                                pathColor: "turquoise",
                                trailColor: "gold",
                                trail: {
                                    stroke: "white", // Set the stroke color for dark mode
                                    strokeWidth: 10, // Adjust the stroke width as needed
                                }
                            })}
                        >
                            <img
                                className="object-cover"
                                style={{ width: 50, marginTop: -5 }}
                                src={skill.image}
                                alt={skill.name}
                            />
                            <div className="text-center" style={{ fontSize: 12, marginTop: -5 }}>
                                <strong>{skill.percentage}% <br />{skill.name}</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>)
                }

            </div>
        </section>
    );
};

export default Skills;


