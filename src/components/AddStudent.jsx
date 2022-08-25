import React,{useState} from 'react';
import axios from 'axios';

const AddStudent = () => {

      const [name,setName] = useState("");
      const [age,setAge] = useState("");
      const [gender,setGender] = useState("");

      function sendData(e){
        
       e.preventDefault();

       const newStudent = {
        name,
        age,
        gender
       }

       axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
        alert("Student Added")
        setName("");
        setAge("");
        setGender("");
       }).catch((err)=>{
        alert(err)
       })
      }

    return (
        <div style={{width:400}}>
            <form onSubmit={sendData}>
  <div className="mb-3">
    <label className="form-label">Student Name</label>
    <input type="text" className="form-control" placeholder="Name"
     onChange={(e)=>{
        setName(e.target.value);
     }}/>
    
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="text" className="form-control" placeholder='Age'
    onChange={(e)=>{
        setAge(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Gender</label>
    <input type="text" className="form-control" placeholder='Gender'
    onChange={(e)=>{
        setGender(e.target.value);
    }}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}

export default AddStudent;
