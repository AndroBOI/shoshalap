import React from 'react';
import styles from './SignupComponent.module.scss';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const SignupComponent = () => {

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();

	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');


	const validation = () =>  {
		setUsernameError('')
		setEmailError('')
		setPasswordError('')
		setConfirmPasswordError('')

		let isValid = true

		if(!username) {
			setUsernameError('Username is Required')
			isValid = false
		}

		if (!email) {
			setEmailError('Email is required');
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Email is invalid');
			isValid = false;
		}

		if (!password) {
			setPasswordError('Password is required');
			isValid = false;
		} else if(password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			isValid = false
		}


		if (password !== confirmPassword) {
			setConfirmPasswordError('Passwords do not match');
			isValid = false;
		} 
	
		return isValid;
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(validation()) {
			axios.post('http://localhost:3001/users', {username, email, password})
			.then(result => console.log(result))
			.catch(err => console.log(err))
			navigate('/login')
		} else {
			console.log('error')
		}
	}
	

    return(
		<div className={`container ${styles.container}`}>
			<div className={`sign-up-wrapper ${styles.signUpWrapper}`}>
				<form onSubmit={handleSubmit}>
					<div className={`${styles.inputWrapper}`}>
						<label htmlFor="username">Username:</label>
						<input className={`
							${usernameError ? styles.err : styles.userNameInput}
						`} 
						type="text"
						id='username'
						onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					{usernameError && (
						<p>{usernameError}</p>
					)}
					<div className={`${styles.inputWrapper}
						
						`}>
						<label htmlFor="email">Email:</label>
						<input className={`
						${emailError ? styles.err : styles.emailInput}`
						} type="email" id='email'
						onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					{emailError && (
						<p>{emailError}</p>
					)}
					<div className={`${styles.inputWrapper}
						
						`}>
						<label htmlFor="password">Password:</label>
						<input className={`
						${passwordError ? styles.err : styles.passwordInput}
						`
						} type="password" id='password'
						onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{passwordError && (
						<p>{passwordError}</p>
					)}
					<div className={`${styles.inputWrapper}
						
						`}>
						<label htmlFor="confirmPassword">Confirm Password:</label>
						<input className={`
							${confirmPasswordError ? styles.err : styles.confirmPasswordInput}
						`} type="password" id='confirmPassword'
						onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					{confirmPasswordError && (
						<p>{confirmPasswordError}</p>
					)}
						<button
					type='submit'
					className={`btn btn-outline-primary ${styles.btnSignUp}`}>Sign Up</button>
				</form>
				<Link to='/login' className={`${styles.logInBtn}`}>Already Have an Account</Link>
			</div>
		</div>
    )
};

export default SignupComponent;
