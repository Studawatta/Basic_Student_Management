import React from 'react';
import './homeHero.css';
import students from "../../images/students.png"
import admin_dash from "../../images/admin_dash.jpg"

const HomeHero = () => {
    return (
        <div className='heroCont'>
            <div className='Header'>

               <img src={students} alt="headerImg" className='headerImg' />
                <h1 className='headerH1'>Welcome to the Student Management System</h1>
            </div>
            <div className='title'>
                <p >Improve the way your school
                manages information and automates processes.</p>
            </div>
            <div className='regButtonCont'>
                <div className='regButton'>Register Now</div>
            </div>
            <div>
                <p className='subHeader'>Benifists to Administrators</p>
            </div>
            <div className='BeniCont'>
             <div className='Beni'>
                <img src={admin_dash} className="BeniImg"/>
                <p className='BeniHeader'>Student Dashboard</p>
                <div className='BeniPara'>
                    <p className='para'>Comprehensive, cutomizable student dashboard
                        provides at-a-glance access and editing capabilities
                        for numerous areas, including: academics, alerts,
                        behavior, contact info, demographics, finance,
                        schedules, and transcripts.
                    </p>
                </div>
             </div>
             <div className='Beni'></div>
            </div>
            

            <div className='footer'></div>
        </div>
    );
}

export default HomeHero;
