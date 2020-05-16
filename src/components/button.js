import React from "react";

import "./button.scss";

const Button = (props) => {
    return (
        <a
            className={`btn ${props.className}`}
            href={props.href}
            target={props.target ? props.target : ""}
            rel="noopener noreferrer">
            {props.children}
        </a>
    );
};

export default Button;
