import React from "react";

// Import components
import Layout from "../components/layout";

// Import sections
import Hero from "../components/sections/hero";

// Import styles
import "../styles/index.scss";

const IndexPage = () => (
    <Layout title="Home">
        <Hero></Hero>
    </Layout>
);

export default IndexPage;
