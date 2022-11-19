import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import { FaListUl } from "react-icons/fa";

const Nav = () => {
    const [showDrop,setShowDrop]= useState(false);
    return (
        <div >
            
            <div className='nav'>
                <div className='Container'>
                <div className='navItemCont'>
                    <FaListUl className='listIcon'
                    onClick={()=>{
                        if(showDrop===true){
                            setShowDrop(false);
                        }
                        else
                          setShowDrop(true);
                        
                    }}
                    />
                   
                    <Link className='navItem' id='home'>Home</Link>
                    <Link className='navItem'>About</Link>
                    <Link className='navItem' id="cont">Contact</Link>
                </div>
                <div className='SignInReg'>
                    <Link className='signIn'>Sign In</Link>
                    <Link className='reg'>Register</Link>
                </div>
                </div>
               
            </div>
            {
                showDrop? (
<div className='navDropDown'>
                    <Link className='navItemD'>Home</Link>
                    <Link className='navItemD'>About</Link>
                    <Link className='navItemD' id="cont">Contact</Link>
                    </div>
                ) :""
            }
                  
                
            
        </div>
    );
}

export default Nav;
