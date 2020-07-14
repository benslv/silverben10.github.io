import React, { useState } from "react";
import styled from "styled-components";

import Section from "../components/section";

import { jobs } from "../content";

import mixins from "../styles/mixins";
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
	padding: 0.5em 1em;
	height: 50px;
	border-left: 2px solid ${colors.accent_20};

	background: ${(props) => (props.isActive ? colors.accent_20 : "none")};
	color: ${(props) => (props.isActive ? colors.darkGrey : colors.grey)};

	display: flex;
	align-items: center;
	text-align: left;
	width: 100%;

	white-space: nowrap;

	transition: ${easing};

	:hover {
		color: ${colors.darkGrey};
	}
`;

const StyledTabContent = styled.div`
	position: relative;
	width: 100%;
	height: auto;

	padding-top: 0.5em;
	padding-left: 1em;

	ul {
		${mixins.niceList};
	}
`;

const StyledJobTitle = styled.h3`
	font-weight: bold;

	a {
		${mixins.link};
	}
`;

const StyledJobRange = styled.p`
	color: ${colors.grey};
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

				{jobs.map((job, i) => {
					const { name, role, startDate, endDate, url, responsibilities } = job;
					return (
						<StyledTabContent
							key={i}
							isActive={activeTabId === i}
							id={`content-${i}`}
							hidden={activeTabId !== i}>
							<StyledJobTitle>
								<span>{role} </span>
								<a href={url} target="_blank" rel="nofollow noopener noreferrer">
									@ {name}
								</a>
							</StyledJobTitle>
							<StyledJobRange>{`${startDate} - ${endDate}`}</StyledJobRange>
							<ul>
								{responsibilities.map((resp) => (
									<li>{resp}</li>
								))}
							</ul>
						</StyledTabContent>
					);
				})}
			</StyledTabs>
		</Section>
	);
};

export default Experience;
