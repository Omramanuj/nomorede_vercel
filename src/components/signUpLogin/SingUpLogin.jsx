'use client';

import React, { useState } from 'react';
import styles from './authPage.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '@/context/UserContext';

const Authentication = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_type: '',
    email: '',
    account_status: '',
    password: '',
    partner_id: '',
    language: '',
  });
  const { login } = useUser();
  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Chinese",
    "Japanese", "Korean", "Arabic", "Portuguese", "Russian",
    "Hindi", "Bengali", "Urdu", "Punjabi", "Tamil", "Telugu",
    "Malayalam", "Marathi", "Gujarati",
  ];

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLoginForm ? '/api/login' : '/api/signup';
    const { email, password, first_name, last_name, user_type, account_status, partner_id, language } = formData;
    const payload = isLoginForm
      ? { email, password }
      : { first_name, last_name, user_type: 'customer', email, account_status: null, password, partner_id: null, language };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({
          first_name: '',
          last_name: '',
          user_type: '',
          email: '',
          account_status: '',
          password: '',
          partner_id: '',
          language: '',
        });
        toast.success(result.message);
        login(result.data.partner_id); // Assuming this updates the context/state indicating user is logged in
        if (!isLoginForm) {
          window.location.href = '/complete-profile'; // Redirect only after signup
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {!isLoginForm && (
          <>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            {isLoginForm ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
      <p className={styles.toggle}>
        {isLoginForm ? "Don't have an account?" : "Already have an account?"}
        <br />
        <span className={styles.link} onClick={handleToggleForm}>
          {isLoginForm ? 'Sign up here' : 'Log in here'}
        </span>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Authentication;
