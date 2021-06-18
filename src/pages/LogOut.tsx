import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import context from '../Context';
import storage from '../utils/storage';

const LogOut: React.FC = () => {
  const { setUserId, userId } = useContext(context);

  useEffect(() => {
    async function logOut() {
      await storage.remove('user_id');
      setUserId(0);
    }

    logOut();
  });

  if (userId === 0) {
    return <Redirect to="/" push />;
  }

  return null;
};

export default LogOut;
