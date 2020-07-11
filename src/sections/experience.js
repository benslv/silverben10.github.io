import React from "react";
import styled from "styled-components";

import Section from "../components/section";

import { jobs } from "../content";

import { colors, fontSizes, easing } from "../styles/theme";

const StyledTabs = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
`;

const StyledTabList = styled.ul`
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;
`;

const StyledTabButton = styled.button`
	outline: none;
	border: none;
	background: none;
	font-size: ${fontSizes.base};
	padding: 0;
	height: 50px;

	color: ${colors.grey};

	display: flex;
	width: 100%;

	transition: ${easing};

	:hover {
		color: ${colors.darkGrey};
	}
`;

const Experience = () => (
	<Section emoji="👥" title="Experience">
		<StyledTabs>
			<StyledTabList>
				{jobs.map(({ name }) => (
					<StyledTabButton className="tab-links" onClick={`openContent(event, ${name}`}>
						{name}
					</StyledTabButton>
				))}
			</StyledTabList>
		</StyledTabs>
	</Section>
);

export default Experience;
