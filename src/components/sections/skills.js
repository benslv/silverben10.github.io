import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
    list-style-type: none;
    line-height: 150%;
    padding-left: 0;

    margin-top: 0;

    &:before {
        content: attr(aria-label);
        font-weight: bold;
    }

    li:before {
        content: "‣ ";
        font-size: 18px;
        color: red;
    }
`;

const Skills = () => (
    <div>
        <h2>Skills</h2>
        <StyledUl aria-label="Languages">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS/Sass</li>
        </StyledUl>
        <StyledUl aria-label="Frameworks">
            <li>React</li>
            <li>Gatsby</li>
            <li>Express</li>
            <li>Node</li>
            <li>Bootstrap</li>
        </StyledUl>
        <StyledUl aria-label="Tools">
            <li>Bash/ZSH</li>
            <li>Git & GitHub</li>
            <li>Photoshop</li>
            <li>Sony Vegas Pro</li>
        </StyledUl>
    </div>
);

export default Skills;
