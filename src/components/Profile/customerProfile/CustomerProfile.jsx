'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import styles from './customerProfile.module.css';

const ProfileDetail = ({ label, value, isPrimary }) => (
  <div className={styles.detailItem}>
    <span><strong>{label}:</strong> {value}</span>
    {isPrimary && <span className={styles.primaryLabel}>Primary</span>}
  </div>
);

const ProfileDetails = ({ details, onLogout, onEditProfile }) => (
  <div className={styles.detailsContainer}>
    <div className={styles.profileHeader}>
      <div className={styles.profilePictureContainer}>
        <img src={details.profile_picture} alt="Profile" className={styles.profilePicture} />
        {details.account_status === 'active_account' && (
          <div className={styles.activeStatus}></div>
        )}
      </div>
      <div className={styles.profileInfo}>
        <h2 className={styles.profileName}>{`${details.first_name} ${details.last_name}`}</h2>
        <button className={styles.editButton} onClick={onEditProfile}>Edit profile</button>
      </div>
    </div>
    <ProfileDetail label="User Type" value={details.user_type} />
    <ProfileDetail label="Language" value={details.language} />
    <ProfileDetail label="Account Status" value={details.account_status} />
    <ProfileDetail label="Email" value={details.email} />
    <ProfileDetail label="Mobile Number" value={details.mobile_number} />
    <button className={styles.logoutButton} onClick={onLogout}>Logout</button>
  </div>
);

const CustomerProfile = () => {
  const { partnerId, logout } = useUser();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

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

  const handleLogout = () => {
    logout(); // Call the logout function from the context
  };

  const handleEditProfile = () => {
    router.push('/complete-profile'); // Redirect to complete-profile page
  };

  if (loading) {
    return <div className={styles.pageContainer}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.pageContainer}>Error: {error}</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        <h1 className={styles.title}>Profile details</h1>
        {userDetails ? (
          <ProfileDetails 
            details={userDetails} 
            onLogout={handleLogout} 
            onEditProfile={handleEditProfile} 
          />
        ) : (
          <p>No user details found. Please log in to see your profile.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
