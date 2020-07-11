import React from "react";
import styled from "styled-components";

const StyledTwoColGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(300px, 1fr));
	column-gap: 20px;
`;

const TwoColGrid = ({ children }) => <StyledTwoColGrid>{children}</StyledTwoColGrid>;

export default TwoColGrid;
