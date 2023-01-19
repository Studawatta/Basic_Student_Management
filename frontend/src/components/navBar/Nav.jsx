import React, { useState } from 'react';
// import { SignupContext } from '../home/SignupContext';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FaListUl } from 'react-icons/fa';

const Nav = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8800/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      navigate('/userHome');
    } else {
      alert('check your password');
    }
  };

  const [showDrop, setShowDrop] = useState(false);
  // const {showSignup, setShowSignup} = useContext(SignupContext);
  const [showLogin, setShowLogin] = useState('a');

  return (
    <div>
      <div className="nav">
        <div className="Container">
          <div className="navItemCont">
            <FaListUl
              className="listIcon"
              onClick={() => {
                if (showDrop === true) {
                  setShowDrop(false);
                } else setShowDrop(true);
              }}
            />

            <Link
              className="navItem"
              id="home"
            >
              Home
            </Link>
            <Link className="navItem">About</Link>
            <Link
              className="navItem"
              id="cont"
            >
              Contact
            </Link>
          </div>

          <div className="SignInReg">
            <div
              className="signIn"
              onClick={() => {
                if (showLogin === true) {
                  setShowLogin(false);
                } else if (showLogin === false) {
                  setShowLogin(true);
                } else {
                  setShowLogin(true);
                }
              }}
            >
              Sign In
            </div>
            <div
              className="reg"

              // onClick={()=>{setShowSignup(!showSignup)}}
            >
              Register
            </div>
          </div>

          <div
            className={`login${
              showLogin === true ? 'Open' : showLogin === false ? 'Hide' : ''
            } `}
          >
            <div className="loginInner">
              <h1>Sign In</h1>
              <form onSubmit={userLogin}>
                <p>Username</p>
                <input
                  className="loginInput"
                  type="text"
                  id="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <p>Password</p>
                <input
                  className="loginInput"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  id="signBtn"
                  value="Sign In"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {showDrop ? (
        <div className="navDropDown">
          <Link className="navItemD">Home</Link>
          <Link className="navItemD">About</Link>
          <Link
            className="navItemD"
            id="cont"
          >
            Contact
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
