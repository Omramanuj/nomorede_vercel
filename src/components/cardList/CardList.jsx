'use client'
import React, { useState } from 'react';
import styles from './cardList.module.css';

export const CardList = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 
          className={`${styles.title} ${activeTab === 'Featured' ? styles.active : ''}`} 
          onClick={() => setActiveTab('Featured')}
        >
          Featured
        </h1>
        <h1 
          className={`${styles.title} ${activeTab === 'Explore' ? styles.active : ''}`} 
          onClick={() => setActiveTab('Explore')}
        >
          Explore
        </h1>
        <h1 
          className={`${styles.title} ${activeTab === 'Following' ? styles.active : ''}`} 
          onClick={() => setActiveTab('Following')}
        >
          Following
        </h1>
      </div>
      <div className={styles.design}>
        <div className={styles.post}>
          <div className={styles.text}>design1</div>
        </div>
        <div className={styles.post}>
          <div className={styles.text}>design2</div>
        </div>
        <div className={styles.post}>
          <div className={styles.text}>design3</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>All Services</button>
      </div>
      <div className={styles.howWeWork}>
        <h2 className={styles.howWeWorkTitle}>How we work</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepText}>
              We begin with a personalized meeting at your convenience to understand your needs, preferences, and comfort level according to the service you've chosen.
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepText}>
              Next, we craft a comprehensive lookbook tailored to your requirements, containing all the essential information relevant to the service you've selected.
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepText}>
              Following the creation of your lookbook, we schedule another call to gather your feedback and address any changes or adjustments you'd like to make.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialImageContainer}>
        <img src="/help.png" alt="Testimonial" className={styles.testimonialImage} />
      </div>
      <div className={styles.promoSection}>
        <p className={styles.promoText}>
          Be the part of fashion revolution and embrace a personalised styling experience like no other.
        </p>
        <p className={styles.promoSubtext}>
          with our online personal styling service
        </p>
      </div>
      <div className={styles.brandImageContainer}>
        <img src="/brand.png" alt="Discover Our Brands" className={styles.brandImage} />
      </div>
    </div>
  );
};
