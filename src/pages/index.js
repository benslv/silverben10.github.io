import React from "react";

// Import components
import Layout from "../components/layout";

// Import sections
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";

// Import styles
import "../styles/index.scss";

const IndexPage = () => (
    <Layout title="Home">
        <Hero />
        <About />
        <Skills />
    </Layout>
);

export default IndexPage;
