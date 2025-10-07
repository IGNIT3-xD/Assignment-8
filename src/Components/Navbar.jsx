import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../assets/resources/logo.png'
import GithubLogo from '../assets/resources/Vector.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10 lg:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        <NavLink to={'/'} className={'font-medium hover:text-[#632EE3]'}>Home</NavLink>
                        <NavLink to={'/apps'} className={'font-medium hover:text-[#632EE3]'}>Apps</NavLink>
                        <NavLink to={'/installation'} className={'font-medium hover:text-[#632EE3]'}>Installation</NavLink>
                    </ul>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-10' src={Logo} alt="Logo" />
                    <h1 className='font-bold text-xl text-[#632EE3]'>HERO.IO</h1>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    <NavLink to={'/'} className={'font-medium hover:text-[#632EE3]'}>Home</NavLink>
                    <NavLink to={'/apps'} className={'font-medium hover:text-[#632EE3]'}>Apps</NavLink>
                    <NavLink to={'/installation'} className={'font-medium hover:text-[#632EE3]'}>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/IGNIT3-xD' target='_blank' className="btn bg-linear-to-l from-[#632EE3] to-[#9F62F2] text-white"><img src={GithubLogo} /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;