import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FaListUl } from "react-icons/fa";

const Nav = () => {
    return (
        <div >
            
            <div className='nav'>
                <div className='Container'>
                <div className='navItemCont'>
                    <FaListUl className='listIcon'/>
                   
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
                  <div className='navDropDown'>
                    <Link className='navItemD'>Home</Link>
                    <Link className='navItemD'>About</Link>
                    <Link className='navItemD' id="cont">Contact</Link>
                    </div>
                
            
        </div>
    );
}

export default Nav;
