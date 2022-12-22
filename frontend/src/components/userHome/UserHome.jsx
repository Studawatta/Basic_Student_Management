import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const UserHome = () => {

    const { user, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div style={{marginTop:"300px"}}>
            <h1>This is the User home</h1>
            <h1>Hello {user.username}</h1>
            <button onClick={()=>{
                dispatch({ type: "LOGOUT" });
                navigate("/")
            }}>logout</button>
        </div>
    );
}

export default UserHome;
