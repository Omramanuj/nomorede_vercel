"use client"

import React from 'react';
import { useUser } from '../../context/UserContext';
import CustomerProfile from '@/components/Profile/customerProfile/CustomerProfile';
import withAuth from '../../auth/withAuth';


const Profile = () => {
  const { partnerId } = useUser();

  return (
    <div>
     

      <CustomerProfile/>
    </div>
  );
};

export default withAuth(Profile);
