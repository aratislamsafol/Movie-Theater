import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full bg-black'>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;