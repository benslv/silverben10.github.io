import React from "react";

// Components
import Layout from "../components/layout";

// Styling
import GlobalStyle from "../styles/GlobalStyle";

// Sections
import Hero from "../sections/hero";
import About from "../sections/about";
import Skills from "../sections/skills";
import Experience from "../sections/experience";
import Projects from "../sections/projects";

const IndexPage = () => (
	<Layout>
		<GlobalStyle />
		<Hero />
		<About />
		<Skills />
		<Experience />
		<Projects />
	</Layout>
);

export default IndexPage;
