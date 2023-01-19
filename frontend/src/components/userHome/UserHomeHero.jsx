import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import './userHomeHero.css';

const UserHomeHero = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      console.log(user);
      setName(user.name);
    }
  }, []);

  return (
    <div className="userHeroCont">
      <div className="userHero">
        <div className="userHeader">
          <h1>Hello {name}, Wellcome to the Student Management</h1>
        </div>
        <div className="userCollectionWrapper">
          <div className="userCollectionCont">
            <div className="userCollection">
              <h2>Your collections</h2>
              <button
                onClick={() => {
                  setShowForm(!showForm);
                }}
              >
                new
              </button>
            </div>
          </div>
          {showForm ? (
            <div className="newCollectionForm">
              <div className="newCollectionFormInner">
                <div className="newCollectionFormH">Enter your school name</div>
                <input type="text" />
                <button>Create</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHomeHero;
