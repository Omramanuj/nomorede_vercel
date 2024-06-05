"use client";

import { useState } from 'react';
import styles from './Contact.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const initialFormState = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || "You have been heard! We will get back to you soon.");
        setFormState(initialFormState);
      } else {
        const error = await response.json();
        toast.error(error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error joining the waitlist. Please try again.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <ToastContainer />
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <p>Need to get in touch with our team?</p>
        <br />
        <p>Please fill out the form below, and we'll get back to you as soon as possible.</p>
        <br />
        <p>For booking appointments with our professional stylists, visit our booking page. We're here to help you look your best!</p>
        <div className={styles.socialMediaIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/nomorede_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/nomorede" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        {['name', 'email', 'message'].map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field !== 'message' ? (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formState[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <textarea
                id={field}
                value={formState[field]}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
