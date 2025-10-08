import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading'

const Root = () => {

    const navigation = useNavigation();

    return (
        <div className='inter flex flex-col min-h-screen bg-[#F5F5F5]'>
            <Navbar></Navbar>
            <div className='flex-1'>
                {
                    navigation.state === "loading" ?
                        <Loading></Loading> :
                        <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;