import React from "react";
import styled from "styled-components";

import Section from "../components/section";

import { projects } from "../content";

import { colors, borderRadius, shadow, fonts } from "../styles/theme";

const StyledProjectImage = styled.img`
	grid-column: 5 / -1;
	grid-row: 1 / -1;

	position: relative;
	z-index: 1;

	max-width: 100%;
	border-radius: ${borderRadius};
	box-shadow: ${shadow};
`;

const StyledProjectDescription = styled.div`
	grid-column: 1 / 7;
	grid-row: 1 / -1;

	position: relative;
	z-index: 2;

	background: white;
	border-radius: ${borderRadius};
	box-shadow: ${shadow};
	padding: 1.5em;
`;

const StyledTechList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	display: flex;

	li {
		margin-right: 1em;

		font-family: ${fonts.Mono};

		color: ${colors.accent};

		&:last-child {
			margin-right: 0;
		}
	}
`;

const StyledProjectContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;
	grid-gap: 10px;

	margin-bottom: 100px;

	/* Odd-numbered projects should have description
       on the right and image on the left.
    */
	&:nth-of-type(odd) {
		${StyledProjectImage} {
			grid-column: 1 / 9;
			grid-row: 1 / -1;
		}

		${StyledProjectDescription} {
			grid-column: 7 / -1;
			grid-row: 1 / -1;

			text-align: right;
		}

		${StyledTechList} {
			text-align: right;
		}
	}
`;

const Projects = () => (
	<Section emoji="💻 " title="Projects">
		{projects.map((project) => {
			const { name, description, techs, repo, url, image } = project;
			return (
				<StyledProjectContainer>
					<StyledProjectImage src={image} />
					<StyledProjectDescription>
						<h3>{name}</h3>
						<p>{description}</p>
						<StyledTechList>
							{techs.map((tech, i) => (
								<li key={i}>{tech}</li>
							))}
						</StyledTechList>
					</StyledProjectDescription>
				</StyledProjectContainer>
			);
		})}
	</Section>
);

export default Projects;
