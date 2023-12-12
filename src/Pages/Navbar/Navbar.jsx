import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'

const Navbar = () => {


    const navlinks = <>
        <li><a href='/'>Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#projects'>Project</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar  bg-[#212325] text-[#afafaf] lg:px-16 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="brandName btn btn-ghost text-xl">Zihad</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn-prime px-6 rounded-md  py-3">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;