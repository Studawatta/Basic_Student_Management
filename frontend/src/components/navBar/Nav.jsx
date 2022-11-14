import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div >
            
            <div className='nav'>
                <div className='navItemCont'>
                    <Link className='navItem'>Home</Link>
                    <Link className='navItem'>About</Link>
                    <Link className='navItem' id="cont">Contact</Link>
                </div>
                <div className='SignInReg'>
                    <Link className='signIn'>Sign In</Link>
                    <Link className='reg'>Register</Link>
                </div>
            </div>
                
            
        </div>
    );
}

export default Nav;
