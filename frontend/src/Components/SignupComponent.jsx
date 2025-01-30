import React from 'react';
import styles from './SignupComponent.module.scss';
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
					<div className={`${styles.inputWrapper}`}>
						<label htmlFor="confirmPassword">Confirm Password:</label>
						<input className={`${styles.confirmPasswordInput}`} type="password" id='confirmPassword'/>
					</div>
				</form>
				<button className={`btn btn-outline-primary ${styles.btnSignUp}`}>Sign Up</button>

				<Link to='/login' className={`${styles.logInBtn}`}>Already Have an Account</Link>
			</div>
		</div>
    )
};

export default SignupComponent;
