import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavigationType, useNavigate } from 'react-router-dom';
import Nav from '../navBar/Nav';
import { SignupContext } from '../home/SignupContext';
import UserHomeHero from './UserHomeHero';
const UserHome = () => {

    
   
    return (
        <div>
            
            <Nav/>
            <UserHomeHero/>
            
            
        </div>
    );
}

export default UserHome;
