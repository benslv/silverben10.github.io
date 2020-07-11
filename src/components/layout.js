import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
	margin: 0 auto;
	padding: 200px 0;
	max-width: 960px;
`;

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

export default Layout;
