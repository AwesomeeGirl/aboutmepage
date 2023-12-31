import React from "react";
import './Header.css';

function Header({title}) {
    return (
        <div className="margins">
            <h2>{title}</h2>
            <hr/>
        </div>
    );
}

export default Header;