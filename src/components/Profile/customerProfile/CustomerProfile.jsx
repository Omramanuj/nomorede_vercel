'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import styles from './customerProfile.module.css';

const CustomerProfile = () => {
  const { partnerId } = useUser();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://nomorede-backend-wxlxpjor2a-el.a.run.app/user/profile/${partnerId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }
        const data = await response.json();
        setUserDetails(data);
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (partnerId) {
      fetchUserDetails();
    } else {
      setLoading(false);
      setError('No partner ID found');
    }
  }, [partnerId]);

  if (loading) {
    return <div className={styles.pageContainer}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.pageContainer}>Error: {error}</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        <h1 className={styles.title}>Profile Page</h1>
        {userDetails ? (
          <div className={styles.profileDetails}>
            <img src={userDetails.profilePicture || '/default-profile.png'} alt="Profile" className={styles.profilePicture} />
            <div className={styles.info}>
              <p><strong>Partner ID:</strong> {partnerId}</p>
              <p><strong>First Name:</strong> {userDetails.first_name}</p>
              <p><strong>Last Name:</strong> {userDetails.last_name}</p>
              <p><strong>Email:</strong> {userDetails.email}</p>
              <p><strong>Language:</strong> {userDetails.language}</p>
              <p><strong>Account Status:</strong> {userDetails.account_status}</p>
              <button className={styles.editButton}>Edit Profile</button>
            </div>
          </div>
        ) : (
          <p>No user details found. Please log in to see your profile.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
