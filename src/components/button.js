import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
	background-image: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0) 50%,
		red 50%,
		red 50%
	);

	background-size: 200%;

	border: 5px solid red;
	color: red;
	font-weight: 700;

	display: inline-block;
	margin: 0;
	padding: 0.5em 1.2em;

	text-align: center;
	text-decoration: none !important;
	transition: background-position 0.15s, ease-in-out all 0.175s;

	&:hover {
		color: white;
		background-position: -100% 100%;
	}
`;

const Button = (props) => {
	return (
		<StyledButton
			href={props.href}
			target={props.target ? props.target : ""}
			rel="noopener noreferrer">
			{props.children}
		</StyledButton>
	);
};

export default Button;
