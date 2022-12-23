import React, { useContext, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./userHomeHero.css"
import axios from 'axios';
const UserHomeHero = () => {

    const { user} = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);
    const [school, setSchool] = useState("");

    function sendData(e){
        e.preventDefault();

        const newSchool = {
            school
        };

        axios.post(`http://localhost:8800/api/schools/${user._id}`,newSchool).then(()=>{
            
         alert("Registered");
       
    }).catch((err)=>{
         alert(err);
        
    })
    }
    return (
        <div className='userHeroCont'>
            <div className='userHero'>
                <div className='userHeader'>
                <h1>Hello {user.username}, Wellcome to the Student Management</h1>
                </div>
                <div className='userCollectionWrapper'>
                <div className='userCollectionCont'>
                    <div className='userCollection'>
                        <h2>Your collections</h2>
                        <button onClick={()=>{
                            setShowForm(!showForm);
                        }}>new</button>
                    </div>
                  
                    
                </div>
                {showForm? (<div className='newCollectionForm'>
                    <div className='newCollectionFormInner'>
                    <div className='newCollectionFormH'>Enter your school name</div>
                    <input type="text" 
                     onChange={(e)=>{
                        setSchool(e.target.value);
                    }}
                    />
                    <button onClick={sendData}>Create</button>
                    </div>
                    

                </div>):""}
                
                </div>
               

              
                 
            </div>
           
        </div>
    );
}

export default UserHomeHero;
