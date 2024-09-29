import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../compondents/Header";
import Footer from "../../compondents/Footer";

const LayoutWebsite = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LayoutWebsite;