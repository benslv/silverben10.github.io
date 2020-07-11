import React from "react";
import styled from "styled-components";

import Section from "../components/section";

import { skills } from "../config";

const StyledSkillsLists = styled.div`
	display: grid;
	align-items: start;
	justify-items: start;
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
`;

const Skills = () => (
	<Section emoji="📚" title="Skills">
		<StyledSkillsLists>
			{skills.map((skill) => {
				const { title, entries } = skill;

				return (
					<StyledUl aria-label={title}>
						{entries.map((entry) => {
							return <li>{entry}</li>;
						})}
					</StyledUl>
				);
			})}
		</StyledSkillsLists>
	</Section>
);

export default Skills;
