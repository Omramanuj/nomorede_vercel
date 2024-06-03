'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [partnerId, setPartnerId] = useState(null);

  useEffect(() => {
    const storedPartnerId = Cookies.get('partner_id');
    if (storedPartnerId) {
      setPartnerId(storedPartnerId);
    }
  }, []);

  const login = (partner_id) => {
    console.log('partnerId at context',partner_id);
    setPartnerId(partner_id);
    Cookies.set('partner_id', partner_id, { expires: 7 }); // Store for 7 days
  };

  const logout = () => {
    setPartnerId(null);
    Cookies.remove('partner_id');
  };

  return (
    <UserContext.Provider value={{ partnerId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
