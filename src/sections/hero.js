import React from "react";
import styled from "styled-components";

import TwoColGrid from "../components/twoColGrid";

const StyledTagline = styled.p`
	margin-bottom: 0;
`;

const StyledName = styled.h1`
	font-size: 2.3rem;
`;

const StyledHero = styled.div`
	grid-column: 1 / 1;
`;

const Hero = () => (
	<TwoColGrid>
		<StyledHero>
			<StyledTagline>Hey there, I'm</StyledTagline>
			<StyledName>Ben Silverman.</StyledName>
			<p>
				I’m a second-year Computer Science student currently at the University of York with
				a keen interest in web design and development.
			</p>
		</StyledHero>
	</TwoColGrid>
);

export default Hero;
