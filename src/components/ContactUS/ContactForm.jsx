"use client";

import { useState } from 'react';
import styles from './Contact.module.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        toast.success("you have been heard! We will get back to you soon.");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const error = await response.json();
        console.log(error.message);
        toast.error(error.message);
      }
    }

    catch (error){
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
        <br/>
        <p> Please fill out the form below, and we'll get back to you as soon as possible.</p>
        <br/>
         <p>For booking appointments with our professional stylists, visit our booking page. We're here to help you look your best!</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
