import AboutPic from "./AboutPic";
import AboutInfoCard from "./AboutInfoCard";
import InfoCard from "./InfoCard";
import ArrowButton from "../ArrowButton";

function About() {
    return (
        <>
        <p className="text-center">Get To Know More</p>
        <h1 className="text-[2.5rem] sm:text-[3rem] text-center font-bold">About Me</h1>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-16 px-4">
          <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
            <AboutPic />
            <div className="w-full md:w-2/3 mt-8 md:mt-0">
              <div className="flex flex-col items-center md:flex-row md:items-stretch gap-6 md:gap-8 mb-8 w-full">
                <AboutInfoCard imageRef="/images/education.png" alt="Education Icon" title="Education" info1="B.S. Computer Science" info2="Minor in Mathematics" />
                <AboutInfoCard imageRef="/images/experience.png" alt="Experience Icon" title="Experience" info1="3+ years" info2="Software Development" />

              </div>
              <InfoCard />
            </div>
          </div>
        </div>
          <ArrowButton href={"./#experience"} />
        </>
    );
}

export default About;
