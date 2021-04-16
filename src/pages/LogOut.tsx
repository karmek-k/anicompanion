import React, { useContext, useEffect } from 'react';
import context from '../Context';
import { removeFromStorage } from '../utils/storage';

const LogOut: React.FC = () => {
  const { setUserId } = useContext(context);

  useEffect(() => {
    async function logOut() {
      await removeFromStorage('user_id');
      setUserId(0);
    }

    logOut();
  });

  return null;
};

export default LogOut;
