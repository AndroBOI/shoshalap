import React from 'react';
import SignupComponent from '../Components/SignupComponent';
import '../assets/Styles/main.scss'
const SignupPage = () => {
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <SignupComponent/>
    </div>
);
};

export default SignupPage;