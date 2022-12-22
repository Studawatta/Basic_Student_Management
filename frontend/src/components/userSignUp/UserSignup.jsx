import React , {useContext, useState, useEffect, useRef }  from 'react';
import axios from 'axios';
import './userSignup.css';
import { SignupContext } from '../home/SignupContext';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Done from '../confirmations/Done';
import Error from '../errors/Error';
const UserSignup = () => {

    const {showSignup, setShowSignup} = useContext(SignupContext);
    let signupRef = useRef();
    
    const [confirme,setConfirme] = useState({
        message:"",
        isDone:false,
    })

    const [error, setError] = useState({
        message:"",
        err:false
    })
    const [username, setUsername]  = useState("");
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        let handler = (e) => {
            if(!signupRef.current.contains(e.target)) {
                setShowSignup(false);
                // console.log(signupRef.current);
            }
           
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    function sendData(e){
        e.preventDefault();

        const newUser = {
            username,
            email,
            password
        }

        axios.post("http://localhost:8800/api/auth/register",newUser).then(()=>{
            
            // alert("Registered");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirme({
                message: "Successfully Registered",
                isDone:true,
            })
        }).catch((err)=>{
            // alert(err);
            setError({
                message: "Error In Registration",
                err:true,
            })
        })
        
        // setShowSignup(false);
    }
    return (
        <div className='wrapper'>
            <div className='signupCont' ref={signupRef}>
                <div className='innerCont'>
                    <AiOutlineClose className='closeButton'
                     onClick={()=>{setShowSignup(false)}}
                    />
                <h2 className='mainHeader'>Register</h2>

                {confirme.isDone && <Done message={confirme.message}/>}
                {error.err && <Error message={error.message}/>}

                <form className='innerForm' onSubmit={sendData}>
                
                <h3 className='lable'>User Name</h3>
                <div className='formInput'>
                    <input type='text'
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    />
                </div>
                <h3 className='lable'>Email</h3>
                <div className='formInput'>
                    <input type='email'
                     onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                     />
                </div>
                <h3 className='lable'>Password</h3>
                <div className='formInput'>
                    <input type='password'
                     onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                     />
                </div>
                
                <div className='buttonCont'>
                    <button type='submit'>Register</button>
                </div>

                </form>
                
                
                </div>
            </div>
        </div>
    );
}

export default UserSignup;
