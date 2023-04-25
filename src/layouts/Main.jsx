import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer> </Footer>
        </>
    );
};

export default Main;