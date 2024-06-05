'use client';
import React, { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './CompleteProfile.module.css'; // Adjust the path as necessary

const CompleteProfile = () => {
    const { partnerId } = useUser();
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;
    const [profileData, setProfileData] = useState({
        partner_id: partnerId || '',
        profile_picture: '',
        request_id: [],
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
        care_data: null,
        style_data: null,
        updated_at: new Date().toISOString()
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

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep < totalSteps) {
            handleNext();
        } else {
            console.log('Submitting profile data:', profileData);
            try {
                const response = await fetch('/api/completeprofile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(profileData)
                });

                const result = await response.json();
                if (response.ok) {
                    toast.success('Profile completed successfully!');
                } else {
                    toast.error(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error('Network error:', error);
                toast.error(`Network error: ${error.toString()}`);
            }
        }
    };

    const renderStepContent = (step) => {
        switch(step) {
            case 1:
                return (
                    <div>
                        <label>Profile Picture URL:
                            <input type="text" className={styles.inputField} name="profile_picture" value={profileData.profile_picture} onChange={handleChange} placeholder="https://www.example.com/path/to/profile_picture.jpg" />
                        </label>
                        <label>Mobile Number:
                            <input type="text" className={styles.inputField} name="mobile_number" value={profileData.mobile_number} onChange={handleChange} />
                        </label>
                        <label>Gender:
                            <select className={styles.inputField} name="gender" value={profileData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <label>Street Address:
                            <input type="text" className={styles.inputField} name="address.street_address" value={profileData.address.street_address} onChange={handleChange} />
                        </label>
                        <label>City:
                            <input type="text" className={styles.inputField} name="address.city" value={profileData.address.city} onChange={handleChange} />
                        </label>
                        <label>State:
                            <input type="text" className={styles.inputField} name="address.state" value={profileData.address.state} onChange={handleChange} />
                        </label>
                        <label>Country:
                            <input type="text" className={styles.inputField} name="address.country" value={profileData.address.country} onChange={handleChange} />
                        </label>
                        <label>Postal Code:
                            <input type="text" className={styles.inputField} name="address.postal_code" value={profileData.address.postal_code} onChange={handleChange} />
                        </label>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <label>Date of Birth:
                            <input type="date" className={`${styles.inputField} ${styles.dateInput}`} name="DOB" value={profileData.DOB} onChange={handleChange} />
                        </label>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formCard}>
                <form onSubmit={handleSubmit}>
                    {renderStepContent(currentStep)}
                    <div className={styles.navigationButtons}>
                        {currentStep > 1 && (
                            <button type="button" className={styles.button} onClick={handleBack}>Back</button>
                        )}
                        <button type="submit" className={styles.button}>
                            {currentStep === totalSteps ? 'Submit Profile' : 'Next Step'}
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.stepIndicatorContainer}>
                <div className={styles.stepIndicator}>
                    {[1, 2, 3].map(step => (
                        <div key={step} className={`${styles.stepCircle} ${currentStep === step ? styles.active : ''}`}>{step}</div>
                    ))}
                </div>
            </div>
            <ToastContainer className={styles.toastContainer} />
        </div>
    );
};

export default CompleteProfile;
