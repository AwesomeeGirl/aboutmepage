import React from "react";
import Hobbies from "./Hobbies";
import IceSkate from './ice-skates.png';
import Soltaire from './desktop-computer.png';
import Guitar from './bass-guitar.png';
import Swimmer from './swimmer.png'

function HobbiesWrapper() {
    return (
        <table className="hobbyWrapperTable">
            <tr>
                <td className="hobbyWrapper">
                    <Hobbies imageSrc={IceSkate} hobbyName={"Ice Skating"} hobbyCaption="Freedom"/>
                </td>
                <td className="hobbyWrapper">
                <Hobbies imageSrc={Soltaire} hobbyName={"Solitaire"} hobbyCaption="Love a good card game"/>
                </td>
            </tr>
            <tr>
                <td className="hobbyWrapper">
                    <Hobbies imageSrc={Guitar} hobbyName={"Guitar"} hobbyCaption="The moment I get the melody"/>
                </td>
                <td className="hobbyWrapper">
                <Hobbies imageSrc={Swimmer} hobbyName={"Swimmer"} hobbyCaption="I've drank too much pool water"/>
                </td>
            </tr>
        </table>
    )
}

export default HobbiesWrapper;