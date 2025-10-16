import Skills from "./Skills";

function ExperienceCard({type}) {

    const languages = [
        { skill: "Python", experience: "Experienced" },
        { skill: "Java", experience: "Experienced" },
        { skill: "C", experience: "Intermediate" },
        { skill: "Swift", experience: "Intermediate" },
        { skill: "HTML", experience: "Experienced" },
        { skill: "CSS", experience: "Experienced" },
        { skill: "JavaScript", experience: "Intermediate" },
        { skill: "TypeScript", experience: "Basic" },
    ]

    const frameworksAndTools = [
      { skill: "Next.js", experience: "Experienced" },
      { skill: "React", experience: "Intermediate" },
      { skill: "Django", experience: "Intermediate" },
      { skill: "Angular", experience: "Basic" },
      { skill: "Tailwind CSS", experience: "Intermediate" },
      { skill: "Firebase", experience: "Basic"}
    ];

    if (type === "languages") {
        return (
          <div className="ml-auto md:w-2/5 p-6 rounded-3xl border border-gray-600 border-solid text-center">
            <h2 className="font-[600] text-[1.75rem] mb-[2rem]">
              Languages
            </h2>
            <div className="flex text-left flex-wrap flex-row gap-[2.5rem] justify-around">
                {languages.map((skill) => (
                    <Skills skill={skill.skill} experience={skill.experience} />
                ))}
            </div>
          </div>
        );
    }
    
    else if (type ==="tools") {
        return (
          <div className="mr-auto md:w-2/5 p-6 rounded-3xl border border-gray-600 border-solid text-center">
            <h2 className="font-[600] text-[1.75rem] mb-[2rem]">
              Frameworks & Tools
            </h2>
            <div className="flex text-left flex-wrap flex-row gap-[2.5rem] justify-around">
              {frameworksAndTools.map((skill) => (
                <Skills skill={skill.skill} experience={skill.experience} />
              ))}
            </div>
          </div>
        );
    }
}

export default ExperienceCard;