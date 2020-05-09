import React from "react";

import Layout from "../components/layout";
import Navbar from "../components/navbar";

import "../styles/index.scss";

const IndexPage = () => (
	<Layout title="Home">
		<header>
			<p>Hi, my name is</p>
			<h1>Ben Silverman</h1>
			<p>
				I’m a second-year Computer Science student currently at the University of York with
				a keen interest in web design and development.
			</p>
		</header>
	</Layout>
);

export default IndexPage;
