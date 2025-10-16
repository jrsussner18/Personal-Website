import AboutPic from "./AboutPic";
import AboutInfoCard from "./AboutInfoCard";
import InfoCard from "./InfoCard";
import ArrowButton from "../ArrowButton";

function About() {
    return (
        <>
        <p className="text-center">Get To Know More</p>
        <h1 className="text-[3rem] text-center font-bold">About Me</h1>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 p-4">
          <div className="flex justify-center flex-row">
            <AboutPic />
            <div className="md:w-2/3">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
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