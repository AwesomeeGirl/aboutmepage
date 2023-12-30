import LanguageComp from "./LanguageComp";
import React from "react";

function LanguagesWrapper() {
    return (
        <div>
            <LanguageComp language={"Introduction to Object Oriented Programming"} level={8} color={"cornflowerblue"} />
            <LanguageComp language={"Data Structures & Algorithms"} level={8} color={"darkred"}/>
            <LanguageComp language={"Digital System Design"} level={8} color="cornflowerblue"/>
            <LanguageComp language={"Programming Hardware/Software Systems"} level={8} color="darkred"/>
            <LanguageComp language={"Circuit Analysis"} level={0.5} color={"cornflowerblue"}/>
            <LanguageComp language={"Digital Design Laboratory"} level={0.5} color={"darkred"} />
        </div>
    )
}

export default LanguagesWrapper;