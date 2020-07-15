import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h2`
	margin-bottom: 1em;

	::before {
		content: ${(props) => `"${props.emoji} "` || ""};
	}
`;

const StyledSection = styled.section`
	padding: 2em 0;
`;

const Section = (props) => (
	<StyledSection>
		<StyledHeading emoji={props.emoji}>{props.title}</StyledHeading>
		{props.children}
	</StyledSection>
);

export default Section;
