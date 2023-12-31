import React from 'react';
import './Hobbies.css';

function Hobbies(props) {
    return (
        <figure>
            <img src={props.imageSrc} className='hobbyImg'/>
            <figcaption className='hobbyNameCap'>
                {props.hobbyName}
            </figcaption>
            <figcaption className='hobbydescription'>
                {props.hobbyCaption}
            </figcaption>
        </figure>
    )
}

export default Hobbies;
