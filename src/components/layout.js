import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/layout.scss";

const Layout = ({ title, children }) => (
    <div>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Navbar />
        {children}
        <Footer />
    </div>
);

export default Layout;
