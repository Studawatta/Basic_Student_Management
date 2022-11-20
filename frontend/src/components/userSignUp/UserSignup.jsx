import React from 'react';
import './userSignup.css';
const UserSignup = () => {
    return (
        <div>
            <div className='signupCont'>
                <div>
                <h2 className='mainHeader'>Register</h2>
                <form className='innerForm'>
                
                <h3 className='lable'>User Name</h3>
                <div className='formInput'>
                    <input type='text' />
                </div>
                <h3 className='lable'>Email</h3>
                <div className='formInput'>
                    <input type='email' />
                </div>
                <h3 className='lable'>Password</h3>
                <div className='formInput'>
                    <input type='password' />
                </div>
                
                <div className='buttonCont'>
                    <button>Register</button>
                </div>

                </form>
                </div>
            </div>
        </div>
    );
}

export default UserSignup;
