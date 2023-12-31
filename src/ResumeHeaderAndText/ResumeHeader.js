import React from "react";

function ResumeHeader(props) {
    return (
        <div>
            <h2 className="resumeheader">
                {props.title}
            </h2>
            <pre className="resumedescription">
               {props.description}
            </pre>
        </div>
    )
}

export default ResumeHeader;