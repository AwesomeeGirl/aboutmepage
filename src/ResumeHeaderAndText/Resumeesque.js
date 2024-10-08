import React from "react";
import './Resumeesque.css';
import ResumeHeader from "./ResumeHeader";


function Resumeesque() {
    const project = [
        {title: "Firmware Engineer Intern | Eaton",
            description: `- Integrating Matter within a smart light switch using C/C++ in Simplicity Studio 5 \n`},
        {title: "Digital Design R&D Intern | Sandia National Laboratories",
            description: `- Designed an IEEE-754 Standard Single Precision Floating Point Unit in SystemVerilog \n
- Simulated Constrained Random Testing test cases in QuestaSim \n
- Tested floating point unit on an FPGA board, sending hardware bitstream through Vivado \n
- Observed a 600 times speedup compared to software floating point arithmetic \n`},
        {title: "Undergraduate Research | Georgia Institute of Technology",
        description: `- Working with Verilog to code a hardware compiler to ensure malware cannot attack a compiler \n
- Implementing front and back end of the compiler in HDL \n
- Using the Intel DE-10 FPGA Board, Quartus, and ModelSim to interface hardware Block RAM with other components \n
- Parsing through Verilog code to debug errors or procedural issues \n`},
        {title: "Solitaire",
        description: "- Made a text based solitaire game in C"},
        {title: "RPG Game",
        description: `- Developed an RPG game on a 32-bit microcontroller platform in C/C++ \n
- Used multiple hardware circuit pieces (NavSwitch, Buttons) to control the character's actions and movements`},
        {title: "QuikPlanner Mobile Application",
        description: `- Designed and developed a fully functional mobile application that presents school lunch menu, teachers, extracurricular \n
activities, calendar, and student schedule using Swift.\n
- Rebuilt the application using Flutter development framework to make it platform independent.`}
    ]

    return (
        <div>
            <div className="overarching">
                <ResumeHeader title={project[0].title} description={project[0].description}/>
                <ResumeHeader title={project[1].title} description={project[1].description}/>
                <ResumeHeader title={project[2].title} description={project[2].description}/>
                <ResumeHeader title={project[3].title} description={project[3].description}/>
                <ResumeHeader title={project[4].title} description={project[4].description}/>
                <ResumeHeader title={project[5].title} description={project[5].description}/>
            </div>
            <div className="bottom"></div>
        </div>
    );
}

export default Resumeesque;