import React, { useContext, useState } from 'react';
// import { SignupContext } from '../home/SignupContext';
import { Link } from "react-router-dom";
import './Nav.css';
import { FaListUl } from "react-icons/fa";

const Nav = () => {
    const [showDrop,setShowDrop]= useState(false);
    // const {showSignup, setShowSignup} = useContext(SignupContext);
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
                    <div className='reg'
                    
                    // onClick={()=>{setShowSignup(true)}}
                    >Register</div>
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
