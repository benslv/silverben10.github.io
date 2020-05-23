import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
	margin: 2em 0;
`;

const SectionHeader = styled.h2`
	position: relative;
`;

const Section = ({ children, title }) => (
	<StyledSection>
		<SectionHeader>{title}</SectionHeader>
		{children}
	</StyledSection>
);

export default Section;
