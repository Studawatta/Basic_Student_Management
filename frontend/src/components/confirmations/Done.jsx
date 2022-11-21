import React, {useContext} from 'react';
import { SignupContext } from '../home/SignupContext';
import "./done.css";

const Done = ({message}) => {

    const {showSignup, setShowSignup} = useContext(SignupContext);

    return (
        <div >
            <div className='container'>
            <h1 >
                {message}
            </h1>
            <div className='button'
            onClick={()=>{setShowSignup(false)}}
            >OK</div>
            </div>
            
        </div>
    );
}

export default Done;
