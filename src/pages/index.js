import React from "react";

// Import components
import Layout from "../components/layout";

// Import sections
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";

// Import styles
import "../styles/index.scss";

const IndexPage = () => (
    <Layout title="Home">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
    </Layout>
);

export default IndexPage;
