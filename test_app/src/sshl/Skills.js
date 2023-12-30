import React from "react";
import './Skills.css'

function Skills( {level, nameOfSkill}) {
    const widthSize = `${level*10}%`;
    return (
        <div className="skillName" style={{width:widthSize}}>
            <p className="skillVerb">
                {nameOfSkill}
            </p>
        </div>
    )
}

export default Skills;