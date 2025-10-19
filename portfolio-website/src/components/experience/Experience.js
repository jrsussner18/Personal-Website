import ExperienceCard from "./ExperienceCard";
import ArrowButton from "../ArrowButton";

function Experience() {
    return (
        <>
            <p className="text-center">Explore My</p>
            <h1 className="text-[2.5rem] sm:text-[3rem] text-center font-bold">Experience</h1>
            <div className="flex flex-col items-center px-4">
                <div className="flex flex-col items-center gap-8 my-8 md:flex-row md:items-stretch md:gap-8">
                    <ExperienceCard type="languages" />
                    <ExperienceCard type="tools" />
                </div>
            </div>
            <ArrowButton href="#projects"/>
        </>
    );
}

export default Experience;
