import React from "react";
import Photo from './photoofme.jpeg';
import './PhotoAndText.css';

function PhotoAndText() {
    return (
        <table>
            <tr>
                <td>
                    <img src={Photo} className="imgOfMe"/>
                </td>
                <td className="blurb">
                    <p className="aboutMeBlurb">Hi I'm Saumya Agarwal. How are you?</p>
                </td>
            </tr>
        </table>
    )
}

export default PhotoAndText;