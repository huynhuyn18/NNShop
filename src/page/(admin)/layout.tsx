import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../compondents/Header";
import Footer from "../../compondents/Footer";

const LayoutAdmin = () => {
    return (
        <div>
            <aside>Aside</aside>
            <main>
                <Header/>
                <Outlet />
                <Footer/>
            </main>
        </div>
    );
};

export default LayoutAdmin;