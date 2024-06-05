"use client"

import React from 'react';
import { useUser } from '../../context/UserContext';
import withAuth from '../../auth/withAuth';

const Profile = () => {
  const { partnerId } = useUser();

  return (
    <div>
      <h1>Profile Page</h1>
      {partnerId ? (
        <p>Your Partner ID: {partnerId}</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default withAuth(Profile);