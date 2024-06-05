"use client"

import React from 'react';
import { useUser } from '../../context/UserContext';
import CustomerProfile from '@/components/Profile/customerProfile/CustomerProfile';
import withAuth from '../../auth/withAuth';


const Profile = () => {
  const { partnerId,logout } = useUser();

  return (
    <div>
     
      <CustomerProfile/>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default withAuth(Profile);
