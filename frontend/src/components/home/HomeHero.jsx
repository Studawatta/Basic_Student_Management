import React from 'react';
import './homeHero.css';
import students from "../../images/students.png"

const HomeHero = () => {
    return (
        <div className='heroCont'>
            <div className='Header'>

               <img src={students} alt="headerImg" className='headerImg' />
                <h1 className='headerH1'>Welcome to the Student Management System</h1>
            </div>
            <div className='title'>
                <h1 >Improve the way your school
                manages information and automates processes.</h1>
            </div>
            
        </div>
    );
}

export default HomeHero;
