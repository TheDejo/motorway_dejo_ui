import React from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {
    return (
        <section className="layout">
            <Header />
            <section className="main-content">{children}</section>
            <Footer />
        </section>
    );
};

export default Layout;
