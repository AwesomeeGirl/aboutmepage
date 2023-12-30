import React from "react";
import Header from './Header.js';
import SkillsWrapper from "./SkillsWrapper.js";
import HobbiesWrapper from "./hobby/HobbiesWrapper.js";
import SoftwareWrapper from "./SoftwareWrapper.js";
import LanguagesWrapper from "./LanguagesWrapper.js";

function SSHL() {
    return (
        <table className="sshl">
            <tr>
                <td className="skills">
                    <Header title="Skills"/>
                    <SkillsWrapper />
                </td>
                <td className="skills">
                    <Header title="Software"/>
                    <SoftwareWrapper />
                </td>
            </tr>
            <tr>
                <td className="skills">
                    <Header title="Hobbies" />
                    <HobbiesWrapper />
                </td>
                <td className="skills">
                    <Header title="Relevant Courses" />
                    <LanguagesWrapper />
                </td>
            </tr>
        </table>
    );
}

export default SSHL;
