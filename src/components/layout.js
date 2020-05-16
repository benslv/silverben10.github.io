import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/footer";

import "../styles/layout.scss";

const Layout = ({ title, children }) => (
    <div>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div className="container">{children}</div>
    </div>
);

export default Layout;
