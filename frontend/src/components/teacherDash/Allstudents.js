import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AllStudents.css"
import { Link } from "react-router-dom";


const Allstudents = () => {

const [students, setStudents] = useState([]);

useEffect(() => {
    
    function getStudents (){
        axios.get("http://localhost:5000/student/").then((res)=>{
            setStudents(res.data);
        }).catch((err)=>{
            alert(err);
        })
    };

    getStudents();
}, []);

    return (
        <div>
           <div className='wrapper'>
            <Link to='/add' className='button'><h1>Add Student</h1></Link>
            <div className='tableContainer'>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {students.map((item,index)=>{
                            return(
                                <tr className='trow' key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
           </div>
           
            
        </div>
    );
}

export default Allstudents;
