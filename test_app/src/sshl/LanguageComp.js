import React from "react";
import './LanguageComp.css'

function LanguageComp({language, level, color}) {
    const widthSize = `${level*10}%`;
    return (
    <div>
        <h3>{language}</h3>
        <hr className="languageHr" style={{width:widthSize, borderColor:color}}/>
    </div>
    )
}

export default LanguageComp