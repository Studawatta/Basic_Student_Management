import React, { useContext, useState } from 'react';
import { SignupContext } from '../home/SignupContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Nav.css';
import { FaListUl } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext';

const Nav = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const { loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const [showDrop,setShowDrop]= useState(false);
    const {showSignup, setShowSignup} = useContext(SignupContext);
    const [showLogin, setShowLogin] = useState('a');
    
    // const [username, setUsername]  = useState("");
    // const [ password, setPassword] = useState("");

    

    // function login(e){
    //     e.preventDefault();

    //     const user = {
    //         username,
    //         password
    //     }
       

    //     axios.post("http://localhost:8800/user/login",user).then((res)=>{
            
    //         alert(res.data.message);
    //         navigate("/userHome",{params:{user:username}});
           
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
        
    //     // setShowSignup(false);
    // }

    const handleChange = (e) => {
        setCredentials((prev)=>({ ...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {

            const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            // alert("login")
            navigate("/userHome");
              
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data});
            console.log(err);
        }
    //     axios.post("http://localhost:8800/api/auth/login",credentials).then(()=>{
            
    //      alert("login");
       
    // }).catch((err)=>{
    //      alert(err);
       
    // })
    };
    
   
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
                    
                    onClick={()=>{setShowSignup(!showSignup)}}
                    >Register</div>
                </div>

                <div className={`login${showLogin===true ? 'Open': showLogin===false ?'Hide' : ""} `}  >
                    <div className='loginInner'>
                      <h1>Sign In</h1>
           <form >
            <p>Username</p>
            <input className='loginInput' type="text" id="username"
             onChange={handleChange}
            />
            <p>Password</p>
            <input className='loginInput' type="password" id="password"
            onChange={handleChange}
            />  
             <button id='signBtn' onClick={handleClick} >Sign In</button>
             {error && <span>{error.message}</span>}
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
