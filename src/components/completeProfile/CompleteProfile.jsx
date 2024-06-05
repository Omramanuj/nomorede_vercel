'use client';
import React, { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './CompleteProfile.module.css';  // Assuming CSS module for styles

const CompleteProfile = () => {
    const { partnerId } = useUser();
    const [profileData, setProfileData] = useState({
        partner_id: partnerId || '',
        profile_picture: '',
        request_id: [],  // Ensure this is an array
        address: {
            street_address: '',
            city: '',
            state: '',
            country: '',
            postal_code: ''
        },
        mobile_number: '',
        gender: '',
        DOB: '',
        care_data: '',
        style_data: '',
        updated_at: new Date().toISOString()  // Set current datetime
    });

    useEffect(() => {
        setProfileData(prevData => ({ ...prevData, partner_id: partnerId }));
    }, [partnerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [section, key] = name.split('.');
            setProfileData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [key]: value
                }
            }));
        } else {
            setProfileData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ensure profile_picture has a valid URL format
        if (!profileData.profile_picture.startsWith('http://') && !profileData.profile_picture.startsWith('https://')) {
            profileData.profile_picture = 'http://' + profileData.profile_picture;
        }

        console.log('Submitting profile data:', profileData);  // Log the payload for debugging
        try {
            const response = await fetch('/api/completeprofile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData)
            });

            const result = await response.json();
            console.log('Response status:', response.status);  // Log the response status
            console.log('Response data:', result);  // Log the response data

            if (response.ok) {
                toast.success('Profile completed successfully!');
                // Redirect or further actions if needed
            } else {
                toast.error(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Network error:', error);  // Log the network error
            toast.error(`Network error: ${error.toString()}`);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Complete Your Profile</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Partner ID (Auto-filled):
                    <input type="text" name="partner_id" value={profileData.partner_id} onChange={handleChange} disabled />
                </label>
                <label>Profile Picture URL:
                    <input type="text" name="profile_picture" value={profileData.profile_picture} onChange={handleChange} placeholder="https://www.example.com/path/to/profile_picture.jpg" />
                </label>
                <label>Street Address:
                    <input type="text" name="address.street_address" value={profileData.address.street_address} onChange={handleChange} />
                </label>
                <label>City:
                    <input type="text" name="address.city" value={profileData.address.city} onChange={handleChange} />
                </label>
                <label>State:
                    <input type="text" name="address.state" value={profileData.address.state} onChange={handleChange} />
                </label>
                <label>Country:
                    <input type="text" name="address.country" value={profileData.address.country} onChange={handleChange} />
                </label>
                <label>Postal Code:
                    <input type="text" name="address.postal_code" value={profileData.address.postal_code} onChange={handleChange} />
                </label>
                <label>Mobile Number:
                    <input type="text" name="mobile_number" value={profileData.mobile_number} onChange={handleChange} />
                </label>
                <label>Gender:
                    <select name="gender" value={profileData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>Date of Birth:
                    <input type="date" name="DOB" value={profileData.DOB} onChange={handleChange} />
                </label>
                <label>Care Data:
                    <input type="text" name="care_data" value={profileData.care_data} onChange={handleChange} />
                </label>
                <label>Style Data:
                    <input type="text" name="style_data" value={profileData.style_data} onChange={handleChange} />
                </label>
                <button type="submit" className={styles.submitButton}>Submit Profile</button>
            </form>
            <ToastContainer className={styles.toastContainer} />
        </div>
    );
};

export default CompleteProfile;
