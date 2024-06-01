"use client";

import React, { useState } from 'react';
import styles from './authPage.module.css'; // Import CSS module

const Authentication = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or sign up logic based on isLoginForm state
    if (isLoginForm) {
      // Perform login
      console.log('Logging in with:', email, password);
    } else {
      // Perform sign up
      console.log('Signing up with:', email, password);
    }
    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{isLoginForm ? 'Login' : 'Sign Up'}     </h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label className>Email</label>
      
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>{isLoginForm ? 'Login' : 'Sign Up'}</button>
      </form>
      <p className={styles.toggle} >
        {isLoginForm ? "Don't have an account" : "Already have an account"}
      </p>

      <p className={styles.name} onClick={handleToggleForm}>{isLoginForm? "Sign up here" :"LogIn here"}</p>
    </div>
  );
};

export default Authentication;
