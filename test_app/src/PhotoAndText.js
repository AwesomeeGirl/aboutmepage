import React from "react";
import Photo from './photoofme.jpeg';
import './PhotoAndText.css';
import SSHL from './sshl/SSHL'
import Resumeesque from "./ResumeHeaderAndText/Resumeesque";

function PhotoAndText() {
    return (
        <div>
            <table className="photoAndText">
                <tr>
                    <td>
                        <img src={Photo} className="imgOfMe" alt='Saumya and the cat'/>
                    </td>
                    <td className="blurb">
                        <p className="aboutMeBlurb">
                            Hi! My name is Saumya Agarwal. I'm currently a second year student pursuing a bachelor's
                            degree in Computer Engineering at Georgia Institute of Technology. 
                        </p>
                    </td>
                </tr>
            </table>
            <SSHL />
            <Resumeesque />
        </div>
    )
}

export default PhotoAndText;