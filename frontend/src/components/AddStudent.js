import React,{useState} from 'react';
import './AddStudent.css'

const AddStudent = () => {
    return (
        <div>
            <div className='cont'>
                <form className='form'>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="name">Student Name</label>
                    <input type="text" id="name" placeholder="Enter Name"/>  
                        </div>
                    
                    </div>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="age">Age</label>
                     <input type="text" id="age" placeholder="Age"/>
                        </div>
                     
                    </div>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="gender">Gender</label>
                     <input type="text" id="gender" placeholder="Gender"/>
                        </div>
                     
                    </div>

                    <button type="submit" className='subButton'>Submit</button>

                </form>
            </div>
        </div>
    );
}

export default AddStudent;
