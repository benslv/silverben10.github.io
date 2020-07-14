import React, { useState } from "react";
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
	padding: 0.5em 0 0 0;
	margin: 0;
	list-style: none;
`;

const StyledTabButton = styled.button`
	outline: none;
	border: none;
	font-size: ${fontSizes.base};
	padding: 0;
	padding: 0.5em;
	height: 50px;
	border-left: 2px solid ${colors.accent_20};

	background: ${(props) => (props.isActive ? colors.accent_20 : "none")};
	color: ${(props) => (props.isActive ? colors.darkGrey : colors.grey)};

	display: flex;
	align-items: center;
	text-align: left;
	width: 100%;

	transition: ${easing};

	:hover {
		color: ${colors.darkGrey};
	}
`;

const Experience = () => {
	const [activeTabId, setActiveTabId] = useState(0);

	return (
		<Section emoji="👥" title="Experience">
			<StyledTabs>
				<StyledTabList>
					{jobs.map(({ name }, i) => (
						<li key={i}>
							<StyledTabButton
								isActive={activeTabId === i}
								id={`tab-${i}`}
								className="tab-links"
								onClick={() => setActiveTabId(i)}>
								{name}
							</StyledTabButton>
						</li>
					))}
				</StyledTabList>
			</StyledTabs>
		</Section>
	);
};

export default Experience;
