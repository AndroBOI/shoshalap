import React from 'react';
import styles from './LoginComponent.module.scss';
import { Link } from 'react-router-dom';
const SignupComponent = () => {
    return(
        <div className={`container ${styles.container}`}>
            <div className={`sign-up-wrapper ${styles.signUpWrapper}`}>
                <form>
                    <div className={`${styles.inputWrapper}`}>
                        <label htmlFor="username">Username:</label>
                        <input className={`${styles.userNameInput}`} type="text" id='username'/>
                    </div>
                    <div className={`${styles.inputWrapper}`}>
                        <label htmlFor="password">Password:</label>
                        <input className={`${styles.passwordInput}`} type="password" id='password'/>
                    </div>
                </form>
                <button className={`btn btn-outline-primary ${styles.btnSignUp}`}>Log In</button>
                <Link className={`${styles.registerBtn}`} to='/register'>Don't Have an Account? Register here</Link>
            </div>
        </div>
    )
};

export default SignupComponent;
