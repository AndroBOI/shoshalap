import React from 'react';
import LoginComponent from '../Components/LoginComponent';
const LoginPage = () => {
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <LoginComponent/>
    </div>
);
};

export default LoginPage;