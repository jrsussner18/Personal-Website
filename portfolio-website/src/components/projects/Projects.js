import ProjectCard from "./ProjectCard";
import ArrowButton from "../ArrowButton";

function Projects() {

    const projectOneFeatures = [
      "Integrated Google Places & Public Golf APIs",
      "Real-time GPS location tracking and filtering",
      "Data-driven interface design (UI/UX focus)",
      "Implemented using native Swift and Firebase",
      "Demonstrates robust API evaluation skills",
    ];
    const projectTwoFeatures = [
      "Works in higher dimensions (3D & 4D)",
      "Backtracking algorithm implementation",
      "Visualizes the solving process",
      "Accepts custom board input",
    ];
    const projectThreeFeatures = [
      "Created for Tampa Palms Professional Center",
      "Uses Next.js for high performance",
      "Responsive design for mobile/desktop",
      "Modern UI for user easability"
    ];
    return (
      <>
        <p className="text-center">Browse My Recent</p>
        <h1 className="text-[3rem] text-center font-bold">Projects</h1>
        <div className="flex justify-center flex-col">
          <div className="flex gap-[2rem] my-[2rem]">
            <ProjectCard
              title="TeeItUp"
              image="/images/TeeItUp.png"
              features={projectOneFeatures}
              githubUrl="https://github.com/jrsussner18/TeeItUP"
            />
            <ProjectCard
              title="Sudoku Solver"
              image="/images/SudokuSolver.png"
              features={projectTwoFeatures}
              githubUrl="https://github.com/jrsussner18/CSC301_Program3"
            />
            <ProjectCard
              title="Tampa Palms Website"
              image="/images/tppc.png"
              features={projectThreeFeatures}
              githubUrl="https://github.com/tppcgroups/tppcgroup5"
            />
          </div>
        </div>
        <ArrowButton href="#contact" />
      </>
    );
}

export default Projects;