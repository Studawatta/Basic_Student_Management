import React , {useState}from 'react';
import { SignupContext } from './SignupContext';
import Nav from '../navBar/Nav';
import HomeHero from './HomeHero';
import UserSignup from '../userSignUp/UserSignup';

const Home = () => {

    const [showSignup,setShowSignup] = useState(false);
    return (
        <div>
             <SignupContext.Provider value={{showSignup, setShowSignup}}>
                <Nav/>
                {showSignup? (<UserSignup/>): ""}
                <HomeHero/>
            </SignupContext.Provider>
            
            
            
        </div>
    );
}

export default Home;
