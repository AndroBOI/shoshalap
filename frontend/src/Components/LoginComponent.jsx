import React from 'react';
import styles from './LoginComponent.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const SignupComponent = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const validation = () => {
        setEmailError('');
        setPasswordError('');
        let isValid = true;

        if (!email) {
			setEmailError('Email is required');
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Email is invalid');
			isValid = false;
		}

        if(!password) {
            setPasswordError('Password is Required');
            isValid = false;
        }

        return isValid;
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        if(validation()) {
            axios.post('http://localhost:3001/login', {email, password})
                .then(result => {
                    if(result.data === 'Login Successful') {
                        navigate('/home');
                    } else {
                        alert(result.data);
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div className={`container ${styles.container}`}>
            <div className={`sign-up-wrapper ${styles.signUpWrapper}`}>
                <form onSubmit={handleLogIn}>
                    <div className={`${styles.inputWrapper}`}>
                        <label htmlFor="email">Email:</label>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className={emailError ? styles.err : styles.emailInput} type="text" id='email'/>
                        {emailError && <p>{emailError}</p>}
                    </div>
                    <div className={`${styles.inputWrapper}`}>
                        <label htmlFor="password">Password:</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={passwordError ? styles.err : styles.passwordInput} type="password" id='password'/>
                        {passwordError && <p>{passwordError}</p>}
                    </div>
                    <button type='submit' className={`btn btn-outline-primary ${styles.btnSignUp}`}>Log In</button>
                </form>
                <Link className={`${styles.registerBtn}`} to='/register'>Don't Have an Account? Register here</Link>
            </div>
        </div>
    )
};

export default SignupComponent;
