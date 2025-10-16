import ExperienceCard from "./ExperienceCard";
import ArrowButton from "../ArrowButton";

function Experience() {
    return (
        <>
            <p className="text-center">Explore My</p>
            <h1 className="text-[3rem] text-center font-bold">Experience</h1>
            <div className="flex justify-center flex-col">
            <div className="flex gap-[2rem] my-[2rem]">
                <ExperienceCard type="languages" />
                <ExperienceCard type="tools" />
            </div>
            </div>
            <ArrowButton href="#projects"/>
        </>
    );
}

export default Experience;