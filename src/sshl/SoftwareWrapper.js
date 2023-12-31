import React from "react";
import Hobbies from "./hobby/Hobbies";
import VSCode from './softwareimages/vscode.png'
import Xcode from './softwareimages/xcode.png'

function SoftwareWrapper() {
    return (
        <table className="hobbyWrapperTable">
            <tr>
                <td className="hobbyWrapper">
                    <Hobbies imageSrc={VSCode} hobbyName={"Visual Studio Code"} hobbyCaption="For anything and everything"/>
                </td>
                <td className="hobbyWrapper">
                <Hobbies imageSrc={Xcode} hobbyName={"XCode"} hobbyCaption="For my phone and/or macbook"/>
                </td>
            </tr>
        </table>
    )
}

export default SoftwareWrapper;