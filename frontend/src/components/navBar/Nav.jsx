import React, { useContext, useState } from 'react';
import { SignupContext } from '../home/SignupContext';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Nav.css';
import { FaListUl } from "react-icons/fa";

const Nav = () => {
    const [showDrop,setShowDrop]= useState(false);
    const {showSignup, setShowSignup} = useContext(SignupContext);
    const [showLogin, setShowLogin] = useState('a');
    
    const [username, setUsername]  = useState("");
    const [ password, setPassword] = useState("");

    function login(e){
        e.preventDefault();

        const user = {
            username,
            password
        }
       

        axios.post("http://localhost:5000/user/login",user).then((res)=>{
            // alert("Registered");
            alert(res.data.message);
        }).catch((err)=>{
            console.log(err);
        })
        
        // setShowSignup(false);
    }
   
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
                    <div className='signIn'
                    onClick={()=>{
                        if(showLogin===true){
                            setShowLogin(false);
                        }
                        else if(showLogin===false){
                            setShowLogin(true)
                        }
                        else{
                            setShowLogin(true);
                        }
                    }}
                    >Sign In</div>
                    <div className='reg'
                    
                    onClick={()=>{setShowSignup(true)}}
                    >Register</div>
                </div>

                <div className={`login${showLogin===true ? 'Open': showLogin===false ?'Hide' : ""} `}  >
                    <div className='loginInner'>
                      <h1>Sign In</h1>
           <form onSubmit={login}>
            <p>Username</p>
            <input className='loginInput'
             onChange={(e)=>{
                setUsername(e.target.value);
            }}
            />
            <p>Password</p>
            <input className='loginInput'
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />  
             <button type='submit'>Sign In</button>
            </form>
                 </div>
            
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
