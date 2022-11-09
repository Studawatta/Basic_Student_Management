import React,{useState} from 'react';
import './AddStudent.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi";
const AddStudent = () => {

   const [name,setName] = useState("");
   const [age,setAge] = useState("");
   const [gender,setGender] = useState("");

   const navigate = useNavigate();

   function sendData(e){
    e.preventDefault();

    const newStudent = {
        name,
        age,
        gender
    }

    axios.post("http://localhost:5000/student/add",newStudent).then(()=>{
        alert("Student Added");
        setName("");
        setAge("");
        setGender("");
    }).catch((err)=>{
        alert(err);
    })
    navigate('/');
   }

    return (
        <div>
            <div>
            <Link to="/" className='back'> <BiArrowBack className='backarrow'/>Go back</Link>
            </div>
            
            <div className='cont'>
                <form className='form' onSubmit={sendData}>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="name">Student Name</label>
                    <input type="text" id="name" placeholder="Enter Name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    />  
                        </div>
                    
                    </div>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="age">Age</label>
                     <input type="text" id="age" placeholder="Age"
                     onChange={(e)=>{
                        setAge(e.target.value);
                     }}
                     />
                        </div>
                     
                    </div>
                    <div className='inputcont'>
                        <div className='input'>
                        <label for="gender">Gender</label>
                     <input type="text" id="gender" placeholder="Gender"
                     onChange={(e)=>{
                        setGender(e.target.value);
                     }}
                     />
                        </div>
                     
                    </div>

                    <button type="submit" className='subButton'>Submit</button>

                </form>
            </div>
        </div>
    );
}

export default AddStudent;
