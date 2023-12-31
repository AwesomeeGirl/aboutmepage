import React from "react";
import Skills from "./Skills";

function SkillsWrapper() {
    return (
        <div>
            <Skills nameOfSkill={"Java"} level={7}/>
            <Skills nameOfSkill={"C"} level={6}/>
            <Skills nameOfSkill={"Git"} level={3}/>
            <Skills nameOfSkill={"HTML/CSS"} level={5}/>
            <Skills nameOfSkill={"React"} level={2}/>
        </div>
    )
}

export default SkillsWrapper;