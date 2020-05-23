import React from "react";
import styled from "styled-components";

const StyledSkillsLists = styled.div`
	display: grid;

	align-items: top;

	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

	grid-gap: 1rem;
`;

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
		<StyledSkillsLists>
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
		</StyledSkillsLists>
	</div>
);

export default Skills;
